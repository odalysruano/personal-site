import { Box, Flex, Text } from '@chakra-ui/react';

export default function Footer() {
    return(
        <>
            <Box
                bg='#9AE6B4'
                px={4}
                boxShadow="md"
            >
                <Flex h={10} alignItems={'center'} justifyContent={'flex-end'}>
                    <Text>© 2024 Odalys Ruano. All Rights Reserved.</Text>
                </Flex>
            </Box>
        </>
    );
}
