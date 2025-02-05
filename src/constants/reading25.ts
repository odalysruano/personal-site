const year = '2025';

const summary = `
    —January 18, 2025—

    I'm really excited to set my 2025 reading goal at 48 books! I enjoyed picking up so many new books last year, and there are 
    already so many more books that I know I want to read. You can find my 2025 reading list at the bottom of this page, where 
    I'll be adding books in the order I complete them.

    As I'm writing this, I've finished reading "The Christmas Fix" by Lucy Score and "The Hunting Party" by Lucy Foley. "The 
    Christmas Fix" was gifted to me for Christmas. I'd never read a book by Lucy Score and did not have any idea what I was in 
    store for. It's a romance novel where hurricane disaster relief plus HGTV-like reality show drama meets spicy small-town romance. 
    There was a good amount of plot development setup in the first half of the book, followed by a sudden level-ten dial-up of 
    romantic plotting toward the end.

    I also enjoyed reading the fast-paced thriller, "The Hunting Party" by Lucy Foley. I previously enjoyed reading Foley's "The 
    Guest List". After "The Guest List", I knew I could count on Foley as one of my go-to thriller authors, and "The Hunting Party" 
    did not disappoint. The plot of this book occurs over less than a week and is set around New Year's—it was timely to be reading 
    this at the start of the year. A group of friends who met at Oxford reunite for their annual holiday getaway at a remote 
    location when secrets, tension, and murder fall upon them. The book had me guessing until the very end about what exactly led 
    to the murder, who the victim was, and who did it.

    Currently, I'm also listening to "Be Ready When the Luck Happens: A Memoir" by Ina Garten. I'm thoroughly enjoying listening to 
    Ina tell her entire journey to where she is in life today. In general, I enjoy memoirs to learn personal stories and be reminded 
    of the challenges we all face, and how individuals almost always come out stronger and wiser on the other end. I love cooking, 
    the Food Network, and hearing about personal career journeys, so I am thoroughly enjoying this book. I'm convinced I now have 
    to look more into the Barefoot Contessa's cookbooks, television show, and more. I'm even more convinced I need to plan my return 
    trip to France after hearing about Ina's Paris adventure of a lifetime.

    Up next, I'm about to start reading the third installment in The Housemaid series by Freida McFadden, "The Housemaid is 
    Watching". I just picked up the copy I had on hold at the library. Once I finish this book, maybe I'll finally pick up a book 
    off my TBR stack!
`.trim().split('\n\n');

const bookList = [
    {
        title: 'The Christmas Fix',
        author: 'Lucy Score',
    },
    {
        title: 'The Hunting Party',
        author: 'Lucy Foley',
    },
    {
        title: 'The Housemaid is Watching',
        author: 'Freida McFadden',
    },
];

const audiobookList = [
    {
        title: 'Be Ready When the Luck Happens: A Memoir',
        author: 'Ina Garten',
    },
    {
        title: 'The Woman in Me',
        author: 'Britney Spears',
    },
];

const bookPhotos = [
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading25/thechristmasfix.jpeg',
        altText: 'The Christmas Fix',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading25/thehuntingparty.jpeg',
        altText: 'The Hunting Party',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading25/bereadywhentheluckhappens.jpeg',
        altText: 'Be Ready When the Luck Happens: A Memoir',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading25/thehousemaidiswatching.jpeg',
        altText: 'The Housemaid is Watching',
    },
];

const tbrSection = [
    {
        content: `
            My 2025 TBR stack is larger than I expected for the start of the year! I've collected most of these books over a number 
            of trips to different bookstores. I'm looking forward to reading my first book by Abby Jimenez (borrowed from my sister!)—I 
            don't know what's taken me so long! I'm going to continue reading the Harry Potter series; it's my first time reading 
            the actual books. I'm also looking forward to reading the follow-up to the charming Japanese novel "Days at the Morisaki 
            Bookshop" by Satoshi Yagisawa, titled "More Days at the Morisaki Bookshop". I picked up "The Vanishing Half" at a NYC 
            BookTok bus event in December. My friend and I waited over an hour in the freezing cold to snag a free copy of our 
            choice from a selection of popular books on TikTok! My recent obsession with The Sopranos television drama series, and 
            my reading of "Central Park West" by James Comey, prompted me to pick up a copy of "The Godfather". I'll be sure to 
            follow up my reading with a screening of the movies as well. I can't wait to get into these and the other books I've 
            been collecting!`,
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
