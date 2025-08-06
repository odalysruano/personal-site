import { Box, Flex, Link, Stack, Text } from '@chakra-ui/react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

export interface Project {
    name: string;
    techStack: string;
    summary: string;
    gitHubLink: string;
    appLink?: string;
    media?: string;
    poster?: string;
}

interface WorkProps {
    projects: Project[];
}

export default function Work({ projects }: WorkProps) {
    return (
        <Box id='work' scrollMarginTop='85px'>
            {projects.map((project, index) => (
                <Box 
                    key={index} 
                    bg='white'
                    p={6}
                    boxShadow='md'
                    borderRadius='md'
                    mb={6}
                    mx='auto'
                    maxWidth='800px'
                >
                    <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight='bold' mb='4' textAlign='center' color='gray.800'>
                        {project.name}
                    </Text>
                    <Flex 
                        alignItems='center'
                        flexWrap='nowrap'
                        justifyContent='center'
                        mb='4'
                        maxWidth='700px'
                        mx='auto'
                    >
                        <Text fontSize={{ base: 'sm', md: 'md' }} whiteSpace='normal' color='gray.600'>
                            <b>Tech Stack: </b>
                            {project.techStack}
                        </Text>
                    </Flex>
                    <Text fontSize={{ base: 'sm', md: 'md' }} maxWidth='800px' mb='4' mx='auto' color='gray.700'>
                        {project.summary}
                    </Text>
                    <Stack direction='row' justifyContent='center' spacing={4} pt='2'>
                        <Link href={project.gitHubLink} fontWeight='bold' color='teal.500' isExternal>
                            GitHub
                        </Link>
                        {project.appLink && (
                            <>
                                <Text color='gray.400'>|</Text>
                                <Link href={project.appLink} fontWeight='bold' color='teal.500' isExternal>
                                    Live App
                                </Link>
                            </>
                        )}
                    </Stack>
                    {project.media && (
                        <VideoPlayer src={project.media} poster={project.poster} />
                    )}
                </Box>
            ))}
        </Box>
    );
}
