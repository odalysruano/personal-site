import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

export default function ReadingPage() {
    return (
        <Box minHeight='100vh' display='flex' flexDirection='column'>
            <Grid
                templateRows={{ base: 'repeat(4, auto)', md: 'repeat(5, auto)' }}
                templateColumns='repeat(4, 1fr)'
                gap={4}
                p={4}
                flex='1'
            >
                <GridItem colSpan={4} bg='#FC6A80'>
                    <Box textAlign='center' py='50px'>
                        <Heading size='xl'>My Reading List</Heading>
                        <Text pt='4'>summary</Text>
                    </Box>
                </GridItem>
                <GridItem colSpan={4} bg='#FC8F77'>
                    <Box textAlign='center' py='50px'>
                        <Heading size='xl'>Photos</Heading>
                    </Box>
                </GridItem>
                <GridItem colSpan={4} bg='#FCE9A3'>
                    <Box textAlign='center' py='50px'>
                        <Heading size='xl'>Actual List</Heading>
                    </Box>
                </GridItem>
                <GridItem colSpan={4} bg='#FAC589'>
                    <Box textAlign='center' py='50px'>
                        <Heading size='xl'>TBR</Heading>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    );
}
