import { Box, Image, Text, VStack, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { BookGalleryItem } from '../../constants/reading26';

const MotionBox = motion(Box);

interface BookCardProps {
    book: BookGalleryItem;
}

// const StarRating = ({ rating }: { rating: number }) => {
//     return (
//         <Box color="yellow.400">
//             {'★'.repeat(rating)}
//             {'☆'.repeat(5 - rating)}
//         </Box>
//     );
// };

export default function BookCard({ book }: BookCardProps) {
    return (
        <MotionBox
            position="relative"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            whileHover="hover"
            initial="rest"
            animate="rest"
            layoutId={`card-${book.title}`}
        >
            <Image src={book.coverUrl} alt={`${book.title} cover`} w="100%" h="auto" objectFit="cover" />

            <MotionBox
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                bg="rgba(0, 0, 0, 0.7)"
                p={4}
                variants={{
                    rest: { y: '100%' },
                    hover: { y: 0 }
                }}
                transition={{ type: 'tween', duration: 0.3 }}
            >
                <VStack spacing={1} align="start" color="white">
                    <Heading size="sm" noOfLines={1}>{book.title}</Heading>
                    <Text fontSize="xs">{book.author}</Text>
                    {/* <StarRating rating={book.rating} /> */}
                </VStack>
            </MotionBox>
        </MotionBox>
    );
}
