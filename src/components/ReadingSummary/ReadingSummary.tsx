import { Box, Heading, Text } from "@chakra-ui/react";

interface ReadingSummaryProps {
    year: string;
    summary: string;
}

export default function ReadingSummary({ year, summary }: ReadingSummaryProps) {
    return(
        <Box 
            textAlign='center' 
            px={{ base: '50px', md: '200px' }} 
            py='50'
            scrollMarginTop='80px'
        >
            <Heading mb={4} size='xl'>{year} Reading Log</Heading>
            <Box 
                bg='white'
                px='10'
                py='5'
                boxShadow='md'
                borderRadius='md'
                mx='auto'
                maxWidth='1000px'
                textAlign={{ base: 'left', md: 'center' }}
            >
                <Text pt='2' fontSize='md'>{summary}</Text>
            </Box>
        </Box>
    );
}
