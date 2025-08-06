import { Box, Heading } from '@chakra-ui/react';
import Work from '../../components/Work/Work';
import { projects } from '../../constants/projects';

export default function MyWorkPage() {
    return (
        // This container sets the background color and ensures the page has a minimum height
        <Box p={8} bg='#FAC589' minH='100vh'>
            <Box maxW='1000px' mx='auto' textAlign='center'>
                <Heading mb={4} size={{ base: 'lg', md: 'xl' }}>
                    My Work 💡
                </Heading>
                <Work projects={projects} />
            </Box>
        </Box>
    );
}
