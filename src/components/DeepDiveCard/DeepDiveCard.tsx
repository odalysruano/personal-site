import { Badge, Box, Divider, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const DeepDiveCard = ({ title, description, tags, icon: Icon, color, slug }: {
    title: string;
    description: string;
    tags: string[];
    icon: React.ElementType;
    color: string;
    slug: string;
}) => (
    <Box
        as={Link}
        to={`/deep-dives/${slug}`}
        p={6}
        borderRadius="2xl"
        bg="white"
        _dark={{ bg: 'gray.800' }}
        borderWidth="1px"
        transition="all 0.3s"
        _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl', borderColor: color }}
        display="flex"
        flexDirection="column"
        height="full"
        textDecoration="none"
        _focus={{ boxShadow: 'outline' }}
    >
        <Box color={color} mb={4}>
            <Icon size="32px" />
        </Box>
        <Heading size="md" mb={3}>{title}</Heading>
        <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} mb={4} flex="1">
            {description}
        </Text>
        <Box mt="auto">
            <Divider mb={4} />
            <SimpleGrid columns={2} spacing={2}>
                {tags && tags.map(tag => (
                    <Badge key={tag} variant="subtle" colorScheme="gray" fontSize="xs" textAlign="center">
                        {tag}
                    </Badge>
                ))}
            </SimpleGrid>
        </Box>
    </Box>
);

export default DeepDiveCard;
