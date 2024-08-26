import { Box, Card, CardHeader, CardBody, Heading, Stack, Text, StackDivider, Link } from '@chakra-ui/react'

export default function MyHomePage() {
    return (
        <>
            <Card align='center' bg='#FC8181'>
                <CardHeader>
                    <Heading>Hi, I'm Odalys!</Heading>
                </CardHeader>
                <CardBody>
                    <Text>I'm a full-stack software engineer.</Text>
                </CardBody>
            </Card>

            <Card align='center' bg='#81E6D9' id='about'>
                <CardHeader>
                    <Heading size='lg'>About Me</Heading>
                </CardHeader>
                <CardBody textAlign='center'>
                    <Box px='200px' pb='10px'>
                        <Text pt='2' fontSize='md'>
                            I was born and raised in Westchester, NY, and I have lived in New York City for 10+ years.
                        </Text>
                        <Text pt='2' fontSize='md'>
                            In 2018, I graduated NYU Stern with a B.S. in Business, and concentrations in Marketing and Sustainable Business.
                        </Text>
                        <Text pt='2' fontSize='md'>
                            I spent 4+ years doing Customer Success work with B2B tech clients at a marketing agency and, later, with clients across industries at Justworks (HR Tech).
                        </Text>
                        <Text pt='2' fontSize='md'>
                            My experience working with customers at Justworks led me to become passionate about approaching engineering challenges with the goal of solving specific product problems with the customer in mind.
                        </Text>
                        <Text pt='2' fontSize='md'>
                            In 2024, I sought out a new challenge and pivoted my career. I completed a coding bootcamp with General Assembly by April 2024.
                        </Text>
                        <Text pt='2' fontSize='md'>
                            Now, I'm seeking a full-stack software engineering opportunity at a company where I can contribute and grow.
                        </Text>
                        <Text pt='2' fontSize='md'>
                            I hope to one day xyz. In my free time, I enjoy
                        </Text>
                        <Text pt='2' fontSize='md'>
                            Please feel free to reach out to share any information about opportunities you think I may be a good fit for.
                        </Text>
                    </Box>
                </CardBody>
            </Card>
            
            <Card align='center' bg='#FAF089'>
                <CardBody textAlign='center'>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading id='projects' size='sm' textTransform='uppercase'>Projects</Heading>
                            <Text pt='2' fontSize='sm'>MySousChef</Text>
                            <Text pt='2' fontSize='sm'>FitHub</Text>
                            <Text pt='2' fontSize='sm'>GA Marketplace</Text>
                            <Text pt='2' fontSize='sm'>Eras Memory Game</Text>
                        </Box>
                        <Box>
                            <Heading id='resume' size='sm' textTransform='uppercase'>Resume</Heading>
                            <Text pt='2' fontSize='sm'>Check out my resume.</Text>
                        </Box>
                        <Box>
                            <Heading id='contact' size='sm' textTransform='uppercase'>Contact</Heading>
                            <Text pt='2' fontSize='sm'><Link color='teal' href='https://www.linkedin.com/in/odalysruano/'>Connect on LinkedIn</Link> | Email: odalys.r.ruano@gmail.com</Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </>
    )
}