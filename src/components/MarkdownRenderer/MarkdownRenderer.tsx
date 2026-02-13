import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Heading, Text, UnorderedList, OrderedList, ListItem, Link, Divider, Code } from '@chakra-ui/react';

interface MarkdownRendererProps {
    content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
    return (
        <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
                h1: ({ ...props }) => <Heading as="h1" size="2xl" mt={8} mb={4} {...props} />,
                h2: ({ ...props }) => <Heading as="h2" size="xl" mt={6} mb={3} {...props} />,
                h3: ({ ...props }) => <Heading as="h3" size="lg" mt={4} mb={2} {...props} />,
                p: ({ ...props }) => <Text mb={4} lineHeight="tall" fontSize="lg" {...props} />,
                ul: ({ ...props }) => <UnorderedList mb={4} pl={4} {...props} />,
                ol: ({ ...props }) => <OrderedList mb={4} pl={4} {...props} />,
                li: ({ ...props }) => <ListItem mb={2} fontSize="lg" {...props} />,
                a: ({ ...props }) => <Link color="blue.500" isExternal {...props} />,
                hr: ({ ...props }) => <Divider my={8} {...props} />,
                /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                code({ inline, className, children, ...props }: { inline?: boolean; className?: string; children?: React.ReactNode;[key: string]: any }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                        <SyntaxHighlighter
                            style={vscDarkPlus}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                        >
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    ) : (
                        <Code colorScheme="gray" fontSize="0.9em" px={1} py={0.5} borderRadius="sm" {...props}>
                            {children}
                        </Code>
                    );
                },
            }}
        >
            {content}
        </ReactMarkdown>
    );
};

export default MarkdownRenderer;
