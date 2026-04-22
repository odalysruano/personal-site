
import { SimpleGrid, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { BookGalleryItem } from '../../constants/reading26';
import BookCard from '../BookCard/BookCard';
import { Filter } from '../FilterControls/FilterControls';

interface BookGalleryProps {
    books: BookGalleryItem[];
    activeFilter: Filter;
}

export default function BookGallery({ books, activeFilter }: BookGalleryProps) {
    const filteredBooks = books.filter(book => {
        if (activeFilter === 'All') {
            return true;
        }
        if (activeFilter === 'Physical' || activeFilter === 'Audiobook') {
            return book.format === activeFilter;
        }
        return book.genre === activeFilter;
    });

    return (
        <Box w="100%">
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={{ base: 4, md: 6 }}>
                {filteredBooks.map((book) => (
                    <motion.div key={book.title} layout>
                        <BookCard book={book} />
                    </motion.div>
                ))}
            </SimpleGrid>
        </Box>
    );
}
