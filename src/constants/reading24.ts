const year = '2024';

const summary = `
    My reading goal for 2024 is to complete 36 books, aiming for around three each month. I didn't track my reading last year, but 
    I'm fairly certain I read fewer than 15 books in 2023—so setting this year's goal of 36 feels especially exciting. 2023 was a 
    challenging year, marked by deep career reflections and, ultimately, the decision to quit my job. While navigating that period, 
    I began considering how important it would be to reconnect with hobbies that bring me joy in the upcoming year. 
    Reading has always been a source of comfort, so in setting my 2024 goals, I leaned into it as a way to nurture that joy.

    I love the tactile act of turning pages, though you'll notice some audiobooks listed at the end of the page. Audiobooks are new 
    to me this year; while they're not my preferred way to experience a book, they're perfect for walks—especially if the book is 
    read by its author. I take bookish photos of each book I read, adding them to an Instagram highlight for my own tracking, and 
    thought I'd include those photos here too.

    Growing up, I've always loved books—reading, collecting, sharing reviews with anyone who'll listen, and escaping into new worlds. 
    I'm grateful to have found the time and space to devote to reading in 2024. Below is my 2024 reading list, featuring the books 
    I've completed so far this year, in the order I've read them.
`.trim().split('\n\n');

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
        title: 'The Fear Book: Facing Fear Once and for All',
        author: 'Cheri Huber',
    },
    {
        title: 'Happy Place',
        author: 'Emily Henry',
    },
    {
        title: 'The Defining Decade',
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
    {
        title: 'The Measure',
        author: 'Nikki Erlick',
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
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/housemaidsecret.jpeg',
        altText: `The Housemaid's Secret`,
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/tomorrow.jpeg',
        altText: 'Tomorrow, and Tomorrow, and Tomorrow',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/thelightwelost.jpeg',
        altText: 'The Light We Lost',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/happyplace.jpeg',
        altText: 'Happy Place',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/thedefiningdecade.jpeg',
        altText: 'The Defining Decade',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/allthedangerousthings.jpeg',
        altText: 'All the Dangerous Things',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/suchafunage.jpeg',
        altText: 'Such a Fun Age',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/myyearofrest.jpeg',
        altText: 'My Year of Rest and Relaxation',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/theperfectmarriage.jpeg',
        altText: 'The Perfect Marriage',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/meetmeatthelake.jpeg',
        altText: 'Meet Me at the Lake',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/thedinnerlist.jpeg',
        altText: 'The Dinner List',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/haveitoldyouthisalready.jpeg',
        altText: 'Have I Told You This Already?',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/badsummerpeople.jpeg',
        altText: 'Bad Summer People',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/thepaperpalace.jpeg',
        altText: 'The Paper Palace',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/tomlake.jpeg',
        altText: 'Tom Lake',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/sametimenextsummer.jpeg',
        altText: 'Same Time Next Summer',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/cryinginhmart.jpeg',
        altText: 'Crying in H Mart',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/thissummerwillbedifferent.jpeg',
        altText: 'This Summer Will Be Different',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/thealgebraofwealth.jpeg',
        altText: 'The Algebra of Wealth: A Simple Formula for Financial Security',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/themostfunweeverhad.jpeg',
        altText: 'The Most Fun We Ever Had',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/harrypotterandthesorcerersstone.jpeg',
        altText: `Harry Potter and the Sorcerer's Stone`,
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/wrongplacewrongtime.jpeg',
        altText: 'Wrong Place Wrong Time',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading24/centralparkwest.jpeg',
        altText: 'Central Park West: A Crime Novel',
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
