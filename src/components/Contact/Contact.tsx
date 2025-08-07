import { Box, Heading, HStack, Icon, Link, Text } from '@chakra-ui/react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';


export default function Contact() {
    return(
        <Box textAlign='center'>
            <Heading id='contact' size='lg' textTransform='uppercase'>Contact</Heading>
            <Text maxWidth='800px' mx='auto' pt='2'>
                Interested in connecting? Whether you&apos;d like to learn more about my journey, discuss potential job opportunities, or simply network, I&apos;d love to hear from you. Feel free to reach out!
            </Text>
            <Text pt='2'>Email: odalys.r.ruano@gmail.com</Text>
            
            <HStack justifyContent='center' pt='2'>
                <Icon as={IoLocationSharp} boxSize={6} />
                <Text>New York, NY</Text>
            </HStack>

            <HStack justifyContent='center' pt='2' spacing={4}>
                <Link href='https://www.linkedin.com/in/odalysruano/' isExternal>
                    <Icon as={IoLogoLinkedin} boxSize={10} />
                </Link>
                <Link href='https://github.com/odalysruano' isExternal>
                    <Icon as={IoLogoGithub} boxSize={10} />
                </Link>
            </HStack>
        </Box>
    );
}
