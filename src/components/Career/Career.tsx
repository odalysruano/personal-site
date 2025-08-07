import {
    Box,
    BoxProps,
    Button,
    Flex,
    Heading,
    HStack,
    Icon,
    ListItem,
    SimpleGrid,
    Tag,
    Text,
    UnorderedList,
    VStack,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { skills, experience, education, TimelineItemData } from '../../constants/career';

const TimelineCard = ({ data, boxProps }: { data: TimelineItemData, boxProps?: BoxProps }) => (
    <Box
        p={6}
        bg="white"
        borderRadius="lg"
        boxShadow="md"
        w="full"
        border="1px solid"
        borderColor="gray.200"
        _hover={{ boxShadow: 'lg', transform: 'scale(1.01)' }}
        transition="all 0.2s ease-in-out"
        {...boxProps}
    >
        <Heading as="h3" size="md" color="gray.800">{data.role || data.degree}</Heading>
        {'concentration' in data && data.concentration && (
            <Text fontSize="sm" fontStyle="italic" color="gray.600" mt={1}>
                Concentrations: {data.concentration}
            </Text>
        )}
        <Text fontWeight="semibold" color="#FC6A80">{data.company || data.institution}</Text>
        <Text fontSize="sm" color="gray.500" mt={2} mb={data.points ? 4 : 0}>{data.date}</Text>
        {data.points && (
            <UnorderedList spacing={2} pl={2}>
                {data.points.map(point => <ListItem key={point} fontSize="sm">{point}</ListItem>)}
            </UnorderedList>
        )}
        {'keyTakeaway' in data && data.keyTakeaway && (
            <Box mt={4} pt={4} borderTop="1px" borderColor="gray.200">
                <HStack>
                    <Icon as={FaStar} color="yellow.400" />
                    <Text fontWeight="bold" fontSize="sm">Key Takeaway</Text>
                </HStack>
                <Text fontSize="sm" mt={2} fontStyle="italic" color="gray.700">
                    {data.keyTakeaway}
                </Text>
            </Box>
        )}
    </Box>
);

const TimelineRow = ({ item, index, isLast }: { item: TimelineItemData; index: number; isLast: boolean; }) => {
    const isEven = index % 2 === 0;
    const isEducation = !!item.degree;

    const cardProps = isEducation ? { minW: { md: '400px' } } : {};

    const MobileView = (
        <HStack alignItems="stretch" spacing={4} w="full">
            <VStack spacing={0} h="auto">
                <Box bg="#FC6A80" w="12px" h="12px" borderRadius="full" flexShrink={0} />
                <Box w="2px" flex="1" bg={isLast ? 'transparent' : 'white'} />
            </VStack>
            <Box pb={isLast ? 0 : 8} w="full">
                <TimelineCard data={item} boxProps={cardProps} />
            </Box>
        </HStack>
    );

    const DesktopView = (
        <Flex w="full" position="relative" pb={isLast ? 0 : 8}>
            <VStack spacing={0} position="absolute" top={0} left="50%" transform="translateX(-50%)" h="full">
                <Box bg="#FC6A80" w="16px" h="16px" borderRadius="full" zIndex={1} boxShadow="0 0 0 4px #FCE9A3" flexShrink={0} />
                <Box w="2px" flex="1" bg={isLast ? 'transparent' : 'white'} />
            </VStack>

            <Box w="50%" pr={8} display="flex" justifyContent="flex-end">
                {isEven && <TimelineCard data={item} boxProps={cardProps} />}
            </Box>
            
            <Box w="50%" pl={8} display="flex" justifyContent="flex-start">
                {!isEven && <TimelineCard data={item} boxProps={cardProps} />}
            </Box>
        </Flex>
    );

    return (
        <>
            <Box display={{ base: 'block', md: 'none' }} w="full">{MobileView}</Box>
            <Box display={{ base: 'none', md: 'block' }}>{DesktopView}</Box>
        </>
    );
};


export default function Career() {
    return (
        <VStack spacing={12} p={{ base: 4, md: 8 }} maxW="1200px" mx="auto">
            <VStack textAlign="center" spacing={4} pt={8}>
                <Heading as="h1" size="2xl" color="gray.800">My Professional Journey</Heading>
                <Text fontSize="lg" color="gray.600" maxW="800px">
                    As a Software Engineer with a background in customer success and project management, I build user-centric technology. My journey is about blending deep user empathy with technical expertise to create products that solve real-world problems.
                </Text>
            </VStack>

            <VStack spacing={6} w="full" bg="white" p={8} borderRadius="lg" boxShadow="md">
                <Heading as="h2" size="xl" color="gray.700">Technical Skills 🛠️</Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacingX={10} spacingY={6} w="full">
                    {Object.entries(skills).map(([category, list]) => (
                        <Box key={category}>
                            <Text fontWeight="bold" color="gray.600" mb={2}>{category}</Text>
                            <Wrap>
                                {list.map(skill => (
                                    <WrapItem key={skill}>
                                        <Tag size="md" variant="solid" bg='#FC6A80' color='white'>{skill}</Tag>
                                    </WrapItem>
                                ))}
                            </Wrap>
                        </Box>
                    ))}
                </SimpleGrid>
            </VStack>

            <VStack spacing={0} w="full" pt={8}>
                <Heading as="h2" size="xl" color="gray.700" mb={10}>Experience</Heading>
                {experience.map((job, index) => (
                    <TimelineRow key={job.company} item={job} index={index} isLast={index === experience.length - 1} />
                ))}
            </VStack>

            <VStack spacing={0} w="full" pt={8}>
                <Heading as="h2" size="xl" color="gray.700" mb={10}>Education</Heading>
                {education.map((edu, index) => (
                    <TimelineRow key={edu.institution} item={edu} index={index} isLast={index === education.length - 1} />
                ))}
            </VStack>
            
            <VStack spacing={4} py={8}>
                <Button
                    as="a"
                    href="https://drive.google.com/file/d/1rKGamG9KabGKRMNc0fNrmIKE2Proa9OR/view?usp=sharing"
                    target="_blank"
                    size="lg"
                    bg='#FC6A80'
                    color='white'
                    _hover={{ bg: '#E9D8FD' }}
                    leftIcon={<Icon as={FaDownload} />}
                >
                    Download Full Resume
                </Button>
            </VStack>
        </VStack>
    );
}
