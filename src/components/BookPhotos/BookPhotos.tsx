import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Image } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export interface BookPhotoInfo { 
    href: string;
    altText: string;
}

interface BookPhotosProps {
    bookPhotos: BookPhotoInfo[];
}

export function BookPhotos({ bookPhotos }: BookPhotosProps) {

    const autoplayInterval = 3000;
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === bookPhotos.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? bookPhotos.length - 1 : prevIndex - 1));
    };

    // Autoplay functionality
    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNext();
        }, autoplayInterval);

        return () => clearInterval(intervalId); // Clear interval on unmount
    }, [autoplayInterval, currentIndex]);

    return (
        <Flex justify='center' alignItems='center' maxW='800px' mx='auto' mt='4' mb='4' position='relative' px={{ base: '4', md: '0' }}>
            {/* Previous Button */}
            <IconButton 
                aria-label='Previous image' 
                icon={<ChevronLeftIcon />} 
                onClick={handlePrevious} 
                size='sm' 
                bg='gray.600' 
                color='white' 
                _hover={{ bg: 'gray.700', opacity: 1 }} 
                opacity={0.4} 
                mr={{ base: '2', md: '4' }} 
            />

            {/* Image Container */}
            <Box position='relative' width='100%' maxWidth='800px' overflow='hidden' borderRadius='lg' aspectRatio={{ base: '1', md: 'auto' }}>
                <Image
                    src={bookPhotos[currentIndex].href}
                    alt={bookPhotos[currentIndex].altText}
                    objectFit='cover'
                    width='100%'
                    height={{ base: '100%', md: '400px' }}
                    borderRadius='25px'
                />
            </Box>

            {/* Next Button */}
            <IconButton 
                aria-label='Next image' 
                icon={<ChevronRightIcon />} 
                onClick={handleNext} 
                size='sm' 
                bg='gray.600' 
                color='white' 
                _hover={{ bg: 'gray.700', opacity: 1 }} 
                opacity={0.4} 
                ml={{ base: '2', md: '4' }} 
            />
        </Flex>
    );
}
