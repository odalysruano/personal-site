import { Box, Flex, Text } from '@chakra-ui/react';

export default function Footer() {
    return(
        <Box
            as='footer'
            bg='#FCEDCF'
            h={10}
            px={4}
            boxShadow='md'
        >
            <Flex alignItems='center' h="100%" justifyContent='flex-end'>
                <Text>© 2024 Odalys Ruano. All Rights Reserved.</Text>
            </Flex>
        </Box>
    );
}
