'use client'
import { Box, Image, Input, Textarea, VStack, Button, Heading, } from "@chakra-ui/react";
import { useState } from "react";

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted form:", form);
        setForm({ name: "", email: "", phone: "", message: "" });
    };


    return (
        <Box position="relative" w="100%" minH="100vh">
            {/* Background Wall Art */}
            <Box bgColor="black" position="absolute" w="100%" h="100%" zIndex={-1}>
                <Image src="/assets/roundtree.jpeg" alt="Wooden Wall Art" w="100%" h="100%" opacity={0.4} />
            </Box>

            {/* Form Section */}
            <Box px={4} maxW="600px" mx="auto" pt={{ base: 20, md: 32 }} >
                <Heading fontSize="3xl" fontFamily="poppins" textAlign="center" mb={8} color="white" fontWeight="bold">
                    Let’s Connect
                </Heading>

                <form onSubmit={handleSubmit}>
                    <VStack>
                        <Input name="name" placeholder="Name" value={form.name} onChange={handleChange} px={4} py={3} color="white" border="1px solid rgba(255,255,255,0.3)" _placeholder={{ color: "gray.300" }} _focus={{ borderColor: "white", bg: "transparent" }} />
                        <Input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} px={4} py={3} color="white" border="1px solid rgba(255,255,255,0.3)" _placeholder={{ color: "gray.300" }} _focus={{ borderColor: "white", bg: "transparent" }} />
                        <Input name="phone" type="tel" placeholder="Phone Number" value={form.phone} onChange={handleChange} px={4} py={3} color="white" border="1px solid rgba(255,255,255,0.3)" _placeholder={{ color: "gray.300" }} _focus={{ borderColor: "white", bg: "transparent" }} />
                        <Textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} rows={6} px={4} py={3} color="white" border="1px solid rgba(255,255,255,0.3)" _placeholder={{ color: "gray.300" }} _focus={{ borderColor: "white", bg: "transparent" }} />
                        <Button type="submit" w="full" bg="rgba(255,255,255,0.1)" color="white" border="1px solid rgba(255,255,255,0.3)" borderRadius="lg" _hover={{ bg: "rgba(255,255,255,0.2)" }} >
                            Send Message
                        </Button>
                    </VStack>
                </form>
            </Box>
        </Box>
    );
}
