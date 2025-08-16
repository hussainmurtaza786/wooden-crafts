'use client';
import { HEADER_LINKS } from "@/app-config";
import { Box, Button, CloseButton, Drawer, Flex, Heading, Portal, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
    const base = useBreakpointValue({ base: "baseValue", md: "mdValue" })

    return (
        <Flex color="white" direction="row" gap={5} justify="space-around" bgColor="app.green" py={{ base: 8, md: 8 }} fontSize="18px" w="100%">
            <Link href="/">
                <Heading textAlign="center" fontSize="30px" fontWeight="bolder">ShariqaTraders</Heading>
            </Link>
            {base === "baseValue" ? <MobileLayout /> : null}

            {base === "mdValue" && <Box>
                <Flex gap={10} direction={{ base: "column", md: "row" }} justify="center" align={{ base: "center", md: "normal" }}>
                    {HEADER_LINKS.map((item, idx) => (
                        <Link key={idx} href={item.path}> {item.title} </Link>
                    ))}
                </Flex>
            </Box>}

        </Flex>
    )
}


function MobileLayout() {
    return (
        <Drawer.Root>
            <Drawer.Trigger asChild>
                <Button variant="outline" size="sm">
                    <GiHamburgerMenu />
                </Button>
            </Drawer.Trigger>
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.Header>
                            {/* <Drawer.Title>Drawer Title</Drawer.Title> */}
                        </Drawer.Header>
                        <Drawer.Body px={5} py={10}>
                            <Flex gap={10} direction={{ base: "column", md: "row" }} justify="center" align={{ base: "center", md: "normal" }}>
                                {HEADER_LINKS.map((item, idx) => (
                                    <Link key={idx} href={item.path}> {item.title} </Link>
                                ))}
                            </Flex>
                        </Drawer.Body>
                        {/* <Drawer.Footer>
                            <Button variant="outline">Cancel</Button>
                            <Button>Save</Button>
                        </Drawer.Footer> */}
                        <Drawer.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>

    )
}
