import { Box, Heading, Text } from "@chakra-ui/react";

export default function AboutMe() {
    return(
        <Box 
            textAlign='center' 
            id='about' 
            px={{ base: '20px', md: '200px' }} 
            py='50'
            scrollMarginTop='80px'
        >
            <Heading mb={4} size={{ base: 'lg', md: 'xl' }}>About Me ✨</Heading>
            <Box 
                bg='white'
                px={{ base: '6', md: '10' }}
                py='5'
                boxShadow='md'
                borderRadius='md'
                mx='auto'
                maxWidth={{ base: '100%', md: '1000px' }}
                textAlign='center'
            >
                <Text 
                    fontSize={{ base: 'sm', md: 'md' }}
                    lineHeight={{ base: '1.6', md: '1.7' }}
                    mb='4'
                >
                    Hi! My name is <b>Odalys</b> (pronounced Oh-Dallas).
                </Text>
                <Text 
                    fontSize={{ base: 'sm', md: 'md' }}
                    lineHeight={{ base: '1.6', md: '1.7' }}
                    mb='4'
                >
                    After graduating from <b>NYU Stern</b> and participating in the <b>Yale School of Management</b> Emerging Leaders Seminar, I spent over four years in <b>Customer Success</b> at tech companies like <b>Justworks</b> (HR Tech). My experience partnering directly with customers and solving their pain points ignited my passion for engineering.
                </Text>
                <Text 
                    fontSize={{ base: 'sm', md: 'md' }}
                    lineHeight={{ base: '1.6', md: '1.7' }}
                    mb='4'
                >
                    In 2024, I pivoted my career, completing a coding bootcamp with <b>General Assembly</b>. Since then, I've been building <b>Memify.ai</b>, an AI-powered memory platform that enhances client relationship management—the exact tool I wish I had in my previous roles. Memify represents my vision for responsible AI that genuinely serves people, with a custom memory engine that augments traditional chat while ensuring data is fully isolated, encrypted, and never used for model training.
                </Text>
                <Text 
                    fontSize={{ base: 'sm', md: 'md' }}
                    lineHeight={{ base: '1.6', md: '1.7' }}
                    mb='4'
                >
                    Building Memify has allowed me to work deeply with Python (FastAPI and gRPC), TypeScript, Next.js, AWS RDS (Postgres), AWS Bedrock, and AWS Neptune.
                </Text>
                <Text 
                    fontSize={{ base: 'sm', md: 'md' }}
                    lineHeight={{ base: '1.6', md: '1.7' }}
                    mb='4'
                >
                    Now, I'm seeking a <b>full-stack software engineering opportunity</b> where I can leverage my <b>customer-centric</b> point of view to collaborate with a forward-thinking team and <b>ship innovative products</b>.
                </Text>
                <Text 
                    fontSize={{ base: 'sm', md: 'md' }}
                    lineHeight={{ base: '1.6', md: '1.7' }}
                    mb='4'
                >
                    I <b>aspire to</b> continually grow my skills, with the goal of one day <b>leading an engineering team</b>. I believe that by honing my technical expertise and understanding the nuances of <b>collaboration and leadership</b>, I can guide and <b>inspire others</b> to achieve great things together.
                </Text>
                <Text 
                    fontSize={{ base: 'sm', md: 'md' }}
                    lineHeight={{ base: '1.6', md: '1.7' }}
                >
                    In my free time, I enjoy reading books, baking new recipes, going on photography walks, exploring new cities, and playing Animal Crossing.
                </Text>
            </Box>
        </Box>
    );
}
