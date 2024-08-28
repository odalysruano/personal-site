import { Box, Divider, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';

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
                <Box key={index} pt='4'>
                    <Text fontSize='md' fontWeight='bold' mb='4'>
                        {project.name}
                    </Text>
                    <Flex alignItems='center' justifyContent='center' mb='2'>
                        <Heading fontSize='sm' fontWeight='bold' mr='2'>Tech Stack:</Heading>
                        <Text fontSize='sm'>
                            {project.techStack}
                        </Text>
                    </Flex>
                    <Text fontSize='sm'>
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
                    {index < projects.length - 1 && (
                        <Divider borderColor='gray.300' width='50%' mx='auto' my='2' mt='4' />
                    )}
                </Box>
            ))}
        </Box>
    );
}
