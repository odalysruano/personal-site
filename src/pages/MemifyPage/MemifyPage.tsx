import {
    Badge,
    Box,
    Container,
    Divider,
    Heading,
    Image,
    List,
    ListIcon,
    ListItem,
    SimpleGrid,
    Text,
    VStack,
    useColorModeValue,
} from '@chakra-ui/react';
import { MdCheckCircle, MdSettings, MdCloud, MdCode, MdStorage, MdTimeline } from 'react-icons/md';
import demoVideo from '../../assets/memify-demo.mp4';
import sketchesImg from '../../assets/sketch1.jpeg';
import kanbanImg from '../../assets/kanban.jpeg';
import whiteboardImg from '../../assets/whiteboard.jpeg';
import ChallengeCard from '../../components/ChallengeCard/ChallengeCard';
import DeepDives from '../../components/DeepDives/DeepDives';
import JournalTimeline from '../../components/FounderTimeline/FounderTimeline';
import HudsonSummit from '../../components/HudsonSummit/HudsonSummit';
import LessonsLearned from '../../components/LessonsLearned/LessonsLearned';
import MermaidDiagram from '../../components/MermaidDiagram/MermaidDiagram';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import TechStackItem from '../../components/TechStackItem/TechStackItem';

const architectureChart = `
graph TD
    User([User])
    subgraph Ingestion [Ingestion Pipeline]
        direction TB
        S3[S3 Bucket<br/>Raw Documents]
        SNS{SNS Topic}
        SQS[SQS Queue<br/>Buffering]
        Poller["Poller Lambda<br/>EventBridge Trigger"]
        
        subgraph StepFunc [Step Function Workflow]
             Extract["Extraction Lambda<br/>pdf-to-text / Analysis"]
             Ingest["Ingestion Lambda<br/>Graph Construction"]
        end
    end
    subgraph Storage [Knowledge Graph]
        Neptune[(Amazon Neptune)]
    end
    subgraph App [Backend Services]
        Backend["Backend Service<br/>Fargate / FastAPI"]
        Agent["Fact Query Agent<br/>(In-Process Class)"]
    end
    subgraph AI [Generative AI]
        Bedrock[Amazon Bedrock<br/>LLM Models]
    end
    %% Ingestion Flow
    User -- 1. Uploads --> S3
    S3 -- Event --> SNS
    SNS -- Enqueue --> SQS
    Poller -- Polls --> SQS
    Poller -- Triggers --> StepFunc
    Extract -- 2. Extract Facts --> Bedrock
    Extract -- 3. Pass Data --> Ingest
    Ingest -- 4. Write Facts --> Neptune
    %% Chat Flow
    User -- 1. Chat Query --> Backend
    Backend -- 2. Invoke --> Agent
    Agent -- 3. Reasoning Loop --> Bedrock
    Agent -- 4. Traverses Graph --> Neptune
    Agent -- 5. Return Raw Facts --> Backend
    Backend -- 6. Synthesize Answer --> Bedrock
    Bedrock -- 7. Generated Text --> Backend
    Backend -- 8. Stream Response --> User
    %% Styling
    style S3 fill:#E6F7FF,stroke:#1890FF,stroke-width:2px,color:black
    style SNS fill:#FFF0F6,stroke:#FF85C0,stroke-width:2px,color:black
    style SQS fill:#FFF0F6,stroke:#FF85C0,stroke-width:2px,color:black
    style Poller fill:#FFF7E6,stroke:#FA8C16,stroke-width:2px,color:black
    style Extract fill:#FFF7E6,stroke:#FA8C16,stroke-width:2px,color:black
    style Ingest fill:#FFF7E6,stroke:#FA8C16,stroke-width:2px,color:black
    style Backend fill:#E6FFFB,stroke:#13C2C2,stroke-width:2px,color:black
    style Agent fill:#E6FFFB,stroke:#13C2C2,stroke-width:2px,stroke-dasharray: 5 5,color:black
    style Neptune fill:#F0F5FF,stroke:#2F54EB,stroke-width:2px,color:black
    style Bedrock fill:#F9F0FF,stroke:#722ED1,stroke-width:2px,color:black
    style StepFunc fill:#ffffff,stroke:#bbb,stroke-width:2px,stroke-dasharray: 5 5,color:black
    style User fill:#ffffff,stroke:#333,stroke-width:2px,color:black
`;

const ProblemSolution = () => (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} py={12} px={{ base: 4, md: 10 }}>
        {/* The Problem: Framed by User Empathy */}
        <VStack align="left" textAlign="left" spacing={4}>
            <Heading size="lg" color="red.400" borderBottom="2px solid" pb={2} alignSelf="center">
                The Problem
            </Heading>
            <Text alignSelf="center" fontSize="md" fontWeight="bold" color="gray.700" _dark={{ color: 'gray.200' }}>
                Context Fragmentation & Information Silos
            </Text>
            <Text fontSize="lg" color="gray.600" _dark={{ color: 'gray.400' }} lineHeight="tall">
                In B2B SaaS companies, critical client details are scattered across meeting notes, emails, and PDFs.
                This &quot;black hole&quot; of data leads directly to client churn and missed expansion opportunities.
                For client-facing teams, the inability to instantly recall a nuanced goal from a call three months
                ago is a massive efficiency and revenue drain.
            </Text>
            <Badge colorScheme="red" variant="subtle" alignSelf="center">Professional Pain Point</Badge>
        </VStack>

        {/* The Solution: Framed by Technical Ownership */}
        <VStack align="left" textAlign="left" spacing={4}>
            <Heading size="lg" color="green.400" borderBottom="2px solid" pb={2} alignSelf="center">
                The Memify Solution
            </Heading>
            <Text alignSelf="center" fontSize="md" fontWeight="bold" color="gray.700" _dark={{ color: 'gray.200' }}>
                A Cloud-Native &quot;Second Brain&quot;
            </Text>
            <Text fontSize="lg" color="gray.600" _dark={{ color: 'gray.400' }} lineHeight="tall">
                I engineered Memify to act as a data intelligence layer that automatically extracts &quot;atomic nodes&quot;
                from unstructured documents. By mapping these into an <Text as="span" fontWeight="bold">Amazon Neptune Knowledge Graph</Text>,
                the platform moves beyond keyword search to relational discovery, empowering users to see
                the hidden connections between client needs and historical project data.
            </Text>
            <Badge colorScheme="green" variant="subtle" alignSelf="center">Full-Stack AI Architecture</Badge>
        </VStack>
    </SimpleGrid>
);

const TechnicalRationale = () => (
    <VStack spacing={8} align="stretch" my={16}>
        <SectionHeading>Engineering Decisions</SectionHeading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box p={6} borderRadius="xl" borderLeft="4px solid" borderColor="indigo.500" bg="white" _dark={{ bg: 'gray.800' }}>
                <Heading size="sm" mb={2}>Why Amazon Neptune?</Heading>
                <Text fontSize="sm">
                    A traditional SQL database would require 5+ joins to find recursive relationships.
                    Neptune allows us to traverse the &quot;knowledge web&quot; with sub-second latency, making
                    real-time memory retrieval possible.
                </Text>
            </Box>
            <Box p={6} borderRadius="xl" borderLeft="4px solid" borderColor="orange.500" bg="white" _dark={{ bg: 'gray.800' }}>
                <Heading size="sm" mb={2}>AWS CDK & Serverless</Heading>
                <Text fontSize="sm">
                    As a solo founder, I needed an &quot;Infrastructure as Code&quot; approach that scales to zero
                    when not in use. AWS CDK allows me to version-control my entire cloud architecture
                    alongside my application code.
                </Text>
            </Box>
        </SimpleGrid>
    </VStack>
);

export default function MemifyPage() {
    const bgColor = useColorModeValue('gray.50', 'gray.900');

    return (
        <Box bg={bgColor} minH="100vh" py={{ base: 10, md: 20 }}>
            {/* Hero Section */}
            <Container maxW="container.xl">
                <VStack spacing={8} textAlign="center" mb={12}>
                    <Badge colorScheme="orange" fontSize="lg" px={3} py={1} borderRadius="full">
                        Case Study
                    </Badge>
                    <Heading as="h1" size="3xl" bgGradient="linear(to-r, orange.400, red.500)" bgClip="text" fontWeight="extrabold">
                        Memify.ai
                    </Heading>
                    <Text fontSize="2xl" maxW="2xl" color="gray.600" _dark={{ color: 'gray.300' }}>
                        An AI-powered document intelligence platform featuring a custom knowledge graph and long-term memory engine.
                    </Text>

                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full" maxW="4xl" mt={8}>
                        <VStack>
                            <Box as={MdCloud} size="32px" color="blue.400" />
                            <Text fontWeight="bold">Cloud Native</Text>
                            <Text fontSize="sm">AWS Serverless Architecture</Text>
                        </VStack>
                        <VStack>
                            <Box as={MdTimeline} size="32px" color="orange.400" />
                            <Text fontWeight="bold">Development</Text>
                            <Text fontSize="sm">Solo Founder / Engineer</Text>
                        </VStack>
                        <VStack>
                            <Box as={MdSettings} size="32px" color="green.400" />
                            <Text fontWeight="bold">Status</Text>
                            <Text fontSize="sm">Private Beta</Text>
                        </VStack>
                    </SimpleGrid>
                </VStack>

                <ProblemSolution />

                {/* Demo Video Section */}
                <Box mb={20} mt={8}>
                    <SectionHeading>Demo Video</SectionHeading>
                    <Box
                        bg="gray.800"
                        w="full"
                        maxW="900px"
                        mx="auto"
                        borderRadius="2xl"
                        overflow="hidden"
                        boxShadow="2xl"
                    >
                        <video controls width="100%">
                            <source src={demoVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Box>
                </Box>

                {/* Development Process Gallery */}
                <Box mb={20}>
                    <SectionHeading>From Sketch to Ship</SectionHeading>
                    <Text textAlign="center" mb={10} maxW="2xl" mx="auto" color="gray.600">
                        A look behind the curtains at the design and planning process.
                    </Text>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                        <Box h="300px" borderRadius="xl" overflow="hidden" boxShadow="lg">
                            <Image src={sketchesImg} alt="Initial Sketches" objectFit="cover" w="full" h="full" />
                        </Box>
                        <Box h="300px" borderRadius="xl" overflow="hidden" boxShadow="lg">
                            <Image src={kanbanImg} alt="Kanban Board" objectFit="cover" w="full" h="full" />
                        </Box>
                        <Box h="300px" borderRadius="xl" overflow="hidden" boxShadow="lg">
                            <Image src={whiteboardImg} alt="Whiteboarding Session" objectFit="cover" w="full" h="full" />
                        </Box>
                    </SimpleGrid>
                </Box>

                <Divider my={16} />

                {/* Tech Stack */}
                <Box mb={20}>
                    <SectionHeading>Tech Stack</SectionHeading>
                    <SimpleGrid columns={{ base: 2, md: 5 }} spacing={4}>
                        <TechStackItem name="Next.js" icon={MdCode} color="black" />
                        <TechStackItem name="Python" icon={MdCode} color="blue.500" />
                        <TechStackItem name="FastAPI" icon={MdSettings} color="teal.500" />
                        <TechStackItem name="AWS Lambda" icon={MdCloud} color="orange.500" />
                        <TechStackItem name="Amazon Neptune" icon={MdStorage} color="indigo.500" />
                        <TechStackItem name="Amazon Bedrock" icon={MdSettings} color="purple.500" />
                        <TechStackItem name="PostgreSQL" icon={MdStorage} color="blue.600" />
                        <TechStackItem name="Docker" icon={MdSettings} color="blue.400" />
                        <TechStackItem name="AWS CDK" icon={MdCloud} color="orange.400" />
                        <TechStackItem name="React" icon={MdCode} color="cyan.400" />
                    </SimpleGrid>
                </Box>

                <TechnicalRationale />

                {/* Architecture Section */}
                <Box mb={20}>
                    <SectionHeading>System Architecture</SectionHeading>
                    <Box p={8} bg="white" _dark={{ bg: 'gray.800' }} borderRadius="2xl" boxShadow="lg">
                        <VStack align="start" spacing={4}>
                            <Heading size="md" color="blue.500">Ingestion Pipeline</Heading>
                            <List spacing={3}>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color="green.500" />
                                    <Text as="span" fontWeight="bold">Async Event Bus:</Text> S3 uploads trigger SNS notifications, which buffer into SQS for reliable processing.
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color="green.500" />
                                    <Text as="span" fontWeight="bold">Concurrency Control:</Text> A Poller Lambda manages throughput to downstream services.
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color="green.500" />
                                    <Text as="span" fontWeight="bold">Step Function Workflow:</Text> Orchestrates the Extraction Lambda (Bedrock) and Ingestion Lambda (Neptune) with error handling and retry logic.
                                </ListItem>
                            </List>

                            <Heading size="md" color="purple.500" mt={4}>Chat Retrieval Flow</Heading>
                            <List spacing={3}>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color="green.500" />
                                    <Text as="span" fontWeight="bold">Fact Query Agent:</Text> An in-process reasoning engine that translates user questions into graph queries.
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color="green.500" />
                                    <Text as="span" fontWeight="bold">Multi-Hop Traversal:</Text> The agent recursively explores connected nodes in Amazon Neptune to gather context.
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color="green.500" />
                                    <Text as="span" fontWeight="bold">Generative Synthesis:</Text> Retrieved facts are passed to Amazon Bedrock to generate a grounded, natural language response.
                                </ListItem>
                            </List>
                        </VStack>
                        {/* Architecture Diagram Visualization Placeholder */}
                        <Box mt={8} p={4} bg="gray.50" _dark={{ bg: 'gray.900' }} borderRadius="lg" border="1px solid" borderColor="gray.200">
                            <MermaidDiagram chart={architectureChart} />
                        </Box>
                    </Box>
                </Box>

                {/* Challenges */}
                <Box mb={10}>
                    <SectionHeading>Key Technical Challenges</SectionHeading>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                        <ChallengeCard
                            title="Graph Consistency"
                            description="Designing an atomic 'find-or-create' strategy for Neptune to prevent duplicate event nodes during concurrent document ingestion."
                        />
                        <ChallengeCard
                            title="Hybrid API Pattern"
                            description="Implementing a dual-protocol backend with gRPC for high-performance internal microservices and FastAPI for public-facing REST endpoints."
                        />
                        <ChallengeCard
                            title="Context Maintenance"
                            description="Managing LLM context windows efficiently while ensuring the RAG pipeline retrieves relevant long-term memories for chat interactions."
                        />
                    </SimpleGrid>
                </Box>

                <DeepDives />

                <LessonsLearned />

                <JournalTimeline />

                <HudsonSummit />

            </Container>
        </Box>
    );
}
