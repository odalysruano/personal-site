import { Box, Heading, Text } from "@chakra-ui/react"

export default function AboutMe() {
    return(
        <Box textAlign='center' id='about' px={{ base: '50px', md: '200px' }} py='50'>
            <Heading size='lg'>About Me</Heading>
            <Text pt='2' fontSize='md'>
                Hi! My name is <b>Odalys</b> (pronounced Oh-Dallas).
            </Text>
            <Text pt='2' fontSize='md'>
                I was born and raised in Westchester, NY, and I have lived in <b>New York City</b> for 10+ years.
            </Text>
            <Text pt='2' fontSize='md'>
                In 2018, I graduated <b>NYU Stern</b> with a B.S. in Business, and concentrations in Marketing and Sustainable Business.
            </Text>
            <Text pt='2' fontSize='md'>
                I spent 4+ years doing <b>Customer Success</b> work with B2B tech clients at a marketing agency and, later, with clients across industries at <b>Justworks</b> (HR Tech).
            </Text>
            <Text pt='2' fontSize='md'>
                My experience working with customers at Justworks led me to become passionate about approaching <b>engineering challenges</b> with the goal of <b>solving customer pain points</b>.
            </Text>
            <Text pt='2' fontSize='md'>
                In 2024, I challenged myself and pivoted my career. I completed a coding bootcamp with <b>General Assembly</b> in April 2024.
            </Text>
            <Text pt='2' fontSize='md'>
                Now, I'm seeking a <b>full-stack software engineering opportunity</b> at a company where I will <b>ship products</b> and offer a <b>customer-centric</b> point of view.
            </Text>
            <Text pt='2' fontSize='md'>
                I <b>aspire to</b> continually grow my skills and experience, with the goal of one day <b>leading an engineering team</b>. I believe that by honing my technical expertise and understanding the nuances of <b>collaboration and leadership</b>, I can guide and <b>inspire others</b> to achieve great things together.
            </Text>
            <Text pt='2' fontSize='md'>
                In my free time, I enjoy reading books, baking new recipes, going on photography walks, exploring new cities, and playing Animal Crossing.
            </Text>
        </Box>
    );
}
