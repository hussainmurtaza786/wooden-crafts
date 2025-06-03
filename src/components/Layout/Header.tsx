import { HEADER_LINKS } from "@/app-config";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
    return (
        <Flex color="white" direction={{ base: "column", md: "row" }} gap={5} justify={{ base: "flex-start", md: "space-around" }} bgColor="rgba(35,57,44,1)" py={{ base: 8, md: 8 }} fontSize="18px" w="100%" h="100vh">
            <Box>
                <Heading textAlign="center" fontSize="30px" fontWeight="bolder">Wooden Crafts</Heading>
            </Box>
            <Flex gap={10} direction={{ base: "column", md: "row" }} justify="center" align={{ base: "center", md: "normal" }}>
                {HEADER_LINKS.map((item, idx) => (
                    <Link key={idx} href={item.path}> {item.title} </Link>
                ))}
            </Flex>
        </Flex>
    )
}


// bgGradient="to-br" gradientFrom="rgba(35,57,44,1)" gradientTo="white"