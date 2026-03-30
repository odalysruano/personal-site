
import { Box, Heading, Button, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface ReadingSummaryV2Props {
    year: string;
}

export default function ReadingSummaryV2({ year }: ReadingSummaryV2Props) {
    const allYears = ["2024", "2025", "2026"];
    const otherYears = allYears.filter(y => y !== year);

    return (
        <Box
            textAlign='center'
            px={{ base: '20px', md: '200px' }}
            py='50'
        >
            <Heading mb={4} size={{ base: 'lg', md: 'xl' }}>Odalys&apos; {year} Reading List</Heading>
            <HStack justify="center" spacing={4} mt={4}>
                {otherYears.map(otherYear => (
                    <Button
                        key={otherYear}
                        as={Link}
                        to={`/reading${otherYear}`}
                        bg='#FC8F77'
                        p={3}
                        boxShadow='md'
                        borderRadius='md'
                        color="black"
                        _hover={{ bg: '#E67C64' }} // Darken on hover for feedback
                    >
                        <Text as="span">Check out my&nbsp;</Text>
                        <Text as="span" fontWeight="bold">{otherYear}</Text>
                        <Text as="span">&nbsp;Reading List</Text>
                    </Button>
                ))}
            </HStack>
        </Box>
    );
}
