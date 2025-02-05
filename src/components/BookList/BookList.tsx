import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Heading, ListItem, OrderedList, Select, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export interface BookInfo { 
    title: string;
    author: string;
}

interface BookListProps {
    bookList: BookInfo[];
    audiobookList: BookInfo[];
}

type SortOption = 'default' | 'title' | 'authorFirst' | 'authorLast';

export function BookList({ bookList, audiobookList }: BookListProps) {
    const [selectedSort, setSelectedSort] = useState<SortOption>('default');

    useEffect(() => {
        setSelectedSort('default');
    }, [bookList, audiobookList]);

    const sortBooks = (books: BookInfo[]) => {
        if (selectedSort === 'default') {
            return books;
        }
        return [...books].sort((a, b) => {
            if (selectedSort === 'title') {
                return a.title.localeCompare(b.title);
            } else if (selectedSort === 'authorLast') {
                const aLastName = a.author.split(' ').pop() || '';
                const bLastName = b.author.split(' ').pop() || '';
                return aLastName.localeCompare(bLastName);
            } else {
                const aFirstName = a.author.split(' ')[0] || '';
                const bFirstName = b.author.split(' ')[0] || '';
                return aFirstName.localeCompare(bFirstName);
            }
        });
    };

    const sortedBookList = sortBooks(bookList);
    const sortedAudiobookList = sortBooks(audiobookList);

    return(
        <Box 
            textAlign='center' 
            px={{ base: '20px', md: '200px' }} 
            py='50'
            scrollMarginTop='80px'
        >
            <Box maxWidth={{ base: '100%', md: '800px' }} mx='auto' position="relative">
                <Heading mb={{ base: '4', md: '4' }} mt='4' size='xl'>Books</Heading>
                <Box 
                    position={{ base: 'static', md: 'absolute' }}
                    right={{ md: '0' }}
                    top={{ md: '0' }}
                    width="160px"
                    zIndex="1"
                    mx={{ base: 'auto', md: '0' }}
                    mb={{ base: '4', md: '0' }}
                >
                    <Select
                        bg='#81E6D9'
                        borderColor='#81E6D9'
                        value={selectedSort}
                        onChange={(e) => setSelectedSort(e.target.value as SortOption)}
                        icon={<ChevronDownIcon />}
                        fontSize='sm'
                        h='32px'
                        w='170px'
                    >
                        <option value='default'>Order Read</option>
                        <option value='title'>Title</option>
                        <option value='authorFirst'>Author First Name</option>
                        <option value='authorLast'>Author Last Name</option>
                    </Select>
                </Box>
                <Box 
                    bg='white'
                    p={6}
                    boxShadow='md'
                    borderRadius='md'
                    mb={6}
                    mt={{ base: '0', md: '4' }}
                >
                    <OrderedList textAlign='left'>
                        {sortedBookList.map(book => (
                            <ListItem fontSize={{ base: 'sm', md: 'md' }} key={book.title}>
                                <b>{book.title}</b> by {book.author}
                            </ListItem>
                        ))}
                    </OrderedList>

                    {/* Audiobooks Section */}
                    <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight='bold' mt='8' mb='4'>
                        Audiobooks
                    </Text>

                    <OrderedList textAlign='left' start={1}>
                        {sortedAudiobookList.map(book => (
                            <ListItem fontSize={{ base: 'sm', md: 'md' }} key={book.title}>
                                <b>{book.title}</b> by {book.author}
                            </ListItem>
                        ))}
                    </OrderedList>
                </Box>
            </Box>
        </Box>
    );
}
