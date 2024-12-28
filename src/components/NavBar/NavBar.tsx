import { Box, Button, Collapse, Flex, HStack, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Stack, useDisclosure, useOutsideClick } from '@chakra-ui/react';
import { ChevronDownIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useRef } from 'react';

const Links = [
    {name: 'About Me', href: '#about'}, 
    {name: 'Projects', href: '#projects'}, 
    {name: 'Resume', href: 'https://drive.google.com/file/d/1rKGamG9KabGKRMNc0fNrmIKE2Proa9OR/view?usp=sharing'}, 
    {name: 'Contact', href: '#contact'},
];

const MoreLinks = [
    {name: 'Reading', href: '/reading'}, // Add future pages here
];

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
    const isHashLink = href.startsWith('#');
    const isExternalLink = href.startsWith('http');

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (isHashLink) {
            event.preventDefault();
            const isOnHomePage = window.location.pathname === '/';
            if (!isOnHomePage) {
                // Save the target section in localStorage and redirect to home
                localStorage.setItem('scrollTarget', href);
                window.location.href = '/';
            } else {
                const target = document.querySelector(href);
                if (target) {
                    setTimeout(() => {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 300);
                }
            }
        }
        if (onClick) {
            onClick();
        }
    };

    return (
        <Button
            as='a'
            href={href}
            target={isExternalLink ? '_blank' : undefined}
            onClick={handleClick} 
            bg='#81E6D9'
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: '#E9D8FD',
            }}
        >
            {children}
        </Button>
    );
}

export default function NavBar() {
    const { isOpen, onToggle } = useDisclosure();
    const ref = useRef<HTMLDivElement>(null);
    
    useOutsideClick({
        ref: ref,
        handler: () => onToggle(),
    })

    const handleLinkClick = () => {
        if (isOpen) {
            onToggle();
            setTimeout(() => {
                const scrollTarget = localStorage.getItem('scrollTarget');
                if (scrollTarget) {
                    const targetElement = document.querySelector(scrollTarget);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    localStorage.removeItem('scrollTarget');
                }
            }, 200);
        }
    };

    return(
        <Box 
            bg='#FCEDCF' 
            px={4}
            position='sticky'
            top='0'
            zIndex='1000'
            boxShadow='md'
            ref={ref}
        >
            <Flex h={16} alignItems='center' justifyContent='space-between'>
                <Flex alignItems='center' gap='5'>
                    <Box 
                        as='a'
                        _hover={{
                            textDecoration: 'none',
                        }}
                        href='/'
                    >
                        <HStack as='nav' spacing={4}>
                            <Image
                                borderRadius='full'
                                boxSize={{ base: '40px', md: '50px' }}
                                objectFit='fill'
                                src={
                                    'https://odalys-ruano-personal-site-media.s3.us-east-1.amazonaws.com/profile+pic.jpeg'
                                }
                                alt='Odalys Ruano'
                            />
                            <Box fontSize={{ base: 'xl', md: '2xl' }} fontWeight='bold'>Odalys Ruano</Box>
                        </HStack>
                    </Box>
                </Flex>
                <HStack spacing={8} alignItems='center'>
                    <HStack as='nav' spacing={4} display={{ base: 'none', md: 'flex' }}>
                        {Links.map((link) => (
                            <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
                        ))}
                        <Menu>
                            <MenuButton as={Button} bg='#81E6D9' _hover={{ bg: '#E9D8FD' }}>
                                <HStack spacing={1}>
                                    <Box>More</Box>
                                    <ChevronDownIcon />
                                </HStack>
                            </MenuButton>
                            <MenuList minWidth='150px'>
                                {MoreLinks.map((link) => (
                                    <MenuItem as='a' href={link.href} key={link.name}>
                                        {link.name}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                    </HStack>
                    <IconButton
                        size='md'
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label='Open Menu'
                        display={{ md: 'none' }}
                        onClick={onToggle}
                    />
                </HStack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as='nav' spacing={4}>
                        {Links.map((link) => (
                            <NavLink 
                                key={link.name} 
                                href={link.href} 
                                onClick={handleLinkClick}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        {MoreLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                href={link.href}
                                onClick={handleLinkClick}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </Stack>
                </Box>
            </Collapse>
        </Box>
    );
}
