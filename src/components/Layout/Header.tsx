'use client'
import { HEADER_LINKS } from "@/app-config";
import { Box, Button, CloseButton, Drawer, Flex, Heading, Image, Portal, Text } from "@chakra-ui/react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
    return (
        <Flex color="white" direction="row" gap={5} justify="space-around" bgColor="app.green" py={8} fontSize="18px" w="100%" align="center">
            {/* Mobile (hamburger only) */}
            <Box display={{ base: "block", md: "none" }}>
                <MobileLayout />
            </Box>
            {/* Logo */}
            <Link href="/">
                <Image px={5} src="/assets/logo.png" alt="Shariq Traders Logo" width="100%" />
            </Link>

            {/* Desktop links */}
            <Box display={{ base: "none", md: "block" }}>
                <Flex gap={10} direction="row" justify="center" align="center">
                    {HEADER_LINKS.map((item, idx) => (
                        <Link key={idx} href={item.path}>   <Text
                            position="relative"
                            color="gray.100"
                            fontWeight="medium"
                            _hover={{
                                color: "app.brown", // gold accent on hover
                                _after: {
                                    width: "100%",
                                },
                            }}
                            transition="all 0.3s ease"
                            _after={{
                                content: '""',
                                position: "absolute",
                                bottom: "-3px",
                                left: 0,
                                width: "0%",
                                height: "2px",
                                bg: "app.brown",
                                transition: "all 0.3s ease",
                            }}
                        >
                            {item.title}
                        </Text></Link>
                    ))}
                </Flex>
            </Box>
        </Flex>
    )
}

function MobileLayout() {
    return (
        <Drawer.Root>
            <Drawer.Trigger asChild>
                <Button variant="outline" size="sm" mx={3} _focus={{ bg: "transparent" }} _active={{ bg: "transparent" }} _expanded={{ bg: "transparent" }}>
                    <GiHamburgerMenu />
                </Button>
            </Drawer.Trigger>
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.Body px={5} py={10}>
                            <Flex gap={6} direction="column" align="flex-start">
                                {HEADER_LINKS.map((item, idx) => (
                                    <Link key={idx} href={item.path}> {item.title} </Link>
                                ))}
                            </Flex>
                        </Drawer.Body>
                        <Drawer.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    )
}
