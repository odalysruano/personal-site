import React, { useEffect, useState } from 'react';
import mermaid from 'mermaid';
import { Box, useColorModeValue, Skeleton } from '@chakra-ui/react';

mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'loose',
    flowchart: {
        useMaxWidth: false,
        htmlLabels: true,
    }
});

interface MermaidDiagramProps {
    chart: string;
}

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart }) => {
    const [svg, setSvg] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const id = `mermaid-${Math.random().toString(36).substring(2, 11)}`;
    const theme = useColorModeValue('default', 'dark');

    useEffect(() => {
        mermaid.initialize({
            startOnLoad: false,
            theme: theme,
            flowchart: {
                useMaxWidth: false,
                htmlLabels: true,
            }
        });

        const renderChart = async () => {
            try {
                const { svg } = await mermaid.render(id, chart);
                setSvg(svg);
                setLoading(false);
            } catch (error) {
                console.error('Failed to render mermaid chart', error);
                setLoading(false);
            }
        };

        // Small timeout to ensure DOM is ready and to prevent flash
        const timer = setTimeout(() => {
            renderChart();
        }, 100);

        return () => clearTimeout(timer);
    }, [chart, theme, id]);

    return (
        <Box w="full" display="flex" justifyContent="center" overflowX="auto">
            {loading ? (
                <Skeleton height="300px" width="100%" borderRadius="lg" />
            ) : (
                <Box
                    width="100%"
                    dangerouslySetInnerHTML={{ __html: svg }}
                    sx={{
                        'svg': {
                            maxWidth: 'none !important',
                            width: '100% !important',
                            height: 'auto',
                        }
                    }}
                />
            )}
        </Box>
    );
};

export default MermaidDiagram;
