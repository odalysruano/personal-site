import { Box, Center, Grid, GridItem, Heading, Image, Link, Stack, StackDivider, Text } from '@chakra-ui/react';
import Projects from '../../components/Projects/Projects';
import { projects } from '../../constants/projects';

export default function HomePage() {
    return (
        <>
            <Grid
                templateRows={{ base: 'repeat(3, auto)', md: 'repeat(4, auto)' }}
                templateColumns='repeat(4, 1fr)'
                gap={4}
                p={4}
            >
                <GridItem rowSpan={{ base: 1, md: 2 }} colSpan={{ base: 4, md: 2 }} bg='#FC8181'>
                    <Box 
                        display="flex" 
                        flexDirection="column" 
                        alignItems="center" 
                        justifyContent="center" 
                        h="100%" 
                        textAlign="center" 
                        p={4}
                    >
                        <Heading>Hi, I'm Odalys!</Heading>
                        <Text>I'm a full-stack software engineer.</Text>
                    </Box>
                </GridItem>
                <GridItem rowSpan={{ base: 1, md: 2 }} colSpan={{ base: 4, md: 2 }} bg='tomato'>
                    <Center>
                        <Image
                            boxSize={{ base: '200px', md: '400px' }}
                            objectFit='cover'
                            p='50px'
                            src={
                                'https://media.licdn.com/dms/image/v2/D4E03AQHPYE8JwyRy9A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709687145629?e=1730332800&v=beta&t=BS0RDcuXBt-n-mTlGkEBJrolgmq7QW9E1FdBlQfV_5A'
                            }
                            alt='Odalys Ruano'
                        />
                    </Center>
                </GridItem>
                <GridItem colSpan={4} bg='#81E6D9'>
                    <Box textAlign='center' id='about' px={{ base: '50px', md: '200px' }} py='50'>
                        <Heading size='lg'>About Me</Heading>
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
                </GridItem>
                <GridItem colSpan={4} bg='#FAF089'>
                    <Box textAlign='center' p={4}>
                        <Stack divider={<StackDivider />} spacing='4'>
                            <Box>
                                <Projects projects={projects} />
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
                    </Box>
                </GridItem>
            </Grid>
        </>
    )
}
