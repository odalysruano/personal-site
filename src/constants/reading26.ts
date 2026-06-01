
import { BookInfo } from '../components/BookList/BookList';

const year = '2026';

const summary = [
    `Welcome to my 2026 reading journey! This year, I'm focusing on a mix of genres and formats.`,
    `I'm excited to track my progress with this new interactive gallery format.`,
];

export type Genre =
    | 'Literary Fiction'
    | 'Historical Fiction'
    | 'Surrealist Fiction'
    | 'Sci-Fi'
    | 'Non-Fiction'
    | 'Thriller'
    | 'Contemporary Romance'
    | 'Romantic Comedy'
    | 'Fantasy'
    | 'Magical Realism'
    | 'Family Drama';

export interface BookGalleryItem {
    title: string;
    author: string;
    // rating: number; // Rating out of 5
    genre: Genre[];
    format: 'Physical' | 'Audiobook';
    coverUrl: string;
    dateRead: string; // YYYY-MM-DD
}

export const bookGallery: BookGalleryItem[] = [
    {
        title: 'Westport',
        author: 'James Comey',
        genre: ['Thriller'],
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/westport.jpeg',
        dateRead: '2026-01-11',
    },
    {
        title: 'Glaciers',
        author: 'Alexis M. Smith',
        genre: ['Literary Fiction'],
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/glaciers.jpeg',
        dateRead: '2026-01-13',
    },
    {
        title: 'Reminders of Him',
        author: 'Colleen Hoover',
        genre: ['Contemporary Romance'],
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/remindersofhim.jpeg',
        dateRead: '2026-01-17',
    },
    {
        title: 'Blob: A Love Story',
        author: 'Maggie Su',
        genre: ['Literary Fiction', 'Surrealist Fiction', 'Magical Realism'],
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/blob.jpeg',
        dateRead: '2026-01-21',
    },
    {
        title: 'The Perfect Divorce',
        author: 'Jeneva Rose',
        genre: ['Thriller'],
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/theperfectdivorce.jpeg',
        dateRead: '2026-01-25',
    },
    {
        title: 'The Nightingale',
        author: 'Kristin Hannah',
        genre: ['Historical Fiction'],
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/thenightingale.jpeg',
        dateRead: '2026-01-31',
    },
    {
        title: 'Expiration Dates: A Novel',
        author: 'Rebecca Serle',
        genre: ['Contemporary Romance', 'Magical Realism'],
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/expirationdates.jpeg',
        dateRead: '2026-02-04',
    },
    {
        title: 'Small Things Like These',
        author: 'Claire Keegan',
        genre: ['Historical Fiction'],
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/smallthingslikethis.jpeg',
        dateRead: '2026-02-06',
    },
    {
        title: 'Soil',
        author: 'Camille Dungy',
        genre: ['Non-Fiction'],
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/soil.jpeg',
        dateRead: '2026-02-10',
    },
    {
        title: 'I Who Have Never Known Men',
        author: 'Jacqueline Harpman',
        genre: ['Sci-Fi'],
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/iwhohaveneverknownmen.jpeg',
        dateRead: '2026-02-25',
    },
    {
        title: 'The Hearing Trumpet',
        author: 'Leonora Carrington',
        genre: ['Surrealist Fiction'],
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/thehearingtrumpet.jpeg',
        dateRead: '2026-03-04',
    },
    {
        title: 'Project Hail Mary',
        author: 'Andy Weir',
        genre: ['Sci-Fi'],
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/projecthailmary.jpeg',
        dateRead: '2026-03-25',
    },
    {
        title: 'Funny Story',
        author: 'Emily Henry',
        genre: ['Contemporary Romance', 'Romantic Comedy'],
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/funnystory.jpeg',
        dateRead: '2026-04-01',
    },
    {
        title: 'Lost Lambs',
        author: 'Madeline Cash',
        genre: ['Literary Fiction', 'Family Drama'],
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/lostlambs.jpeg',
        dateRead: '2026-04-09',
    },
    {
        title: 'The Happy Couple',
        author: 'Naoise Dolan',
        genre: ['Literary Fiction'],
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/thehappycouple.jpeg',
        dateRead: '2026-04-15',
    },
    {
        title: 'The Hearing Test: A Novel',
        author: 'Eliza Barry Callahan',
        genre: ['Literary Fiction'],
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/thehearingtest.jpeg',
        dateRead: '2026-04-17',
    },
    {
        title: 'Harry Potter and the Order of the Phoenix',
        author: 'J. K. Rowling',
        genre: ['Fantasy'],
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/harrypotterandtheorder.jpeg',
        dateRead: '2026-05-05',
    },
    {
        title: 'Best Offer Wins: A Novel',
        author: 'Marisa Kashino',
        genre: ['Thriller'],
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/bestofferwins.jpeg',
        dateRead: '2026-05-10',
    },
    {
        title: `Margo's Got Money Troubles`,
        author: 'Rufi Thorpe',
        genre: ['Literary Fiction'],
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/margosgotmoneytroubles.jpeg',
        dateRead: '2026-05-13',
    },
    {
        title: 'A Novel Love Story',
        author: 'Ashley Poston',
        genre: ['Contemporary Romance', 'Magical Realism'],
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/anovellovestory.jpeg',
        dateRead: '2026-05-19',
    },
    {
        title: 'Heart the Lover',
        author: 'Lily King',
        genre: ['Literary Fiction'],
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/heartthelover.jpeg',
        dateRead: '2026-05-22',
    },
    {
        title: 'Hello Beautiful',
        author: 'Ann Napolitano',
        genre: ['Literary Fiction', 'Family Drama'],
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/hellobeautiful.jpeg',
        dateRead: '2026-05-29',
    },
    {
        title: 'Most Ardently Yours',
        author: 'Freya Sampson',
        genre: ['Romantic Comedy', 'Magical Realism'],
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/mostardentlyyours.jpeg',
        dateRead: '2026-05-31',
    },
];


// Keep original structures for compatibility if needed elsewhere, but they can be empty.
const bookList: BookInfo[] = [];
const audiobookList: BookInfo[] = [];

export default {
    year,
    summary,
    bookGallery,
    bookList,
    audiobookList,
};
