import { Box, Heading, ListItem, OrderedList, Text } from '@chakra-ui/react';

export interface BookInfo { 
    title: string;
    author: string;
}

interface BookListProps {
    bookList: BookInfo[];
    audiobookList: BookInfo[];
}

export function BookList({ bookList, audiobookList }: BookListProps) {
    return(
        <Box 
            textAlign='center' 
            px={{ base: '50px', md: '200px' }} 
            py='50'
            scrollMarginTop='80px'
        >
            <Heading mb='4' mt='4' size='xl'>Books</Heading>
            <Box 
                bg='white'
                p={6}
                boxShadow='md'
                borderRadius='md'
                mb={6}
                mx='auto'
                maxWidth='800px'
            >
                <OrderedList textAlign='left'>
                    {bookList.map(book => {
                        return (
                            <ListItem fontSize='md' key={book.title}>
                                <b>{book.title}</b> by {book.author}
                            </ListItem>
                        )
                    })}
                </OrderedList>

                {/* Audiobooks Section */}
                <Text fontSize='lg' fontWeight='bold' mt='8' mb='4'>
                    Audiobooks
                </Text>

                <OrderedList textAlign='left' start={1}>
                    {audiobookList.map(book => {
                        return (
                            <ListItem fontSize='md' key={book.title}>
                                <b>{book.title}</b> by {book.author}
                            </ListItem>
                            )
                        })}
                </OrderedList>
            </Box>
        </Box>
    );
}
