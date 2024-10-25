const year = '2024';

const summary= `I set a goal to read 36 books in 2024. I've always had a love for books. Reading books, 
                    collecting them, sharing my reviews with anyone who will listen to me recount the feelings that 
                    come up while building a new world in your imagination when starting a new book.`;

const bookList = [
    {
        title: 'Beautiful World, Where Are You',
        author: 'Sally Rooney',
    },
    {
        title: 'Once More with Feeling: A Novel',
        author: 'Elissa Sussman',
    },
    {
        title: 'Adelaide: A Novel',
        author: 'Genevieve Wheeler',
    },
    {
        title: `The Housemaid's Secret`,
        author: 'Freida McFadden',
    },
    {
        title: 'Tomorrow, and Tomorrow, and Tomorrow',
        author: 'Gabrielle Zevin',
    },
    {
        title: 'The Light We Lost',
        author: 'Jill Santopolo',
    },
    {
        title: 'Happy Place',
        author: 'Emily Henry',
    },
    {
        title: 'The Defining Decade: Why Your Twenties Matter—And How to Make the Most of Them Now',
        author: 'Meg Jay',
    },
    {
        title: 'All the Dangerous Things',
        author: 'Stacy Willingham',
    },
    {
        title: 'Such a Fun Age',
        author: 'Kiley Reid',
    },
    {
        title: 'My Year of Rest and Relaxation',
        author: 'Ottessa Moshfegh',
    },
    {
        title: 'The Perfect Marriage',
        author: 'Jeneva Rose',
    },
    {
        title: 'Meet Me at the Lake',
        author: 'Carley Fortune',
    },
    {
        title: 'The Dinner List',
        author: 'Rebecca Serle',
    },
    {
        title: 'Have I Told You This Already?',
        author: 'Lauren Graham',
    },
    {
        title: 'Bad Summer People',
        author: 'Emma Rosenblum',
    },
    {
        title: 'The Paper Palace',
        author: 'Miranda Cowley Heller',
    },
    {
        title: 'Tom Lake',
        author: 'Ann Patchett',
    },
    {
        title: 'Same Time Next Summer',
        author: 'Annabel Monaghan',
    },
    {
        title: 'Crying in H Mart',
        author: 'Michelle Zauner',
    },
    {
        title: 'This Summer Will Be Different',
        author: 'Carley Fortune',
    },
    {
        title: 'The Algebra of Wealth: A Simple Formula for Financial Security',
        author: 'Scott Galloway',
    },
    {
        title: 'The Most Fun We Ever Had',
        author: 'Claire Lombardo',
    },
    {
        title: `Harry Potter and the Sorcerer's Stone`,
        author: 'J. K. Rowling',
    },
    {
        title: 'Wrong Place Wrong Time',
        author: 'Gillian McAllister',
    },
    {
        title: 'Central Park West: A Crime Novel',
        author: 'James Comey',
    },
];

const audiobookList = [
    {
        title: 'Spare',
        author: 'Prince Harry, Duke of Sussex',
    },
    {
        title: 'Bossypants',
        author: 'Tina Fey',
    },
    {
        title: 'The Third Gilmore Girl: A Memoir',
        author: 'Kelly Bishop',
    },
];

const bookPhotos = [
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/beautifulworld.jpeg',
        altText: 'Beautiful World, Where Are You',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/oncemorewithfeeling.jpeg',
        altText: 'Once More With Feeling',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/adelaide.jpeg',
        altText: 'Adelaide',
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
};
