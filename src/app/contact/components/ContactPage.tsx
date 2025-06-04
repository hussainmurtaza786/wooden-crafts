"use client";
import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    Textarea,
    Input,

} from "@chakra-ui/react";
import { MdHeadsetMic, MdOutlineEmail } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { GiAlarmClock } from "react-icons/gi";
import { CONTACT } from "@/app-config";

export default function ContactPage() {
    return (
        <Flex py="32" px="5" justify="center" align="center" h="full" w="full" bgSize="cover" bgPos="top" bgRepeat="no-repeat" bgImage='url("/assets/bgPattern.png")'>
            <Flex shadow="lg" zIndex={10} gap={{ base: "10", md: "0" }} py={{ base: "10", md: "2" }} bgColor="white" direction={{ base: "column", md: "row" }} justify="center" align="center" borderRadius="md" overflow="hidden">
                <Flex flex={1} gap="10" py="24" px="16" direction="column" bgColor="app.green" color="white" >
                    <Flex gap="3" align="center">
                        <FaHouse size="30" />
                        <Box>
                            <Heading fontWeight="400" fontSize="md" lineHeight="20px">
                                Shop
                            </Heading>
                            <Text fontWeight="400" fontSize="sm" lineHeight="25px">
                                Pakistan
                            </Text>
                        </Box>
                    </Flex>

                    <Flex gap="3" align="center">
                        <MdOutlineEmail size="30" />
                        <Box>
                            <Heading fontWeight="400" fontSize="md" lineHeight="20px">
                                Email Address
                            </Heading>
                            <Text fontWeight="400" fontSize="sm" lineHeight="25px">
                                {CONTACT.email}
                            </Text>
                        </Box>
                    </Flex>

                    <Flex gap="3" align="center">
                        <MdHeadsetMic size="30" />
                        <Box>
                            <Heading fontWeight="400" fontSize="md" lineHeight="20px">
                                Telephone
                            </Heading>
                            <Text fontWeight="400" fontSize="sm" lineHeight="25px">
                                {CONTACT.phone}
                            </Text>
                        </Box>
                    </Flex>

                    <Flex gap="3" align="center">
                        <GiAlarmClock size="30" />
                        <Box>
                            <Heading fontWeight="400" fontSize="md" lineHeight="20px">
                                Office Hour
                            </Heading>
                            <Text fontWeight="400" fontSize="sm" lineHeight="25px">
                                Mon-Fri: 10am – 7pm
                            </Text>
                        </Box>
                    </Flex>
                </Flex>

                <Box bgColor="white" p={{ base: 6, md: 16 }} flex={2} maxW="700px">
                    <Heading mb="14" py="15px" fontWeight="600" fontSize="3xl" lineHeight="30px" color="gray.700">
                        We listen, we care, and we value your message.
                    </Heading>

                    <form>
                        <Input p={2} id="name" name="name" placeholder="Enter your full name" mb={6} />

                        <Input p={2} id="email" name="email" placeholder="your email address" type="email" mb={6} />

                        <Input p={2} id="phone" name="phone" placeholder="Phone Number" type="tel" mb={6} />

                        <Textarea p={2} id="message" placeholder="Write your message here..." mb={8} rows={6} />

                        <Button type="submit" bgColor="transparent" border="1px solid #ccc" size="lg" w="full" fontWeight="600" _hover={{ bg: "gray.100" }}>
                            Send Message
                        </Button>
                    </form>
                </Box>
            </Flex>
        </Flex>
    );
}
