// --- TYPE DEFINITIONS ---
export type ExperienceItem = {
    role: string;
    company: string;
    date: string;
    points: string[];
    keyTakeaway?: string;
    degree?: never; 
    institution?: never;
};

export type EducationItem = {
    degree: string;
    concentration?: string;
    institution: string;
    date: string;
    points?: never;
    role?: never;
    company?: never;
};

export type TimelineItemData = ExperienceItem | EducationItem;

// --- DATA ---
export const skills = {
    "Programming Languages": ["Python", "JavaScript/Typescript", "HTML", "CSS", "SQL", "Bash"],
    "Frameworks": ["FastAPI", "Next.js", "AWS CDK", "Django", "React.js", "Express.js", "EJS", "Node.js", "Jquery"],
    "UI Frameworks": ["shadcn/ui", "Tailwind CSS", "Bootstrap", "Materialize", "Material UI", "Chakra UI"],
    "Databases": ["AWS Aurora/RDS (PostgreSQL)", "AWS Neptune", "MongoDB (NoSQL)"],
    "CI/CD": ["AWS CodeBuild", "AWS CodePipeline"],
    "Cloud": ["AWS EC2", "AWS Elastic Beanstalk", "AWS IAM", "AWS S3", "AWS Route 53", "AWS CloudFront", "AWS Lambda", "AWS ECS"],
    "APIs": ["AWS Bedrock", "Clerk (Auth)", "Google OAuth", "Google Cloud APIs"],
    "Other": ["REST APIs", "JSON", "Git", "Jira", "Confluence", "Salesforce", "Trello", "Airtable", "JWT", "AWS Certificate Manager", "Postman", "Docker"]
};

export const experience: ExperienceItem[] = [
    {
        role: "Founding Software Engineer",
        company: "Memify.ai",
        date: "Nov 2024 - Current",
        points: [
            "Designed and built a full-stack AI platform that augments traditional chat with secure, user-specific long-term memory; utilizing a custom memory engine using a graph database.",
            "Utilized FastAPI (gRPC, HTTP), Next.js, and CDK managed AWS components (Bedrock, ECS, Lambda, Neptune, RDS) to build a scalable system of microservices.",
            "Implemented a bespoke chunking algorithm to handle large documents, optimizing for semantic coherence and efficient retrieval in the memory engine.",
            "Created and maintained a document management solution that empowers users to collect, verify, and manage their own personalized information for improved LLM interactions; implementing GoogleDrive API and direct file upload from computer.",
            "Enforced data privacy features on all user data to ensure full isolation and encryption in AWS S3."
        ]
    },
    {
        role: "Software Engineering Immersive Fellow",
        company: "General Assembly",
        date: "Jan 2024 - Apr 2024",
        points: [
            "Made the deliberate decision to pivot my career, immersing myself in a rigorous, 420+ hour program to build a deep, practical foundation in full-stack software development.",
            "Translated my passion for solving customer problems into a technical skill set, focusing on building robust, user-centric applications from the ground up.",
            "Developed and deployed multiple full-stack applications, solidifying my expertise in technologies like React, Node.js, Python, and AWS, preparing me for a professional engineering environment."
        ]
    },
    {
        role: "Customer Success & Account Manager",
        company: "Justworks",
        date: "Oct 2021 - Dec 2023",
        points: [
            "Managed customer relationships with a book of 70+ accounts totaling over $1.2 million in ARR.",
            "Led the department's new hire training program as the Project Manager for the CS New Hire Training Committee.",
            "Played an integral role in departmental reorganization and internal process optimization.",
            "Evaluated new CRM tools, offering biweekly feedback to internal product teams and management."
        ],
        keyTakeaway: "This role solidified my ability to empathize with user frustrations and translate complex customer feedback into actionable insights for product and engineering teams."
    },
    {
        role: "Account Director & Manager",
        company: "Business Development Institute (BDI)",
        date: "Jun 2020 - Sep 2021",
        points: [
            "Promoted twice within 18 months for outstanding performance on thought leadership event management and client success.",
            "Planned and executed 48 live and virtual events for 20 B2B technology clients and partners.",
            "Directed a team of 3 remote, virtual assistants, leading training sessions and prioritizing team tasks."
        ],
        keyTakeaway: "I honed my project management and leadership skills, learning how to manage timelines, delegate tasks, and ensure cross-functional alignment—all critical for effective software development."
    },
    {
        role: "Development and Administrative Coordinator",
        company: "The TEAK Fellowship",
        date: "Jun 2018 - May 2019",
        points: [
            "Administered the donor communication process via Conga Salesforce application.",
            "Responsible for the maintenance of donor database via Salesforce CRM platform.",
            "Lead coordinator for TEAK’s 20th Anniversary Gala at the Mandarin Oriental in New York."
        ],
        keyTakeaway: "This was my first hands-on experience managing a critical data system, which sparked my interest in how well-structured data can empower an organization."
    }
];

export const education: EducationItem[] = [
    {
        degree: "Software Engineering Immersive Certificate",
        institution: "General Assembly",
        date: "Apr 2024"
    },
    {
        degree: "Emerging Leaders Seminar",
        institution: "Yale School of Management",
        date: "Jun 2021"
    },
    {
        degree: "Bachelor of Science in Business",
        concentration: "Marketing and Sustainable Business",
        institution: "New York University: Leonard N. Stern School of Business",
        date: "May 2018"
    }
];
