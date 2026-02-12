import {
    Badge,
    Box,
    Circle,
    Flex,
    Heading,
    HStack,
    Icon,
    Text,
    VStack,
    useColorModeValue,
} from '@chakra-ui/react';
import { MdEdit, MdPsychology, MdBuild, MdCheckCircle } from 'react-icons/md';

interface TimelineItemProps {
    date: string;
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
    isLast?: boolean;
}

const TimelineItem = ({ date, title, description, icon, color, isLast }: TimelineItemProps) => {
    const lineColor = useColorModeValue('gray.200', 'gray.700');
    const bgColor = useColorModeValue('white', 'gray.800');

    return (
        <Flex gap={4} position="relative">
            {/* Timeline Line */}
            {!isLast && (
                <Box
                    position="absolute"
                    left="20px"
                    top="40px"
                    bottom="-24px" // Connect to next item
                    width="2px"
                    bg={lineColor}
                    transform="translateX(-50%)"
                    zIndex={0}
                />
            )}

            {/* Icon Circle */}
            <Circle
                size="40px"
                bg={`${color}.100`}
                _dark={{ bg: `${color}.900` }}
                color={`${color}.500`}
                zIndex={1}
                boxShadow="sm"
            >
                <Icon as={icon} boxSize={5} />
            </Circle>

            {/* Content Card */}
            <Box pb={8} flex="1">
                <Box
                    p={6}
                    bg={bgColor}
                    borderRadius="lg"
                    borderWidth="1px"
                    boxShadow="sm"
                    transition="all 0.2s"
                    _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
                >
                    <HStack justify="space-between" mb={2} wrap="wrap">
                        <Badge colorScheme="gray" variant="solid" fontSize="xs">
                            {date}
                        </Badge>
                    </HStack>
                    <Heading size="md" mb={2} color={`${color}.500`}>
                        {title}
                    </Heading>
                    <Text color="gray.600" _dark={{ color: 'gray.400' }} fontSize="sm" whiteSpace="pre-line">
                        {description}
                    </Text>
                </Box>
            </Box>
        </Flex>
    );
};

const FounderTimeline = () => {
    return (
        <Box py={16} maxW="3xl" mx="auto">
            <VStack spacing={0} align="stretch">
                <VStack spacing={2} textAlign="center" mb={12}>
                    <Badge colorScheme="purple" variant="outline">Founder&apos;s Highlights</Badge>
                    <Heading as="h2" size="xl">
                        Engineering Retrospective
                    </Heading>
                    <Text color="gray.500" maxW="lg">
                        Building Memify wasn&apos;t a straight line. These are the snapshots of the grit required to move from a whiteboard to a live demo.
                    </Text>
                </VStack>

                <TimelineItem
                    date="Nov 25, 2024"
                    title="Foundations & Nostalgia"
                    description={`Day one of building. While configuring a Bazel monorepo felt like a heavy lift for a solo project, I knew the foundation had to be hermetic. 

                    I landed on the name 'Memify' after hours of combining different keywords. I liked the idea of highlighting 'memory' and 'magnify' as big ideas behind what I was building. It also brought me back to carrying a spiral notepad to play detective as a kid; now, I was building the digital version.`}
                    icon={MdEdit}
                    color="pink"
                />

                <TimelineItem
                    date="Apr 29, 2025"
                    title="The Integration Iceberg"
                    description={`I booked a 4-day retreat to Hudson, NY to "reach MVP." Reality was humbling: I spent 75% of the trip in a quiet cabin wrestling with Google Drive Integration. 

                    I didn't reach MVP that week, but I survived the 'integration nightmare' that needed to be resolved before I moved on to work on Document Processing and Fact Management tasks.`}
                    icon={MdPsychology}
                    color="orange"
                />

                <TimelineItem
                    date="Aug 14, 2025"
                    title="Knowledge over Keywords"
                    description={`"It's been a long time coming." After months of laying foundation, I finally hunkered down to fix the core retrieval logic. 

                    I replaced simple keyword search with a two-step graph traversal using Gremlin and Neptune. Suddenly, the chat wasn't just pulling text—it was navigating the inter-fact relationships I had spent months architecting.`}
                    icon={MdBuild}
                    color="blue"
                />

                <TimelineItem
                    date="Dec 30, 2025"
                    title="Full-Circle Growth"
                    description={`The year began with me feeling devalued by the job search and a non-traditional background. It ended with me exporting the demo for a complex AI platform I built from scratch. 

                    The timeline shifted, and the "Google Drive bugs" were painful, but I proved I could take a vision across the finish line.`}
                    icon={MdCheckCircle}
                    color="green"
                    isLast
                />
            </VStack>
        </Box>
    );
};

export default FounderTimeline;
