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

    —February 21, 2025—

    This winter has provided perfect moments where I can settle into my cozy apartment on a snowy day with a book! I closed out 
    January with mixed feelings about "The Housemaid is Watching." While it provided closure for the characters I'd followed through 
    the series, the plot was not what I expected for the characters now fifteen years into the future, and I didn't think it was as 
    thrilling as the first two installments. I also finally completed Britney Spears' memoir, which offered a fascinating glimpse 
    into her journey and the challenges she's faced in becoming the artist and person she is today.

    February began with a literary classic—Oscar Wilde's "The Picture of Dorian Gray." I purchased this haunting novel during my 
    travels in Ireland last April. I was intrigued and curious knowing it was Wilde's only full-length novel. The Victorian prose 
    was challenging to follow at first, but I soon found myself captivated by the dark psychological portrait Wilde paints of vanity 
    and moral corruption. What struck me most was how timeless the themes remain—our obsession with youth and beauty, and the often 
    hidden consequences of moral compromise.

    Next, I read "Atomic Habits" by James Clear. It's a book I've had since 2021, and I'm pretty familiar with the concepts of the 
    book. This was the first time I read it cover-to-cover, and I thoroughly enjoyed it. I think it's nice to pick up a book with 
    strategies to maintain good habits as we progress through the year. I set plenty of goals at the end of 2024, and I want 
    reminders and new strategies to consistently keep me on track. Clear's practical approach to building small habits that lead 
    to remarkable results resonated with me, especially his framework of making habits obvious, attractive, easy, and satisfying.

    In the spirit of February and Valentine's Day, I read "Everything I Know About Love" from my TBR list! This memoir by Dolly 
    Alderton was funny, heartfelt, and provided insights into friendships over time. Although I cannot even remotely compare my 
    experiences from my teen years to my late-twenties to those of Alderton, I thoroughly enjoyed learning about her completely 
    different experiences growing up and navigating love and friendships while realizing that many of the emotions and feelings 
    she's experienced still resemble mine in navigating the same sort of relationships in life. Her raw honesty about the messiness 
    of relationships and growing up in the digital age made this a perfect February read.

    To close out this lovey-dovey month, I've started reading "How to End a Love Story" by Yulin Kuang. I found out about this book 
    seeing that it was a Reese's Book Club pick, and I've always enjoyed the books on that list. I also read that Kuang is both the 
    adapting writer and director for the 'Beach Read' film and the screenwriter for the 'People We Meet On Vacation' film. Emily 
    Henry is one of my top contemporary romantic fiction authors, and I could not be more excited to read something from someone 
    so directly involved in the book-to-screen adaptations of Henry's books. "How to End a Love Story" follows two characters with 
    a tragic history who end up having to work together in Hollywood. When I read the blurb for the book, it reminded me a little of 
    "Romantic Comedy" (which I loved!) by Curtis Sittenfeld, in the sense that the story follows TV writers and there's potential 
    for romance between characters. So far, I'm hooked and I can't wait to see where the story takes our main characters.

    As February draws to a close, I'm delighted to see my 2025 reading challenge progressing nicely with eight books completed in 
    the first two months. The variety in my selections—from classic literature to self-improvement, from celebrity memoirs to 
    romantic comedies—reflects exactly what I love about reading: the ability to step into completely different worlds and 
    perspectives with each new book. I'm looking forward to what March brings to my bookshelf—maybe some picks from the Barnes & 
    Noble Book Festival?? Wink wink ;) Until next month's update, happy reading!
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
    {
        title: 'The Picture of Dorian Gray',
        author: 'Oscar Wilde',
    },
    {
        title: 'Atomic Habits',
        author: 'James Clear',
    },
    {
        title: 'Everything I Know About Love: A Memoir',
        author: 'Dolly Alderton',
    },
    {
        title: 'How to End a Love Story: A Novel',
        author: 'Yulin Kuang',
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
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading25/thewomaninme.jpeg',
        altText: 'The Woman in Me',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading25/thepictureofdoriangray.jpeg',
        altText: 'The Picture of Dorian Gray',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading25/atomichabits.jpeg',
        altText: 'Atomic Habits',
    },
    {
        href: 'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/reading25/everythingiknowaboutlove.jpeg',
        altText: 'Everything I Know About Love: A Memoir',
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
