
import { Button, HStack, VStack, Text } from '@chakra-ui/react';

export type Filter = 'All' | 'Physical' | 'Audiobook' | 'Literary Fiction' | 'Historical Fiction' | 'Surrealist Fiction' | 'Sci-Fi' | 'Non-Fiction' | 'Thriller' | 'Contemporary Romance';

interface FilterControlsProps {
    activeFilter: Filter;
    setActiveFilter: (filter: Filter) => void;
}

const formats: Filter[] = ['All', 'Physical', 'Audiobook'];
const genres: Filter[] = ['Literary Fiction', 'Historical Fiction', 'Surrealist Fiction', 'Sci-Fi', 'Non-Fiction', 'Thriller', 'Contemporary Romance'];

export default function FilterControls({ activeFilter, setActiveFilter }: FilterControlsProps) {
    return (
        <VStack spacing={4} mb={8}>
            <VStack>
                <Text fontWeight="bold">Filter by Format</Text>
                <HStack>
                    {formats.map((format) => (
                        <Button
                            key={format}
                            onClick={() => setActiveFilter(format)}
                            colorScheme={activeFilter === format ? 'pink' : 'gray'}
                            variant={activeFilter === format ? 'solid' : 'outline'}
                        >
                            {format}
                        </Button>
                    ))}
                </HStack>
            </VStack>
            <VStack>
                <Text fontWeight="bold">Filter by Genre</Text>
                <HStack wrap="wrap" justify="center">
                    {genres.map((genre) => (
                        <Button
                            key={genre}
                            onClick={() => setActiveFilter(genre)}
                            colorScheme={activeFilter === genre ? 'pink' : 'gray'}
                            variant={activeFilter === genre ? 'solid' : 'outline'}
                        >
                            {genre}
                        </Button>
                    ))}
                </HStack>
            </VStack>
        </VStack>
    );
}
