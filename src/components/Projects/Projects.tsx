import { Box, Heading, Text } from '@chakra-ui/react';

export interface Project {
    name: string;
    summary: string;
    githubLink: string;
    appLink?: string;
}

interface ProjectsProps {
    projects: Project[];
}

export default function Projects({projects}: ProjectsProps) {
    return(
        <Box>
            <Heading id='projects' size='sm' textTransform='uppercase'>Projects</Heading>
            {projects.map((project, index) => (
                <Text key={index} pt='2' fontSize='sm'>
                    {project.name}
                    {project.summary}
                    {project.githubLink}
                    {project.appLink}
                </Text>
            ))}
        </Box>
    );
}
