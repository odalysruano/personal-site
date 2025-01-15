import { Box, Text, Image, Heading } from '@chakra-ui/react';

export interface TBRContent {
    content: string;
    href: string;
    altText: string;
}

interface TBRSectionProps {
    tbrSection: TBRContent[];
    year: string;
}

export function TBRSection({ tbrSection, year }: TBRSectionProps) {
    return (
        <Box 
            textAlign='center' 
            px={{ base: '20px', md: '200px' }} 
            py='50'
            scrollMarginTop='80px'
        >
            <Heading mb={4} size={{ base: 'lg', md: 'xl' }}>{year} TBR Stack</Heading>
            
            <Box 
                bg='white'
                px={{ base: '6', md: '10' }}
                py='5'
                boxShadow='md'
                borderRadius='md'
                mx='auto'
                maxWidth={{ base: '100%', md: '1000px' }}
                textAlign={{ base: 'left', md: 'center' }}
            >
                {tbrSection.map((item, index) => (
                    <Box key={index}>
                        <Text 
                            pt='2' 
                            fontSize={{ base: 'sm', md: 'md' }}
                            lineHeight={{ base: '1.6', md: '1.7' }}
                            mb={4}
                        >
                            {item.content}
                        </Text>
                        <Box
                            pt='2'
                            mb={4}
                            display="flex"
                            justifyContent="center"
                        >
                            <Image
                                src={item.href}
                                alt={item.altText}
                                objectFit='contain'
                                width='100%'
                                height={{ base: '100%', md: '400px' }}
                            />
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
