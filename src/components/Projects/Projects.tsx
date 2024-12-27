import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
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

interface ProjectsProps {
    projects: Project[];
}

export default function Projects({projects}: ProjectsProps) {
    return(
        <Box id='projects' scrollMarginTop='85px'>
            <Heading mb='4' mt='4' size={{ base: 'lg', md: 'xl' }}>Projects 💡</Heading>
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
                    <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight='bold' mb='4'>
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
                        <Text fontSize={{ base: 'sm', md: 'md' }} whiteSpace='normal'>
                            <b>Tech Stack: </b>
                            {project.techStack}
                        </Text>
                    </Flex>
                    <Text fontSize={{ base: 'sm', md: 'md' }} maxWidth='800px' mb='4' mx='auto'>
                        {project.summary}
                    </Text>
                    <Stack direction='row' justifyContent='center' spacing={2} pt='2'>
                        <Link href={project.gitHubLink} color='teal.500' isExternal>
                            GitHub
                        </Link>
                        {project.appLink && (
                            <>
                                <Text>|</Text>
                                <Link href={project.appLink} color='teal.500' isExternal>
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
