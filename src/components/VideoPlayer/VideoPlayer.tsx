import { Box } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

interface VideoPlayerProps {
    src: string;
}

export default function VideoPlayer({ src }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (videoRef.current) {
                        if (entry.isIntersecting) {
                            videoRef.current.play();
                        } else {
                            videoRef.current.pause();
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <Box mt={4} mx='auto' maxW='800px'>
            <video
                ref={videoRef}
                src={src}
                width='100%'
                height='auto'
                loop
                muted
                controls={false}
            />
        </Box>
    );
}
