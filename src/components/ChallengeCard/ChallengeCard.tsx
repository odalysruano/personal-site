import { Box, Heading, Text } from "@chakra-ui/react";

const ChallengeCard = ({ title, description }: { title: string; description: string }) => (
    <Box
        p={6}
        borderWidth="1px"
        borderRadius="xl"
        bg="white"
        _dark={{ bg: 'gray.800' }}
        boxShadow="md"
    >
        <Heading as="h3" size="md" mb={3} color="orange.400">
            {title}
        </Heading>
        <Text color="gray.600" _dark={{ color: 'gray.300' }}>
            {description}
        </Text>
    </Box>
);

export default ChallengeCard;
