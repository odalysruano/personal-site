import { Heading } from "@chakra-ui/react";

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
    <Heading as="h2" size="xl" mb={6} textAlign="center" color="brand.500">
        {children}
    </Heading>
);

export default SectionHeading;
