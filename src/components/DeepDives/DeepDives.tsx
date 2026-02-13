import { Box, SimpleGrid } from "@chakra-ui/react";
import { MdCloud, MdCode, MdSettings, MdTimeline } from "react-icons/md";
import DeepDiveCard from "../DeepDiveCard/DeepDiveCard";
import SectionHeading from "../SectionHeading/SectionHeading";
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

const DeepDives = () => (
    <Box py={10} id="technical-deep-dives">
        <SectionHeading>Technical Deep Dives</SectionHeading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {articlesData.map((article: Article) => {
                const IconComponent = iconMap[article.icon] || MdCode;
                return (
                    <DeepDiveCard
                        key={article.slug}
                        title={article.title}
                        description={article.description}
                        icon={IconComponent}
                        color={article.color}
                        tags={article.tags}
                        slug={article.slug}
                    />
                );
            })}
        </SimpleGrid>
    </Box>
);

export default DeepDives;
