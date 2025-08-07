import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import Work from '../../components/Work/Work';
import { projects } from '../../constants/projects';

export default function MyWorkPage() {
    return (
        <Box p={8} bg='#FAC589' minH='100vh'>
            <VStack spacing={10} maxW='1000px' mx='auto' textAlign='center' pt={8}>
                <Heading as="h1" size="2xl" color="gray.800">
                    My Work 💡
                </Heading>

                <Text fontSize="lg" color="gray.600" maxW="800px">
                    Below is a curated collection of my work, from foundational bootcamp projects to more complex, real-world applications. Each project represents a step in my journey as a developer, showcasing my passion for building intuitive, user-focused solutions and my ability to tackle challenges across the entire tech stack.
                </Text>
                
                <Work projects={projects} />
            </VStack>
        </Box>
    );
}
