import { Box, Text, VStack } from "@chakra-ui/react";

const TechStackItem = ({ name, icon, color }: { name: string; icon: React.ElementType; color: string }) => (
    <VStack
        p={4}
        borderWidth="1px"
        borderRadius="lg"
        align="center"
        bg="white"
        _dark={{ bg: 'gray.700', borderColor: 'gray.600' }}
        boxShadow="sm"
        transition="all 0.2s"
        _hover={{ transform: 'translateY(-4px)', boxShadow: 'md' }}
    >
        <Box as={icon} size="24px" color={color} mb={2} />
        <Text fontWeight="bold" fontSize="sm">{name}</Text>
    </VStack>
);

export default TechStackItem;
