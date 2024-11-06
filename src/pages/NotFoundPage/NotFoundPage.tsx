import { Box, Button, Heading, Link, Text } from '@chakra-ui/react';

export default function NotFoundPage() {
    return (
        <Box textAlign='center' p={10}>
            <Heading size='2xl' mb={4}>Oops!</Heading>
            <Text fontSize='lg' mb={4}>Page Not Found - Looks like this story doesn&apos;t have a chapter yet!</Text>
            <Link href='/'>
                <Button 
                    bg='#81E6D9'
                    _hover={{
                        textDecoration: 'none',
                        bg: '#E9D8FD',
                    }}
                >
                    Go Back Home
                </Button>
            </Link>
        </Box>
    );
}
