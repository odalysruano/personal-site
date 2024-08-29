import { Box, Center, Grid, GridItem, Heading, HStack, Icon, Image, Link, Stack, StackDivider, Text } from '@chakra-ui/react';
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import AboutMe from '../../components/AboutMe/AboutMe';
import Projects from '../../components/Projects/Projects';
import { projects } from '../../constants/projects';
import ResumeButton from '../../components/ResumeButton/ResumeButton';

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
                    <Box mt={4}>
                        <HStack spacing={4}>
                            <Link href='https://www.linkedin.com/in/odalysruano/' isExternal>
                                <Icon as={IoLogoLinkedin} boxSize={10} />
                            </Link>
                            <Link href='https://github.com/odalysruano' isExternal>
                                <Icon as={IoLogoGithub} boxSize={10} />
                            </Link>
                        </HStack>
                    </Box>
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
                    <AboutMe />
                </GridItem>
                <GridItem colSpan={4} bg='#FAF089'>
                    <Box textAlign='center' p={4}>
                        <Stack divider={<StackDivider />} spacing='4'>
                            <Box>
                                <Projects projects={projects} />
                            </Box>
                            <Box>
                                <ResumeButton />
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
    );
}
