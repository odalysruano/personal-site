import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function AboutMe() {
    return(
        <Box 
            id='about' 
            px={{ base: '20px', md: '200px' }} 
            py='50'
            scrollMarginTop='80px'
            textAlign='center'
        >
            <Heading mb={8} size={{ base: 'lg', md: 'xl' }}>About Me ✨</Heading>
            
            <Box 
                bg='white'
                px={{ base: '6', md: '12' }}
                py='10'
                boxShadow='md'
                borderRadius='md'
                mx='auto'
                maxWidth={{ base: '100%', md: '900px' }}
            >
                <VStack spacing={8} align="center">
                    {/* Introduction */}
                    <Box>
                        <Text 
                            fontSize={{ base: 'md', md: 'lg' }}
                            lineHeight='1.7'
                        >
                            Hi! I&apos;m <b>Odalys</b> (pronounced Oh-Dallas). I am an NYC-based software engineer and founder who builds at the intersection of complex data architecture and user-centric design. I specialize in turning unstructured complexity into scalable, production-ready systems.
                        </Text>
                    </Box>

                    {/* Section 1 */}
                    <Box>
                        <Heading size="md" mb={3} color="teal.600">
                            From Customer Success to Building at the Source
                        </Heading>
                        <Text fontSize="md" lineHeight="1.7">
                            I spent over four years in Customer Success, most recently at <b>Justworks</b>, where I saw firsthand how legacy tools and &quot;admin debt&quot; create friction for users. That experience gave me a permanent <b>&quot;product-minded&quot; foundation</b>—I don&apos;t just close tickets; I solve for the user&apos;s &quot;latency-to-insight&quot; and build with deep empathy for the person on the other side of the terminal.
                        </Text>
                    </Box>

                    {/* Section 2 */}
                    <Box>
                        <Heading size="md" mb={3} color="teal.600">
                            Founder & 0-to-1 Engineer
                        </Heading>
                        <Text fontSize="md" lineHeight="1.7">
                            Since 2024, I&apos;ve been building <b>Memify.ai</b>, an AI-powered knowledge platform designed to enhance relationship management. As the Founding Engineer, I architected a full-stack, event-driven system on AWS—leveraging <b>Python (FastAPI & gRPC)</b>, <b>TypeScript/Next.js</b>, <b>Amazon Bedrock</b>, and <b>Amazon Neptune</b> to handle complex relationship data. I am obsessed with <b>&quot;Soundness&quot;</b>: building AI-native infrastructure that is predictable, observable, and built to last.
                        </Text>
                    </Box>

                    {/* Section 3 */}
                    <Box>
                        <Heading size="md" mb={3} color="teal.600">
                            The &quot;Type-A&quot; Builder
                        </Heading>
                        <Text fontSize="md" lineHeight="1.7">
                            I am the rare engineer who actually values the process as much as the code. I prioritize <b>documentation, SOPs, and &quot;docs-as-code&quot; standards</b> because I believe that the best developer experience is one where the right way to build is also the easiest. To me, engineering is an act of <b>stewardship</b>; I build with the long-term health of the system in mind, ensuring it is sound, observable, and maintainable for whoever touches the code next.
                        </Text>
                    </Box>

                    {/* Section 4 */}
                    <Box>
                        <Heading size="md" mb={3} color="teal.600">
                            Beyond the Terminal
                        </Heading>
                        <Text fontSize="md" lineHeight="1.7">
                            When I&apos;m not in an IDE, I&apos;m likely leaning into that &quot;leave it better than you found it&quot; mentality as a volunteer gardener at <b>Riverside Park</b>. I&apos;m also an avid reader (aiming for <b>50 books</b> this year), a sourdough baker, and a recent kitten parent. I&apos;m a firm believer in the idea that whether you&apos;re managing a CI/CD pipeline or a community garden, the goal is always to improve the environment for everyone.
                        </Text>
                    </Box>
                </VStack>
            </Box>
        </Box>
    );
}
