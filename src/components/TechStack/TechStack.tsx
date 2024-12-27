import { Box, Heading, Text } from "@chakra-ui/react";

export default function TechStack() {
    return(
        <Box 
            display='flex'
            flexDirection='column'
            alignItems='center'
            px={{ base: '20px', md: '200px' }} 
            py='5'
        >
            <Heading mb='4' mt='4' size={{ base: 'lg', md: 'xl' }}>What I Build With 🛠️</Heading>
            <Box 
                bg='white'
                p={{ base: 4, md: 8 }}
                px={{ base: '12px', md: '36px' }}
                boxShadow='md'
                borderRadius='md'
                mb={6}
                mx='auto'
                maxWidth={{ base: '100%', md: '700px' }}
                textAlign='left'
            >
                <Text 
                    fontSize={{ base: 'sm', md: 'md' }}
                    mb={{ base: 3, md: 2 }}
                >
                    <b>Programming Languages:</b> Python, JavaScript/Typescript, HTML, CSS, SQL, Bash
                </Text>
                <Text 
                    fontSize={{ base: 'sm', md: 'md' }}
                    mb={{ base: 3, md: 2 }}
                >
                    <b>Frameworks:</b> Django, React.js, Express.js, EJS, Node.js, Jquery
                </Text>
                <Text 
                    fontSize={{ base: 'sm', md: 'md' }}
                    mb={{ base: 3, md: 2 }}
                >
                    <b>UI Frameworks:</b> Bootstrap, Materialize, Material UI, Chakra UI
                </Text>
                <Text 
                    fontSize={{ base: 'sm', md: 'md' }}
                    mb={{ base: 3, md: 2 }}
                >
                    <b>Databases:</b> AWS RDS (PostgreSQL), MongoDB (NoSQL)
                </Text>
                <Text 
                    fontSize={{ base: 'sm', md: 'md' }}
                    mb={{ base: 3, md: 2 }}
                >
                    <b>CI/CD:</b> AWS CodeBuild, AWS CodePipeline
                </Text>
                <Text 
                    fontSize={{ base: 'sm', md: 'md' }}
                    mb={{ base: 3, md: 2 }}
                >
                    <b>Cloud:</b> AWS EC2, AWS Elastic Beanstalk, AWS IAM, AWS S3, AWS Route 53, AWS CloudFront, AWS Certificate Manager
                </Text>
                <Text 
                    fontSize={{ base: 'sm', md: 'md' }}
                    mb={0}
                >
                    <b>Other:</b> REST APIs, JSON, Git, Jira, Confluence, Salesforce, Trello, Airtable, JWT, OAuth, SSL Certificates
                </Text>
            </Box>
        </Box>
    );
}
