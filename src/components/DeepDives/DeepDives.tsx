import { Box, SimpleGrid } from "@chakra-ui/react";
import { MdCloud, MdCode, MdSettings, MdTimeline } from "react-icons/md";
import DeepDiveCard from "../DeepDiveCard/DeepDiveCard";
import SectionHeading from "../SectionHeading/SectionHeading";

const DeepDives = () => (
    <Box py={16}>
        <SectionHeading>Technical Deep Dives</SectionHeading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <DeepDiveCard
                title="Laying the Foundation"
                description="Laying a hermetic foundation for a multi-language AI system using Bazel and a monorepo architecture to manage interconnected services."
                icon={MdSettings}
                color="blue.400"
                tags={['Bazel', 'Monorepo', 'Protobuf']} 
            />
            <DeepDiveCard
                title="Debugging the Data Pipeline"
                description="A multi-layered troubleshooting journey through networking, schema initialization, and the shift to a fully async FastAPI pipeline."
                icon={MdTimeline}
                color="red.400"
                tags={['FastAPI', 'PostgreSQL', 'IAM']}
            />
            <DeepDiveCard
                title="Building the Agent's Brain"
                description="Evolving core intelligence from simple search into a graph-powered AI agent using Gremlin and Neptune for sophisticated multi-hop reasoning."
                icon={MdCode}
                color="purple.400"
                tags={['Graph-RAG', 'Gremlin', 'Prompt Eng']}
            />
            <DeepDiveCard
                title="Scaling to Zero"
                description="A solo founder's guide to managing cloud infrastructure costs and scalability with AWS CDK and serverless event-driven pipelines."
                icon={MdCloud}
                color="orange.400"
                tags={['AWS CDK', 'Serverless', 'Fargate']}
            />
        </SimpleGrid>
    </Box>
);

export default DeepDives;
