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

    // Parse the summary text to group by posts and format headers
    const blogPosts = useMemo(() => {
        // Step 1: Group paragraphs under their raw header string
        const groupedPosts: Array<{header: string, paragraphs: string[]}> = [];
        let tempPost = {
            header: '',
            paragraphs: [] as string[]
        };

        for (const paragraph of summary) {
            const trimmedParagraph = paragraph.trim();
            // Check if the paragraph is a header
            if (trimmedParagraph.startsWith('—') && trimmedParagraph.endsWith('—')) {
                if (tempPost.header) {
                    groupedPosts.push({...tempPost});
                }
                // Start a new post with this raw header
                tempPost = {
                    header: trimmedParagraph,
                    paragraphs: []
                };
            } else if (tempPost.header) {
                // Add paragraph to the current post
                tempPost.paragraphs.push(paragraph);
            } else {
                // Handle content before the first header ("My Reading Goal")
                tempPost.header = 'My Reading Goal';
                tempPost.paragraphs.push(paragraph);
            }
        }
        // Add the final post
        if (tempPost.header) {
            groupedPosts.push(tempPost);
        }

        // Step 2: Process each grouped post to create final display labels
        return groupedPosts.map(post => {
            if (post.header === 'My Reading Goal') {
                return {
                    buttonLabel: 'My Reading Goal',
                    panelHeader: 'My Reading Goal',
                    paragraphs: post.paragraphs
                };
            }

            // Extract content from within the "—...—"
            const headerContent = post.header.substring(1, post.header.length - 1);
            
            // Split the content into a date part and an optional title part
            const [fullDate, ...titleParts] = headerContent.split(': ');
            const title = titleParts.length > 0 ? titleParts.join(': ') : null;

            // Create the button label (e.g., "August 4: The Title")
            const dateForButton = fullDate.replace(/, \d{4}/, ''); // Removes the year
            const buttonLabel = title ? `${dateForButton}: ${title}` : fullDate;

            // Create the panel header (e.g., "—August 4, 2025—")
            const panelHeader = `—${fullDate}—`;

            return {
                buttonLabel,
                panelHeader,
                paragraphs: post.paragraphs
            };
        });
    }, [summary]);
    
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
                                {post.buttonLabel}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel
                            pb={4}
                            px={{ base: '6', md: '10' }}
                            textAlign={{ base: 'left', md: 'left' }}
                        >
                            {/* Use the new panelHeader property */}
                            <Text
                                fontWeight='bold' 
                                fontSize={{ base: 'md', md: 'lg' }} 
                                mb={4}
                                textAlign='center'
                            >
                                {post.panelHeader}
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
