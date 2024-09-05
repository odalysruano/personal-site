import { Box } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

interface VideoPlayerProps {
    src: string;
}

export default function VideoPlayer({ src }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const lastPauseTime = useRef<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Check if the screen size corresponds to a mobile device
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768); // You can adjust this threshold as needed
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    useEffect(() => {
        if (isMobile) return; // Disable autoplay on mobile

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (videoRef.current) {
                        if (entry.isIntersecting) {
                            const now = Date.now();
                            const timeSincePause = lastPauseTime.current ? now - lastPauseTime.current : 0;

                            // If more than 5 seconds have passed since the last pause, restart the video
                            if (timeSincePause > 5000) {
                                videoRef.current.currentTime = 0;
                            }
                            videoRef.current.play();
                        } else {
                            videoRef.current.pause();
                            lastPauseTime.current = Date.now();
                        }
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the element is visible
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, [isMobile]);

    return (
        <Box mt={4} mx='auto' maxW='800px'>
            <video
                ref={videoRef}
                src={src}
                width='100%'
                height='auto'
                loop
                muted
                controls={isMobile ? true : false} // Enable controls on mobile for manual play
            />
        </Box>
    );
}
