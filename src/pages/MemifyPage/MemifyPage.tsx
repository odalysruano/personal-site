import { Box, Heading, Text, VStack, HStack, Tag, Wrap, WrapItem, Spinner } from '@chakra-ui/react';

const techStack = ["FastAPI", "Next.js", "AWS CDK", "Python", "TypeScript", "AWS Bedrock", "ECS", "Lambda", "Neptune", "PostgreSQL"];

export default function MemifyPage() {
    return (
        <Box bg="#FC8F77" minH="100vh" py={{ base: 10, md: 20 }} px={4}>
            <VStack 
                spacing={8} 
                maxW="800px" 
                mx="auto" 
                textAlign="center"
                bg="whiteAlpha.900"
                p={{ base: 6, md: 10 }}
                borderRadius="lg"
                boxShadow="xl"
            >
                <VStack spacing={4}>
                    <Heading as="h1" size="xl" color="gray.800">
                        Memify.ai: A Deep Dive Case Study
                    </Heading>
                    <HStack>
                        <Spinner color="#FC6A80" />
                        <Heading as="h2" size="lg" color="gray.600" fontStyle="italic">
                            Full Case Study Launching Soon
                        </Heading>
                    </HStack>
                </VStack>

                <Text fontSize="lg" color="gray.700">
                    This page will provide an in-depth look at Memify.ai, a full-stack AI platform designed to enhance professional communication with a secure, user-specific long-term memory engine. As the Founding Software Engineer, I was responsible for the entire product lifecycle, from system architecture to deployment.
                </Text>

                <VStack spacing={4} w="full" p={6} bg="gray.50" borderRadius="md">
                    <Heading as="h3" size="md" color="gray.600">Project Snapshot</Heading>
                    <Box w="full">
                        <Text fontWeight="bold">My Role:</Text>
                        <Text>Founding Software Engineer</Text>
                    </Box>
                    <Box w="full">
                        <Text fontWeight="bold">Status:</Text>
                        <Text>In Development (Pre-Launch)</Text>
                    </Box>
                    <Box w="full">
                        <Text fontWeight="bold">Core Technologies:</Text>
                        <Wrap justify="center" mt={2}>
                            {techStack.map(tech => (
                                <WrapItem key={tech}>
                                    <Tag size="md" variant="solid" bg='#FC6A80' color='white'>{tech}</Tag>
                                </WrapItem>
                            ))}
                        </Wrap>
                    </Box>
                </VStack>
            </VStack>
        </Box>
    );
}
