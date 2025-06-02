import { HEADER_LINKS } from "@/app-config";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
    return (
        <Flex direction={{ base: "column", md: "row" }} gap={5} justify={{ base: "center", md: "space-around" }} py={{ base: 0, md: 8 }} bgColor="app.green" opacity="0.7" fontSize="18px" w="100%" h="100vh">
            <Box>
                <Heading textAlign="center" fontSize="30px" fontWeight="bolder">Wooden Crafts</Heading>
            </Box>
            <Flex gap={10} direction={{ base: "column", md: "row" }} justify="center" align={{base:"center",md:"normal"}}>
                {HEADER_LINKS.map((item, idx) => (
                    <Link key={idx} href={item.title}> {item.title} </Link>
                ))}
            </Flex>
        </Flex>
    )
}