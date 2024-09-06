import { Project } from '../components/Projects/Projects';

export const projects: Project[] = [
    {
        name: "MySousChef",
        techStack: "JavaScript, HTML, CSS, Material UI, RapidAPI, MongoDB/Mongoose, Express, React, Node, AWS CodeBuild, AWS CodePipeline, AWS EC2, AWS Elastic Beanstalk",
        summary: 
            `I designed MySousChef to be your digital kitchen companion, helping to simplify meal planning and cooking. 
            This intuitive app allows you to inventory your pantry items and effortlessly discover recipes you can create 
            with ingredients you already have at home.

            To enhance the app's functionality, I integrated an external REST API from Rapid API, enabling users to search 
            for ingredients to add to "My Pantry". Additionally, I thoroughly enjoyed leveraging the Material UI React.js 
            component library to design a sleek and responsive front-end interface, making the user experience as seamless as 
            possible.
            
            I also learned to utilize AWS services, including AWS CodeBuild, AWS CodePipeline, AWS EC2, and AWS Elastic Beanstalk, 
            to automate deployment of the app, ensuring reliable and scalable operation in the cloud.`,
        gitHubLink: "https://github.com/odalysruano/mysouschef",
        appLink: "http://prod.eba-zjpd9z52.us-east-1.elasticbeanstalk.com/",
        media: "https://odalys-ruano-personal-site-media.s3.amazonaws.com/MySousChef.mp4",
        poster: "https://odalys-ruano-personal-site-media.s3.amazonaws.com/myssouschef-thumbnail.png",
    },
    {
        name: "FitHub",
        techStack: "Python, JavaScript, HTML, CSS, Materialize, PostgreSQL, Django, AWS CodeBuild, AWS CodePipeline, AWS EC2, AWS Elastic Beanstalk, AWS S3",
        summary: 
            `I created FitHub, a fitness app designed to track fitness goals, exercise routines, and home equipment inventory. 
            Developing this full-stack Django app allowed me to perform CRUD operations on a PostgreSQL database and make 
            REST API calls seamlessly. I thoroughly enjoyed designing the frontend, leveraging Materialize CSS's pre-built 
            components and responsive grid system to craft visually appealing and mobile-friendly user interfaces. 
            The app was deployed using AWS Elastic Beanstalk and the same CI/CD framework I utilized for MySousChef, ensuring smooth 
            deployment.`,
        gitHubLink: "https://github.com/odalysruano/fithub-app",
        appLink: "http://fithub.us-east-1.elasticbeanstalk.com/",
        media: "https://odalys-ruano-personal-site-media.s3.amazonaws.com/FitHub.mp4",
        poster: "https://odalys-ruano-personal-site-media.s3.amazonaws.com/fithub-thumbnail.png",
    },
    {
        name: "Personal Website",
        techStack: "Typescript, React, ChakraUI, HTML, CSS, AWS Route 53, AWS S3, AWS CodePipeline, AWS CloudFront, AWS Certificate Manager (ACM)",
        summary: 
            `OdalysRuano.com (the site you're on now!) is a personal portfolio website I developed to showcase my career journey 
            and experience as a full-stack software engineer.
            
            I utilized the Chakra UI framework, learning its comprehensive component library to design a modern, responsive interface. 
            The entire site is built using TypeScript and React, allowing for strong type safety and scalable front-end development. 

            In addition to the current sections, I plan to expand the site by adding more personal pages, such as a reading list 
            and a travel photography section, to reflect my broader interests. The site is hosted using AWS services, with Route 53 
            managing domain routing, ACM managing the SSL certificate, CloudFront handling traffic, S3 providing static site hosting, 
            and CodePipeline automating the deployment process.`,
        gitHubLink: "https://github.com/odalysruano/personal-site",
    },
    {
        name: "GA Marketplace",
        techStack: "JavaScript, HTML, CSS, EJS, MongoDB/Mongoose, Express.js, Passport.js, Heroku",
        summary: 
            `In collaboration with a team of four developers I developed GA Marketplace, an online platform where users can 
            sell clothing from their personal 'shop' or buy from others. I took on a backend engineer role; designing the 
            model schemas and overall page structure, utilizing three data entities, and implementing OAuth authentication. 
            I also took on the role of GitHub manager, ensuring the project stayed on track and performing code reviews to 
            maintain quality. Overall, I authored backend APIs, contributing 16 commits and adding 1,687 lines of code, making 
            the most significant contributions to the project.`,
        gitHubLink: "https://github.com/odalysruano/ga-marketplace",
        appLink: "https://arcane-meadow-90413-3bd59a11fb6a.herokuapp.com/",
    },
    {
        name: "Eras Memory Game",
        techStack: "JavaScript, HTML, CSS",
        summary: 
            `I created the Eras Memory Game, a Taylor Swift concert tour-inspired version of the classic 'Memory' matching game. 
            Players are challenged to uncover all matching pairs of cards within 60 seconds. Each card features album cover art 
            from Taylor Swift's 10 albums, with re-recorded albums showcasing the 'Taylor's Version' covers. I engineered the 
            game logic to include matching mechanics, time constraints, and state transitions, adding an exciting layer of challenge 
            for the player. The game's design celebrates the 'Eras Tour,' blending creativity with engaging gameplay.`,
        gitHubLink: "https://github.com/odalysruano/eras-memory-game",
        appLink: "https://odalysruano.github.io/eras-memory-game/",
        media: "https://odalys-ruano-personal-site-media.s3.amazonaws.com/ERAS+MEMORY+GAME.mp4",
        poster: "https://odalys-ruano-personal-site-media.s3.amazonaws.com/erasmemory-thumbnail.png",
    },
]
