import { Box, Collapse, Flex, HStack, IconButton, Image, Stack, useDisclosure } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

interface Props {
    children: React.ReactNode
    href: string
}

const Links = [
    {name: 'About Me', href: '#about'}, 
    {name: 'Projects', href: '#projects'}, 
    {name: 'Resume', href: '#resume'}, 
    {name: 'Contact', href: '#contact'}
]

const NavLink = (props: Props) => {
    const { children, href } = props

    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: '#E9D8FD',
            }}
            href={href}>
            {children}
        </Box>
    )
}

export default function NavBar() {
    const { isOpen, onToggle } = useDisclosure()
    return(
        <>
            <Box 
                bg='#9AE6B4' 
                px={4}
                position='sticky'
                top='0'
                zIndex='1000'
                boxShadow="md"
            >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Flex alignItems={'center'} gap='5'>
                        <Box 
                            as="a" 
                            _hover={{
                                textDecoration: 'none',
                                bg: '#E9D8FD',
                            }}
                            href={'/'}
                        >
                            <HStack as={'nav'} spacing={4}>
                                <Image
                                    borderRadius='full'
                                    boxSize={{ base: '40px', md: '50px' }}
                                    objectFit='fill'
                                    src={
                                        'https://media.licdn.com/dms/image/v2/D4E03AQHPYE8JwyRy9A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709687145629?e=1730332800&v=beta&t=BS0RDcuXBt-n-mTlGkEBJrolgmq7QW9E1FdBlQfV_5A'
                                    }
                                    alt='Odalys Ruano'
                                />
                                <Box fontSize={{ base: "xl", md: "2xl" }} fontWeight='bold'>Odalys Ruano</Box>
                            </HStack>
                        </Box>
                    </Flex>
                    <HStack spacing={8} alignItems={'center'}>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                        {Links.map((link) => (
                            <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
                        ))}
                        </HStack>
                        <IconButton
                            size="md"
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label="Open Menu"
                            display={{ md: 'none' }}
                            onClick={onToggle}
                        />
                    </HStack>
                </Flex>

                <Collapse in={isOpen} animateOpacity>
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                </Collapse>
            </Box>
        </>
    )
}