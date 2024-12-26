import { Box, Heading, Text } from "@chakra-ui/react";

interface ReadingSummaryProps {
    year: string;
    summary: string[];
}

export default function ReadingSummary({ year, summary }: ReadingSummaryProps) {
    return(
        <Box 
            textAlign='center' 
            px={{ base: '20px', md: '200px' }} 
            py='50'
            scrollMarginTop='80px'
        >
            <Heading mb={4} size={{ base: 'lg', md: 'xl' }}>{year} Reading List</Heading>
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
