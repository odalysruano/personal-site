import { Box, Heading, Text, SimpleGrid, VStack, Button, Icon } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const CTACard = ({ title, text, buttonText, to }: { title: string; text: string; buttonText: string; to: string; }) => {
    return (
        <VStack
            bg='white'
            p={8}
            boxShadow='lg'
            borderRadius='lg'
            border='1px solid'
            borderColor='gray.200'
            textAlign='center'
            spacing={5}
            alignItems='center'
            transition='all 0.3s ease'
            _hover={{
                transform: 'translateY(-5px)',
                boxShadow: 'xl',
            }}
        >
            <Heading as='h3' size='lg' color='gray.700'>
                {title}
            </Heading>
            <Text color='gray.600' minH={{ base: 'auto', md: '100px' }}>
                {text}
            </Text>
            <Button
                as={RouterLink}
                to={to}
                bg='#81E6D9'
                color='gray.800'
                _hover={{
                    textDecoration: 'none',
                    bg: '#E9D8FD',
                }}
                rightIcon={<Icon as={FaArrowRight} />}
            >
                {buttonText}
            </Button>
        </VStack>
    );
};


export default function CTASection() {
    return (
        <Box id='cta-section' textAlign='center' py={10} px={4}>
            <Heading mb={10} size={{ base: 'xl', md: '2xl' }} color='gray.800'>
                Explore My Journey & Work
            </Heading>
            {/* SimpleGrid makes the layout responsive for mobile and desktop */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} maxW='1200px' mx='auto'>
                <CTACard
                    title='Case Study: Memify'
                    text='A deep dive into the AI-powered relationship management tool I conceived, designed, and engineered from the ground up over 10 months.'
                    buttonText='View Case Study'
                    to='/memify'
                />
                <CTACard
                    title='My Career Path'
                    text='Discover my journey from customer success to software engineering, detailed on an interactive timeline that showcases my unique perspective.'
                    buttonText='Follow My Journey'
                    to='/career'
                />
                <CTACard
                    title='My Work & Skills'
                    text='A collection of my best projects, demonstrating my skills in full-stack development, from front-end design to back-end architecture.'
                    buttonText='Browse My Work'
                    to='/work'
                />
            </SimpleGrid>
        </Box>
    );
}
