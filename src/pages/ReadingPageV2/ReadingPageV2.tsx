
import { useState } from 'react';
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react';
import ReadingSummaryV2 from '../../components/ReadingSummary/ReadingSummaryV2';
import FilterControls, { Filter } from '../../components/FilterControls/FilterControls';
import BookGallery from '../../components/BookGallery/BookGallery';
import { BookGalleryItem } from '../../constants/reading26';

interface ReadingPageV2Props {
    props: {
        year: string;
        summary: string[];
        bookGallery: BookGalleryItem[];
    };
}

export default function ReadingPageV2({ props }: ReadingPageV2Props) {
    const [activeFilter, setActiveFilter] = useState<Filter>('All');
    const { year, bookGallery } = props;

    return (
        <Box minHeight='100vh' display='flex' flexDirection='column'>
            <Grid
                templateRows='auto auto 1fr'
                templateColumns='repeat(4, 1fr)'
                gap={4}
                p={{ base: 2, md: 4 }}
                flex='1'
            >
                <GridItem colSpan={4} bg='#FC6A80'>
                    <ReadingSummaryV2 year={year} />
                </GridItem>

                <GridItem colSpan={4} bg='#FCE9A3' p={{ base: 2, md: 4 }} textAlign="center">
                    <Heading as="h2" size="lg" mb={6}>My {year} Book Gallery</Heading>
                    <BookGallery books={bookGallery} activeFilter={activeFilter} />
                </GridItem>

                <GridItem colSpan={4} bg='#E6E6FA' p={{ base: 2, md: 4 }}>
                    <FilterControls activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
                </GridItem>
            </Grid>
        </Box>
    );
}
