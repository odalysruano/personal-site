import { Box, Button, Collapse, Flex, HStack, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Stack, useDisclosure, useOutsideClick } from '@chakra-ui/react';
import { ChevronDownIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useRef } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Links = [
    {name: 'Memify', href: '/memify'},
    {name: 'My Career', href: '/career'},
    {name: 'My Work', href: '/work'},
    {name: 'Contact', href: '#contact'},
];

const MoreLinks = [
    {name: 'Reading Blog', href: '/reading2025'},
];

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
    const isInternal = href.startsWith('/');
    const isHashLink = href.startsWith('#');
    const navigate = useNavigate(); // Use the navigate hook for routing

    // Base button styles, separated from the click handler to prevent conflicts
    const buttonStyleProps = {
        bg: '#81E6D9',
        px: 2,
        py: 1,
        rounded: 'md',
        _hover: {
            textDecoration: 'none',
            bg: '#E9D8FD',
        },
    };

    // Use React Router's Link for internal navigation to prevent page reloads
    if (isInternal) {
        return (
            <Button as={RouterLink} to={href} onClick={onClick} {...buttonStyleProps}>
                {children}
            </Button>
        );
    }
    
    // Handle hash links for smooth scrolling or navigating home first
    if (isHashLink) {
        const handleHashClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            const isOnHomePage = window.location.pathname === '/';

            if (isOnHomePage) {
                // If on the homepage, just scroll
                const id = href.substring(1);
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                // If on another page, save target and navigate to homepage
                localStorage.setItem('scrollTarget', href);
                navigate('/');
            }

            if (onClick) onClick(); // Close mobile menu if open
        };
        
        return (
            <Button as='a' href={href} onClick={handleHashClick} {...buttonStyleProps}>
                {children}
            </Button>
        );
    }

    // Default to a standard external link
    return (
        <Button as='a' href={href} target='_blank' onClick={onClick} {...buttonStyleProps}>
            {children}
        </Button>
    );
}

export default function NavBar() {
    const { isOpen, onToggle } = useDisclosure();
    const ref = useRef<HTMLDivElement>(null);
    
    useOutsideClick({
        ref: ref,
        handler: () => {
            if (isOpen) {
                onToggle();
            }
        },
    });

    const handleLinkClick = () => {
        if (isOpen) {
            onToggle();
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
                        as={RouterLink} // Use RouterLink for the home button
                        to='/'
                        _hover={{
                            textDecoration: 'none',
                        }}
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
                                    <MenuItem as={RouterLink} to={link.href} key={link.name}>
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
