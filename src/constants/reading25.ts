const year = '2025';

const summary = `
    My reading goal for 2025
`.trim().split('\n\n');

const bookList = [
    {
        title: 'The Christmas Fix',
        author: 'Lucy Score',
    },
    {
        title: 'The Haunting Party',
        author: 'Lucy Foley',
    },
];

const audiobookList = [
    {
        title: 'Be Ready When the Luck Happens: A Memoir',
        author: 'Ina Garten',
    },
];

const bookPhotos = [
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/beautifulworld.jpeg',
        altText: 'Beautiful World, Where Are You',
    },
];

const tbrSection = [
    {
        content: 'My 2025 TBR stack is larger than I expected for the start of the year!',
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading25/tbrbookstack.jpeg',
        altText: "2025 TBR Book Stack"
    },
];

// should be of ReadingPageProps type
// see /src/pages/ReadingPage/ReadingPage.tsx
export default {
    year, 
    summary, 
    bookList, 
    audiobookList,
    bookPhotos,
    tbrSection,
};
