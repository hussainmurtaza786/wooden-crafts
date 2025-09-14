import { CONTACT, HEADER_LINKS, SITE_TITLE } from "@/app-config";
import { Box, Button, Flex, Heading, Image, Input, Text, Textarea } from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <Box bgColor="app.green" color="white">
            <Flex p={10} gap={12} direction={{ base: "column", md: "row" }}>

                <Box flex={1}>
                    <Link href="/">
                        {/* <Heading textAlign="center" fontSize="30px" fontWeight="bolder">SHARIQTRADERS</Heading> */}
                        <Image src="/assets/logo.png" alt="Shariqa Traders Logo" width='300px' mb={5} />
                    </Link>                <Text mb={4} maxW="300px" fontSize="sm">Handcrafted wooden treasures made with love and precision. Each piece tells a story of nature's beauty and human artistry.</Text>
                    <Flex gap={10}>
                        <Link href='https://www.instagram.com/shariqtraders?igsh=eG9zOHJjcWM0ZWJt' target="_blank">
                            <FaInstagram size={25} />
                        </Link>
                    </Flex>
                </Box>
                <Box flex={1}>
                    <Heading mb={4} fontSize="20px" fontWeight="bolder">Quick Link</Heading>
                    <Flex justify="" align="" direction="column" gap={3}>
                        {HEADER_LINKS.map((item, idx) => (
                            <Link key={idx} href={item.path}> {item.title} </Link>
                        ))}
                    </Flex>
                </Box>
                <Box flex={1}>
                    <Heading mb={4} fontSize="20px" fontWeight="bolder">Contact Information</Heading>
                    <Box gap={3}>
                        <Text>Phone No: {CONTACT.phone}</Text>
                        <Text>Email: {CONTACT.email}</Text>
                        {/* <Text> {CONTACT.shopNo}</Text> */}

                    </Box>
                </Box>

            </Flex>
            <Box bgColor='app.brown' mx='auto' maxW='500px' textAlign='center' px={2} py={1} fontSize='14px' borderTopRadius='2xl'>
                Copyright © {currentYear} ® {SITE_TITLE}. All Rights Reserved.
            </Box>
        </Box >
    )
}