import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';

export interface Project {
    name: string;
    techStack: string;
    summary: string;
    gitHubLink: string;
    appLink?: string;
}

interface ProjectsProps {
    projects: Project[];
}

export default function Projects({projects}: ProjectsProps) {
    return(
        <Box>
            <Heading id='projects' mb='4' mt='4'size='lg'>Projects</Heading>
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
                    <Text fontSize='md' fontWeight='bold' mb='4'>
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
                        
                        <Text fontSize='sm' whiteSpace='normal'>
                            <b>Tech Stack: </b>
                            {project.techStack}
                        </Text>
                    </Flex>
                    <Text fontSize='sm' maxWidth='800px' mb='4' mx='auto'>
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
                </Box>
            ))}
        </Box>
    );
}
