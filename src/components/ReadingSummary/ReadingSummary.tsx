import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Heading,
    Text,
} from "@chakra-ui/react";
import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

interface ReadingSummaryProps {
    year: string;
    summary: string[];
}

export default function ReadingSummary({ year, summary }: ReadingSummaryProps) {
    const availableYears = ["2024", "2025"];

    // Find the next and previous years that are available
    const currentYearIndex = availableYears.indexOf(year);
    const nextYear = currentYearIndex < availableYears.length - 1 ? availableYears[currentYearIndex + 1] : null;
    const prevYear = currentYearIndex > 0 ? availableYears[currentYearIndex - 1] : null;

    useEffect(() => {
        const scrollTarget = localStorage.getItem('scrollTarget');
        if (scrollTarget) {
            const targetElement = document.querySelector(scrollTarget);
            if (targetElement) {
                setTimeout(() => {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 200);
            }
            localStorage.removeItem('scrollTarget');
        }
    }, []);

    const handleJumpToList = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        const target = document.querySelector('#booklist');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Parse the summary text to group by date posts
    const blogPosts = useMemo(() => {
        const posts: Array<{date: string, paragraphs: string[]}> = [];
        let currentPost = {
            date: '',
            paragraphs: [] as string[]
        };

        for (const paragraph of summary) {
            // Check if the paragraph is a date header
            // Match both "—Month Day, Year—" and "—Month Year Update—" formats
            if (paragraph.trim().match(/^—[A-Za-z]+ \d+, \d{4}—$/) ||
                paragraph.trim().match(/^—[A-Za-z]+ \d{4} Update—$/)) {
                // If we have an existing post with content, add it to our posts array
                if (currentPost.date && currentPost.paragraphs.length > 0) {
                    posts.push({...currentPost});
                }

                // Start a new post with this date
                currentPost = {
                    date: paragraph.trim(),
                    paragraphs: []
                };
            } else if (currentPost.date) {
                // Add this paragraph to the current post
                currentPost.paragraphs.push(paragraph);
            } else {
                // Handle paragraphs before the first date header if any
                if (!currentPost.date) {
                    currentPost.date = 'My Reading Goal';
                }
                currentPost.paragraphs.push(paragraph);
            }
        }

        // Add the final post if it has content
        if (currentPost.date && currentPost.paragraphs.length > 0) {
            posts.push(currentPost);
        }

        return posts;
    }, [summary]);

    // Function to extract a cleaner date from the full date header
    const getCleanDate = (dateHeader: string) => {
        if (dateHeader === 'My Reading Goal') return 'My Reading Goal';
        
        // Try to match the format "—Month Day, Year—"
        let match = dateHeader.match(/—([A-Za-z]+ \d+), \d{4}—/);
        if (match) return match[1];
        
        // Try to match the format "—Month Year Update—"
        match = dateHeader.match(/—([A-Za-z]+ \d{4}) Update—/);
        if (match) return match[1];
        
        // If no pattern matches, return the original
        return dateHeader;
    };
    
    return(
        <Box 
            textAlign='center' 
            px={{ base: '20px', md: '200px' }} 
            py='50'
            scrollMarginTop='80px'
        >
            <Heading mb={4} size={{ base: 'lg', md: 'xl' }}>Odalys&apos; {year} Reading List</Heading>

            <Box
                bg='#FC8F77'
                p={3}
                boxShadow='md'
                borderRadius='md'
                mb={2}
                mt={{ base: '0', md: '4' }}
                mx='auto'
                width="fit-content"
            >
                {prevYear && (
                    <Text display="inline-block" mr={4}>
                        ← Check out my{' '}
                        <Link 
                            to={`/reading${prevYear}`}
                            style={{ 
                                fontWeight: 'bold',
                                textDecoration: 'none',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                            onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                        >
                            {prevYear} Reading List
                        </Link>
                    </Text>
                )}
                {nextYear && (
                    <Text display="inline-block">
                        See my{' '}
                        <Link 
                            to={`/reading${nextYear}`}
                            style={{ 
                                fontWeight: 'bold',
                                textDecoration: 'none',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                            onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                        >
                            {nextYear} Reading List
                        </Link>
                        {' '}→
                    </Text>
                )}
            </Box>
            <Box
                bg='#FCE9A3'
                p={3}
                boxShadow='md'
                borderRadius='md'
                mb={6}
                mt={{ base: '0', md: '4' }}
                mx='auto'
                width="fit-content"
            >
                <Text>
                    <Link 
                        to="#booklist" 
                        onClick={handleJumpToList}
                        style={{ 
                            textDecoration: 'none',
                            fontWeight: 'bold'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                    >
                        Jump to {year} Reading List
                    </Link>
                </Text>
            </Box>

            <Heading mb={4} size={{ base: 'md', md: 'lg' }}>Reading Blog</Heading>

            <Accordion
                allowToggle
                defaultIndex={[0]} // Open the first item by default
                mx='auto'
                maxWidth={{ base: '100%', md: '1000px' }}
                allowMultiple={true}
            >
                {blogPosts.map((post, index) => (
                    <AccordionItem
                        key={index}
                        bg='white'
                        mb={4}
                        borderRadius='md'
                        boxShadow='md'
                        border='none'
                    >
                        <AccordionButton
                            py={4}
                            _hover={{ bg: 'gray.100' }}
                            borderRadius='md'
                        >
                            <Box flex='1' textAlign='left' fontWeight='bold'>
                                {getCleanDate(post.date)}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel
                            pb={4}
                            px={{ base: '6', md: '10' }}
                            textAlign={{ base: 'left', md: 'left' }}
                        >
                            {/* Add the full date header */}
                            <Text
                                fontWeight='bold' 
                                fontSize={{ base: 'md', md: 'lg' }} 
                                mb={4}
                                textAlign='center'
                            >
                                {post.date}
                            </Text>

                            {/* Display all paragraphs for this post */}
                            {post.paragraphs.map((paragraph, idx) => (
                                <Text
                                    key={idx} 
                                    pt='2' 
                                    fontSize={{ base: 'sm', md: 'md' }}
                                    lineHeight={{ base: '1.6', md: '1.7' }}
                                    mb={4}
                                >
                                    {paragraph}
                                </Text>
                            ))}
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </Box>
    );
}
