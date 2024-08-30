import { Box, Heading, Text } from "@chakra-ui/react";

export default function TechStack() {
    return(
        <Box 
            display='flex'
            flexDirection='column'
            alignItems='center'
            px={{ base: '50px', md: '200px' }} 
            py='5'
        >
            <Heading mb='4' mt='4'size='lg'>What I Build With 🛠️</Heading>
            <Box 
                bg='white'
                p={8}
                px={{ base: '16px', md: '36px' }}
                boxShadow='md'
                borderRadius='md'
                mb={6}
                mx='auto'
                maxWidth='700px'
                textAlign='left'
            >
                <Text><b>Programming Languages:</b> Python, JavaScript/Typescript, HTML, CSS, SQL, Bash</Text>
                <Text><b>Frameworks:</b> Django, React.js, Express.js, EJS, Node.js, Jquery</Text>
                <Text><b>UI Frameworks:</b> Bootstrap, Materialize, Material UI, Chakra UI</Text>
                <Text><b>Databases:</b> AWS RDS (PostgreSQL), MongoDB (NoSQL)</Text>
                <Text><b>CI/CD:</b> AWS CodeBuild, AWS CodePipeline</Text>
                <Text><b>Cloud:</b> AWS EC2, AWS Elastic Beanstalk, AWS IAM, AWS S3</Text>
                <Text><b>Other:</b> REST APIs, JSON, Git, Jira, Confluence, Salesforce, Trello, Airtable, JWT, OAuth</Text>
            </Box>
        </Box>
    );
}
