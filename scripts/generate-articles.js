/* eslint-env node */
/* eslint-disable no-console, no-undef, @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const contentDir = path.join(__dirname, '../src/content/deep-dives');
const outputDir = path.join(__dirname, '../src/content');
const outputFile = path.join(outputDir, 'articles.json');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

function getArticles() {
    if (!fs.existsSync(contentDir)) {
        console.warn(`Content directory not found: ${contentDir}`);
        return [];
    }

    const files = fs.readdirSync(contentDir);
    const articles = files
        .filter(file => file.endsWith('.md'))
        .map(file => {
            const filePath = path.join(contentDir, file);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data, content } = matter(fileContent);
            const slug = file.replace('.md', '');

            return {
                id: slug,
                slug,
                ...data, // Spread frontmatter (title, description, etc.)
                content, // The markdown content
            };
        });

    return articles;
}

try {
    const articles = getArticles();
    fs.writeFileSync(outputFile, JSON.stringify(articles, null, 2));
    console.log(`Successfully generated ${articles.length} articles to ${outputFile}`);
} catch (error) {
    console.error('Error generating articles:', error);
    process.exit(1);
}
