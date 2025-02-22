import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
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

    return(
        <Box 
            textAlign='center' 
            px={{ base: '20px', md: '200px' }} 
            py='50'
            scrollMarginTop='80px'
        >
            <Heading mb={4} size={{ base: 'lg', md: 'xl' }}>{year} Reading List</Heading>
            <Box mb={6}>
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
            <Box mb={6}>
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
            <Box 
                bg='white'
                px={{ base: '6', md: '10' }}
                py='5'
                boxShadow='md'
                borderRadius='md'
                mx='auto'
                maxWidth={{ base: '100%', md: '1000px' }}
                textAlign={{ base: 'left', md: 'center' }}
            >
                {summary.map((paragraph, index) => (
                    <Text 
                        key={index} 
                        pt='2' 
                        fontSize={{ base: 'sm', md: 'md' }}
                        lineHeight={{ base: '1.6', md: '1.7' }}
                        mb={4}
                    >
                        {paragraph}
                    </Text>
                ))}
            </Box>
        </Box>
    );
}
