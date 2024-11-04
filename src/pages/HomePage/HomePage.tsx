import { Box, Center, Grid, GridItem, Heading, HStack, Icon, Image, Link, Stack, StackDivider, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import AboutMe from '../../components/AboutMe/AboutMe';
import Contact from '../../components/Contact/Contact';
import Projects from '../../components/Projects/Projects';
import { projects } from '../../constants/projects';
import ResumeButton from '../../components/ResumeButton/ResumeButton';
import TechStack from '../../components/TechStack/TechStack';

export default function HomePage() {
    useEffect(() => {
        const scrollTarget = localStorage.getItem('scrollTarget');
        if (scrollTarget) {
            const targetElement = document.querySelector(scrollTarget);
            if (targetElement) {
                setTimeout(() => {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 200);
            }
            localStorage.removeItem('scrollTarget');
        }
    }, []);

    return (
        <Grid
            templateRows={{ base: 'repeat(4, auto)', md: 'repeat(5, auto)' }}
            templateColumns='repeat(4, 1fr)'
            gap={4}
            p={4}
        >
            <GridItem rowSpan={{ base: 1, md: 2 }} colSpan={{ base: 4, md: 2 }} bg='#FC6A80'>
                <Box 
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    h='100%'
                    textAlign='center'
                    p={4}
                >
                    <Heading size='3xl'>Hi, I&apos;m Odalys!</Heading>
                    <Text fontSize='3xl' pt='4'>I&apos;m a full-stack software engineer.</Text>
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
                        boxSize={{ base: '250px', md: '400px' }}
                        objectFit='cover'
                        p={{ base: '30px', md: '50px' }}
                        src={
                            'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/profile+pic.jpeg'
                        }
                        alt='Odalys Ruano'
                    />
                </Center>
            </GridItem>
            <GridItem colSpan={4} bg='#FC8F77'>
                <AboutMe />
            </GridItem>
            <GridItem colSpan={4} bg='#FCE9A3'>
                <TechStack />
            </GridItem>
            <GridItem colSpan={4} bg='#FAC589'>
                <Box textAlign='center' p={4}>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Projects projects={projects} />
                        <Box py='4'>
                            <ResumeButton />
                        </Box>
                        <Contact />
                    </Stack>
                </Box>
            </GridItem>
        </Grid>
    );
}
