import { Box, Button, Flex, Heading, Icon, Link, Stack, Text, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
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
        <Box id='work' scrollMarginTop='85px' w="full">
            {/* --- Featured Project Section --- */}
            <VStack
                bg="white"
                p={8}
                boxShadow="xl"
                borderRadius="lg"
                mb={12}
                mx="auto"
                maxWidth="800px"
                border="2px solid"
                borderColor="#FC6A80"
                spacing={4}
                textAlign="center"
            >
                <Heading as="h3" size="lg" color="gray.700">
                    Featured Project: Memify.ai
                </Heading>
                <Text color="gray.600">
                    As a Founding Software Engineer, I spent 10+ months conceiving, designing, and building this full-stack AI platform from the ground up. Memify is an intelligent tool that enhances professional communication with a secure, user-specific long-term memory engine.
                </Text>
                <Text color="gray.600" fontWeight="semibold">
                    This project represents the culmination of my technical skills and my passion for creating user-centric solutions.
                </Text>
                <Button
                    as={RouterLink}
                    to="/memify"
                    bg='#81E6D9'
                    color='gray.800'
                    _hover={{
                        textDecoration: 'none',
                        bg: '#E9D8FD',
                    }}
                    rightIcon={<Icon as={FaArrowRight} />}
                >
                    View the Full Case Study
                </Button>
            </VStack>

            {/* --- Other Projects --- */}
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
                        <Link href={project.gitHubLink} fontWeight='bold' color="#FC6A80" isExternal>
                            GitHub
                        </Link>
                        {project.appLink && (
                            <>
                                <Text color='gray.400'>|</Text>
                                <Link href={project.appLink} fontWeight='bold' color="#FC6A80" isExternal>
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
