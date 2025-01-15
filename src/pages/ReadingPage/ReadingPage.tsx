import { Box, Grid, GridItem } from '@chakra-ui/react';
import { BookInfo, BookList } from '../../components/BookList/BookList';
import ReadingSummary from '../../components/ReadingSummary/ReadingSummary';
import { BookPhotoInfo, BookPhotos } from '../../components/BookPhotos/BookPhotos';
import { TBRSection, TBRContent } from '../../components/TBRSection/TBRSection';

interface ReadingPageProps {
    props: {
        year: string;
        summary: string[];
        bookList: BookInfo[];
        audiobookList: BookInfo[];
        bookPhotos: BookPhotoInfo[];
        tbrSection?: TBRContent[];
    };
}

export default function ReadingPage({ props }: ReadingPageProps) {
    // Calculate number of rows based on whether tbrSection exists
    const numRows = props.tbrSection ? 4 : 3;
    return (
        <Box minHeight='100vh' display='flex' flexDirection='column'>
            <Grid
                templateRows={{ base: `repeat(${numRows}, auto)`, md: `repeat(${numRows}, auto)` }}
                templateColumns='repeat(4, 1fr)'
                gap={4}
                p={4}
                flex='1'
            >
                <GridItem colSpan={4} bg='#FC6A80'>
                    <ReadingSummary year={props.year} summary={props.summary} />
                </GridItem>
                {!props.tbrSection && (
                    <GridItem colSpan={4} bg='#FC8F77' display="flex" justifyContent="center">
                        <BookPhotos bookPhotos={props.bookPhotos} />
                    </GridItem>
                )}
                {props.tbrSection && (
                    <GridItem colSpan={4} bg='#E6E6FA'>
                        <TBRSection tbrSection={props.tbrSection} year={props.year} />
                    </GridItem>
                )}
                <GridItem colSpan={4} bg='#FCE9A3'>
                    <BookList bookList={props.bookList} audiobookList={props.audiobookList} />
                </GridItem>
                {props.tbrSection && (
                    <GridItem colSpan={4} bg='#FC8F77' display="flex" justifyContent="center">
                        <BookPhotos bookPhotos={props.bookPhotos} />
                    </GridItem>
                )}
            </Grid>
        </Box>
    );
}
