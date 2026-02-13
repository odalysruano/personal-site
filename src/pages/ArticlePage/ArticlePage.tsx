import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Heading, Badge, Button, Flex, Icon } from '@chakra-ui/react';
import { MdArrowBack, MdSettings, MdTimeline, MdCode, MdCloud } from 'react-icons/md';
import MarkdownRenderer from '../../components/MarkdownRenderer/MarkdownRenderer';
import { Article } from "../../types";
import articlesDataRaw from '../../content/articles.json';

const articlesData = articlesDataRaw as Article[];

// Icon mapping
const iconMap: { [key: string]: React.ElementType } = {
    MdSettings,
    MdTimeline,
    MdCode,
    MdCloud
};

const ArticlePage = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    // Find the article based on the slug
    const article = articlesData.find((a: Article) => a.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!article) {
        return (
            <Container maxW="container.md" py={20} textAlign="center">
                <Heading>Article Not Found</Heading>
                <Button mt={4} onClick={() => navigate('/memify')}>Back to Memify</Button>
            </Container>
        );
    }

    const IconComponent = iconMap[article.icon] || MdCode;

    return (
        <Box minH="100vh" py={20} bg="inherit">
            <Container maxW="container.lg">
                <Button
                    leftIcon={<MdArrowBack />}
                    variant="ghost"
                    mb={8}
                    onClick={() => {
                        navigate('/memify#technical-deep-dives');
                        // Small timeout to allow navigation to complete before scrolling
                        setTimeout(() => {
                            const element = document.getElementById('technical-deep-dives');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }, 100);
                    }}
                >
                    Back to Case Study
                </Button>

                <Flex align="center" mb={4}>
                    <Icon as={IconComponent} boxSize={8} color={article.color} mr={3} />
                    <Heading as="h1" size="2xl">{article.title}</Heading>
                </Flex>

                <Flex gap={2} mb={8} flexWrap="wrap">
                    {article.tags && article.tags.map((tag: string) => (
                        <Badge key={tag} colorScheme={article.color.split('.')[0]} fontSize="sm">
                            {tag}
                        </Badge>
                    ))}
                </Flex>

                <Box
                    bg="white"
                    _dark={{ bg: 'gray.800' }}
                    p={{ base: 6, md: 10 }}
                    borderRadius="2xl"
                    boxShadow="lg"
                    className="article-content"
                >
                    <MarkdownRenderer content={article.content} />
                </Box>
            </Container>
        </Box>
    );
};

export default ArticlePage;
