
import { BookInfo } from '../components/BookList/BookList';

const year = '2026';

const summary = [
    `Welcome to my 2026 reading journey! This year, I'm focusing on a mix of genres and formats.`,
    `I'm excited to track my progress with this new interactive gallery format.`,
];

export interface BookGalleryItem {
    title: string;
    author: string;
    // rating: number; // Rating out of 5
    genre: 'Literary Fiction' | 'Historical Fiction' | 'Surrealist Fiction' | 'Sci-Fi' | 'Non-Fiction' | 'Thriller' | 'Contemporary Romance';
    format: 'Physical' | 'Audiobook';
    coverUrl: string;
    dateRead: string; // YYYY-MM-DD
}

export const bookGallery: BookGalleryItem[] = [
    {
        title: 'Westport',
        author: 'James Comey',
        genre: 'Thriller',
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/westport.jpeg',
        dateRead: '2026-01-11',
    },
    {
        title: 'Glaciers',
        author: 'Alexis M. Smith',
        genre: 'Literary Fiction',
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/glaciers.jpeg',
        dateRead: '2026-01-13',
    },
    {
        title: 'Reminders of Him',
        author: 'Colleen Hoover',
        genre: 'Contemporary Romance',
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/remindersofhim.jpeg',
        dateRead: '2026-01-17',
    },
    {
        title: 'Blob: A Love Story',
        author: 'Maggie Su',
        genre: 'Literary Fiction',
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/blob.jpeg',
        dateRead: '2026-01-21',
    },
    {
        title: 'The Perfect Divorce',
        author: 'Jeneva Rose',
        genre: 'Thriller',
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/theperfectdivorce.jpeg',
        dateRead: '2026-01-25',
    },
    {
        title: 'The Nightingale',
        author: 'Kristin Hannah',
        genre: 'Historical Fiction',
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/thenightingale.jpeg',
        dateRead: '2026-01-31',
    },
    {
        title: 'Expiration Dates: A Novel',
        author: 'Rebecca Serle',
        genre: 'Contemporary Romance',
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/expirationdates.jpeg',
        dateRead: '2026-02-04',
    },
    {
        title: 'Small Things Like These',
        author: 'Claire Keegan',
        genre: 'Historical Fiction',
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/smallthingslikethis.jpeg',
        dateRead: '2026-02-06',
    },
    {
        title: 'Soil',
        author: 'Camille Dungy',
        genre: 'Non-Fiction',
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/soil.jpeg',
        dateRead: '2026-02-10',
    },
    {
        title: 'I Who Have Never Known Men',
        author: 'Jacqueline Harpman',
        genre: 'Sci-Fi',
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/iwhohaveneverknownmen.jpeg',
        dateRead: '2026-02-25',
    },
    {
        title: 'The Hearing Trumpet',
        author: 'Leonora Carrington',
        genre: 'Surrealist Fiction',
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/thehearingtrumpet.jpeg',
        dateRead: '2026-03-04',
    },
    {
        title: 'Project Hail Mary',
        author: 'Andy Weir',
        genre: 'Sci-Fi',
        format: 'Physical',
        coverUrl: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading26/projecthailmary.jpeg',
        dateRead: '2026-03-25',
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
