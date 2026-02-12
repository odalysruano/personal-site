import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import SectionHeading from "../SectionHeading/SectionHeading";

const LessonsLearned = () => (
    <Box py={20}>
        <SectionHeading>Engineering Post-Mortems</SectionHeading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mb={20}>
            {/* 1. Planning/Integration Lesson */}
            <VStack align="start" p={6} borderLeft="2px solid" borderColor="red.400" bg="white" _dark={{ bg: 'gray.800' }} shadow="sm">
                <Text fontWeight="bold" fontSize="lg">The Integration &quot;Iceberg&quot;</Text>
                <Text color="gray.600" _dark={{ color: 'gray.400' }} fontSize="sm">
                    <strong>Problem:</strong> A &quot;1-week&quot; Google Drive integration stalled due to non-deterministic <code>gapi</code> loading and secure token mismanagement.
                    <br /><strong>Insight:</strong> Third-party SDK lifecycles require a secure &quot;handshake&quot; between front-end initialization and server-side OAuth token retrieval (Clerk) to prevent race conditions like <code>picker is undefined</code>.
                    <br /><strong>Process Fix:</strong> Re-engineered the flow using a custom <code>useGoogleApi</code> hook and a server-side action to securely fetch user tokens, ensuring the Google Picker only initializes after a validated auth state.
                </Text>
            </VStack>

            {/* 2. AI/Agent Reasoning Lesson */}
            <VStack align="start" p={6} borderLeft="2px solid" borderColor="purple.400" bg="white" _dark={{ bg: 'gray.800' }} shadow="sm">
                <Text fontWeight="bold" fontSize="lg">The Multi-Hop Reasoning Wall</Text>
                <Text color="gray.600" _dark={{ color: 'gray.400' }} fontSize="sm">
                    <strong>Problem:</strong> The initial agent struggled with complex queries (e.g., &quot;Who followed up on the June 10th call?&quot;) because simple RAG couldn&apos;t traverse the knowledge graph relationships.
                    <br /><strong>Insight:</strong> LLMs require a &quot;plan-act-synthesize&quot; framework and specialized tools to handle non-linear information retrieval.
                    <br /><strong>Process Fix:</strong> Built a custom graph traversal tool using Gremlin and refined the <code>FactQueryAgent</code> prompt with few-shot examples for complex reasoning chains.
                </Text>
            </VStack>

            {/* 3. Infrastructure Lesson */}
            <VStack align="start" p={6} borderLeft="2px solid" borderColor="blue.400" bg="white" _dark={{ bg: 'gray.800' }} shadow="sm">
                <Text fontWeight="bold" fontSize="lg">The Cost of Reproducibility</Text>
                <Text color="gray.600" _dark={{ color: 'gray.400' }} fontSize="sm">
                    <strong>Problem:</strong> Non-hermetic builds led to &quot;works on my machine&quot; bugs where Lambda functions failed only after deployment due to environment mismatches.
                    <br /><strong>Insight:</strong> Serverless environments require absolute parity between the local development system and the cloud runtime.
                    <br /><strong>Process Fix:</strong> Authored custom Bazel rules to synchronize my local environment with the AWS Lambda runtime, ensuring every build is hermetic and fully compatible across the entire deployment pipeline.
                </Text>
            </VStack>
        </SimpleGrid>
    </Box>
);

export default LessonsLearned;
