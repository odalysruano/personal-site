import { Box, Heading, Text } from "@chakra-ui/react"

export default function AboutMe() {
    return(
        <>
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
        </>
    );
}
