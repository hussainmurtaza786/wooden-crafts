import { HEADER_LINKS } from "@/app-config";
import { Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
    return (
        <Flex color="white" direction={{ base: "column", md: "row" }} gap={5} justify={{ base: "flex-start", md: "space-around" }} bgColor="app.green" py={{ base: 8, md: 8 }} fontSize="18px" w="100%">
            <Link href="/">
                <Heading textAlign="center" fontSize="30px" fontWeight="bolder">Wooden Crafts</Heading>
            </Link>
            <Flex gap={10} direction={{ base: "column", md: "row" }} justify="center" align={{ base: "center", md: "normal" }}>
                {HEADER_LINKS.map((item, idx) => (
                    <Link key={idx} href={item.path}> {item.title} </Link>
                ))}
            </Flex>
        </Flex>
    )
}

