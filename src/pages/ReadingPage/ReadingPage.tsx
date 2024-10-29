import { Box, Grid, GridItem } from '@chakra-ui/react';
import { BookInfo, BookList } from '../../components/BookList/BookList';
import ReadingSummary from '../../components/ReadingSummary/ReadingSummary';
import { BookPhotoInfo, BookPhotos } from '../../components/BookPhotos/BookPhotos';

interface ReadingPageProps {
    props: {
        year: string;
        summary: string[];
        bookList: BookInfo[];
        audiobookList: BookInfo[];
        bookPhotos: BookPhotoInfo[];
    };
}

export default function ReadingPage({ props }: ReadingPageProps) {
    return (
        <Box minHeight='100vh' display='flex' flexDirection='column'>
            <Grid
                templateRows={{ base: 'repeat(3, auto)', md: 'repeat(3, auto)' }}
                templateColumns='repeat(4, 1fr)'
                gap={4}
                p={4}
                flex='1'
            >
                <GridItem colSpan={4} bg='#FC6A80'>
                    <ReadingSummary year={props.year} summary={props.summary} />
                </GridItem>
                <GridItem colSpan={4} bg='#FC8F77' display="flex" justifyContent="center">
                    <BookPhotos bookPhotos={props.bookPhotos} />
                </GridItem>
                <GridItem colSpan={4} bg='#FCE9A3'>
                    <BookList bookList={props.bookList} audiobookList={props.audiobookList} />
                </GridItem>
            </Grid>
        </Box>
    );
}
