import { CONTACT, HEADER_LINKS } from "@/app-config";
import { Box, Button, Flex, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <Flex color="white" bgColor="app.green" p={10} gap={12} direction={{ base: "column", md: "row" }}>

            <Box flex={1}>
                <Heading mb={4} fontSize="20px" fontWeight="bolder">Wooden Crafts</Heading>
                <Text mb={4} maxW="300px" fontSize="sm">Handcrafted wooden treasures made with love and precision. Each piece tells a story of nature's beauty and human artistry.</Text>
                <Flex gap={10}>
                    <CiFacebook size={25} />
                    <FaInstagram size={25} />
                    <AiOutlineYoutube size={25} />
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
                    <Text> {CONTACT.phone}</Text>
                    <Text> {CONTACT.email}</Text>
                    <Text> {CONTACT.shopNo}</Text>

                </Box>
            </Box>
            <Box flex={1}>
                <Heading mb={4} fontSize="20px" fontWeight="bolder">Kind Message</Heading>
                <Text mb={3}>Message us for any query related to design or material</Text>
                <form >
                    <Textarea p={2} mb={2} border="1px solid lightgrey" rows={3} />
                    <Button type="submit" w="full" bg="rgba(255,255,255,0.1)" color="white" border="1px solid rgba(255,255,255,0.3)" borderRadius="lg" _hover={{ bg: "rgba(255,255,255,0.2)" }} >
                        Submit
                    </Button>
                </form>
            </Box>

        </Flex>
    )
}