import { Badge, Box, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";

import cabinImg from '../../assets/cabin.jpeg';
import computerImg from '../../assets/computer_terminal.jpeg';
import odalysImg from '../../assets/odalys_working.jpeg';
import slideshowImg from '../../assets/retreat_slideshow.jpeg';

const HudsonSummit = () => (
    <Box
        py={20}
        px={{ base: 6, md: 16 }}
        bg="orange.50"
        _dark={{ bg: 'gray.800', border: '1px solid', borderColor: 'orange.900' }}
        borderRadius="3xl"
    >
        <VStack spacing={16} maxW="5xl" mx="auto">
            {/* Header Beat */}
            <VStack spacing={4} textAlign="center">
                <Badge colorScheme="orange" variant="outline" px={3} py={1} borderRadius="full">
                    The Deep Work Retreat
                </Badge>
                <Heading size="2xl" fontStyle="italic">
                    Hudson, NY: The Price of a Foundation
                </Heading>
            </VStack>

            {/* Beat 1: Setting the Scene */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} alignItems="center">
                <VStack align="start" spacing={6} fontSize="lg" color="gray.700" _dark={{ color: 'gray.300' }}>
                    <Text>
                        In April 2025, I escaped the city for a cabin in Hudson, NY. 
                        It was so quiet it felt eerie—the perfect environment to finally reach my MVP. 
                        I arrived with a whiteboard, my Post-it easel pad, and a plan to sprint through the core AI features.
                    </Text>
                </VStack>
                <Box transform="rotate(-2deg)" p={2} bg="white" shadow="xl" borderRadius="sm">
                    <Image src={cabinImg} alt="My stay in Hudson" />
                    <Text mt={2} fontSize="xs" color="gray.500" textAlign="center" fontWeight="bold">
                        My Work Retreat Setting! (Hudson, NY)
                    </Text>
                </Box>
            </SimpleGrid>

            {/* Beat 2: The Integration Reality */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} alignItems="center">
                <Box order={{ base: 2, md: 1 }} transform="rotate(2deg)" p={2} bg="white" shadow="xl" borderRadius="sm">
                    <Image src={computerImg} alt="Coding on my computer" />
                    <Text mt={2} fontSize="xs" color="gray.500" textAlign="center" fontWeight="bold">
                        Solving OAuth Challenges
                    </Text>
                </Box>
                <VStack order={{ base: 1, md: 1 }} align="start" spacing={6} fontSize="lg" color="gray.700" _dark={{ color: 'gray.300' }}>
                    <Text>
                        The reality was a humbling lesson in technical debt. I spent 75% of that retreat 
                        locked inside, wrestling exclusively with the Google Drive integration. 
                    </Text>
                    <Text>
                        The &quot;fun&quot; AI work was stalled by the unglamorous reality of debugging the gAPI lifecycle. 
                        To resolve a persistent &quot;picker is undefined&quot; error, I had to re-engineer the initialization 
                        flow to ensure the Google Picker only loaded after a successful OAuth 2.0 handshake via a 
                        custom server-side Clerk action.
                    </Text>
                </VStack>
            </SimpleGrid>

            {/* Beat 3: The Mid-Retreat Grind */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} alignItems="center">
                <VStack align="start" spacing={6} fontSize="lg" color="gray.700" _dark={{ color: 'gray.300' }}>
                    <Text>
                        There were nicer days where we explored the town and visited farms, but no matter 
                        the weather, I spent the majority of my time inside working. 
                        I was determined to reach MVP, even as I realized my original 3-month timeline 
                        had been an optimistic fantasy.
                    </Text>
                </VStack>
                <Box transform="rotate(-1.5deg)" p={2} bg="white" shadow="xl" borderRadius="sm">
                    <Image src={odalysImg} alt="Working in Hudson, NY" />
                    <Text mt={2} fontSize="xs" color="gray.500" textAlign="center" fontWeight="bold">
                        Working in Hudson, NY
                    </Text>
                </Box>
            </SimpleGrid>

            {/* Beat 4: The Final Takeaway */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} alignItems="center">
                <VStack order={{ base: 1, md: 1 }} align="start" spacing={6} fontSize="lg" color="gray.700" _dark={{ color: 'gray.300' }}>
                    <Text>
                        I left Hudson having finally resolved my integration challenges. While the AI was still ahead, the foundation was solid: the Upload and Documents pages were live, the Google Drive integration was bulletproof, and the CDK infrastructure was fully deployed.
                    </Text>
                    <Text>
                        With the Facts proto defined, I was ready for the final push into parsing and chat integration. Looking back, it was one of the most productive weeks of the entire build. It taught me that grit is a technical skill—you have to survive the &quot;Google Drive bug&quot; 
                        moments to reach the breakthrough.
                    </Text>
                </VStack>
                <Box transform="rotate(-1.5deg)" p={2} bg="white" shadow="xl" borderRadius="sm">
                    <Image src={slideshowImg} alt="Reviewing retreat outcomes" />
                    <Text mt={2} fontSize="xs" color="gray.500" textAlign="center" fontWeight="bold">
                        Retreat Outcomes Review
                    </Text>
                </Box>
            </SimpleGrid>

            {/* Closing Quote */}
            <Box textAlign="center" pt={10} borderTop="1px solid" borderColor="orange.200" w="full">
                <Text fontSize="xl" fontWeight="bold" color="orange.600">
                    &quot;Memify.ai exists today because I refused to let the &apos;messy middle&apos; be the end of the story.&quot;
                </Text>
                <Text mt={4} color="gray.500" fontSize="sm" fontStyle="italic">
                    — From my project journal, Hudson Summit 2025.
                </Text>
            </Box>
        </VStack>
    </Box>
);

export default HudsonSummit;
