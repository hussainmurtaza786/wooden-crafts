'use client'
import Form from "@/components/Form";
import { toaster } from "@/components/ui/toaster";
import { Box, Image, Input, Textarea, VStack, Button, Heading, } from "@chakra-ui/react";

export default function ContactPage() {
    const handleOnSubmit = async (values: any, resetForm: () => void) => {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            })
            console.log("value", values)
            const data = await response.json()
            if (response.ok) {
                toaster.create({
                    title: "Form Submitted", type: "success",
                    description: "Thanks for contacting us. We will get back to you soon",
                    duration: 8000,
                    action: { label: "OK", onClick: () => { } },
                });
                resetForm();
            }
            else
                toaster.create({
                    title: "Error", type: "error",
                    description: `Failed to submit application!`,
                    duration: 5000,
                })

            return data

        } catch (error: any) {
            toaster.create({
                title: "Error", type: "error",
                description: error.message || "Something went wrong",
                duration: 5000
            })
        }
    }

    return (
        <Box position="relative" w="100%" minH="100vh">
            {/* Background Wall Art */}
            <Box bgColor="black" position="absolute" w="100%" h="100%" zIndex={-1}>
                <Image src="/assets/roundtree.jpeg" alt="Wooden Wall Art" w="100%" h="100%" opacity={0.4} />
            </Box>

            {/* Form Section */}
            <Box py={14} px={4} maxW="600px" mx="auto" pt={{ base: 20, md: 32 }} >
                <Heading fontSize="4xl" fontFamily="poppins" textAlign="center" mb={8} color="white" fontWeight="bold" lineHeight={1}>
                    Ready to Take the Next Step?
                </Heading>

                <Form
                    onSubmit={handleOnSubmit}
                    fields={[
                        { type: "text", name: "name", label: "", fieldArea: { base: 12, sm: 12 }, inputProps: { placeholder: 'Full Name', color: "white", border: "1px solid gray", px: "4" } },
                        { type: "email", name: "email", label: "", fieldArea: { base: 12, sm: 12 }, inputProps: { placeholder: 'Email', color: "white", border: "1px solid gray", px: "4" } },
                        { type: "tel", name: "phone", label: "", fieldArea: { base: 12, sm: 12 }, inputProps: { placeholder: 'Contact Number', color: "white", border: "1px solid gray", px: "4" } },
                        { type: "text-area", name: "message", label: "", fieldArea: 12, inputProps: { placeholder: 'Your Message...', rows: 8, color: "white", border: "1px solid gray", px: "4" } },
                        { type: 'submit', name: 'submit-btn', label: <>Submit Message </>, inputProps: { mr: "auto", rounded: "sm", color: "white", bgColor: "transparent", border: "1px solid #ccc", size: "lg", w: "full", fontWeight: "600", _hover: { bgColor: "gray.100", color: "black" } }, fieldArea: 12 },
                    ]}
                />
            </Box>
        </Box>
    );
}
