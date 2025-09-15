'use client';
import { SITE_TITLE } from "@/app-config";
import Form from "@/components/Form";
import { toaster } from "@/components/ui/toaster";
import { Box, Heading, Icon, List, ListItem, Text, VStack, } from "@chakra-ui/react";
import { FaExclamationCircle } from "react-icons/fa";

export default function CustomOrderPage() {
    const handleOnSubmit = async (formValues: any, resetForm: () => void) => {
        const formData = new FormData();

        formData.append('formValues', JSON.stringify(formValues))
        if (formValues.referenceImage && formValues.referenceImage[0]) {
            formData.append("referenceImage", formValues.referenceImage[0]);
        }

        try {
            const response = await fetch("/api/custom-order", {
                // headers: { 'Content-Type': "multipart/form-data" },
                method: "POST",
                body: formData, // Sending FormData for file upload
            });

            const result = await response.json();

            if (response.ok) {
                toaster.create({
                    title: "Form Submitted", type: "success",
                    description: `Thank you for applying at ${SITE_TITLE}. We will get back to you soon`,
                    duration: 8000,
                    action: { label: "OK", onClick: () => { } },
                });
                resetForm();
                console.log("Success:", result);
            } else {
                // alert("Failed to submit application!");
                toaster.create({
                    title: "Error", type: "error",
                    description: `Failed to submit application!`,
                    duration: 5000,
                })
                console.error("Error:", result.error);
            }
        } catch (error: any) {
            toaster.create({
                title: "Error", type: "error",
                description: error.message || "Something went wrong",
                duration: 5000
            })
        }
    };
    return (
        <Box maxW="800px" mx="auto" py={10} px={5}>
            <VStack gap={6} align="start">
                <Heading size="lg" fontWeight="bold">Custom Order Request</Heading>
                <Text fontSize="md" color="gray.600">
                    Fill out the form below with as many details as possible so we can
                    understand your order and start working on it.
                </Text>
            </VStack>

            <Box border='1px solid #ccc' p={6} mt={8} borderRadius='md' boxShadow='sm'>
                <Form
                    onSubmit={handleOnSubmit}
                    // onSubmit={}
                    fields={[
                        // --- Customer Info ---
                        { type: "text", name: "name", label: "Full Name", fieldArea: 12, inputProps: { placeholder: "Full Name", required: true } },
                        { type: "email", name: "email", label: "Email", fieldArea: 6, inputProps: { placeholder: "Email Address", required: true } },
                        { type: "tel", name: "phone", label: "Contact Number", fieldArea: 6, inputProps: { placeholder: "WhatsApp / Phone", required: true } },

                        // --- Order Details ---
                        { type: "select", options: ["Furniture", "Handicraft", "Frames", "Kitchen Items", "Laser Cutting", "3D Design", "Wooden Wall Art", "Other"], name: "orderType", label: "", fieldArea: 12, inputProps: { placeholder: "Custom Order Type", required: true } },
                        { type: "text", name: "size", label: "", fieldArea: 6, inputProps: { placeholder: "Size (e.g. 12x12)", required: true } },
                        { type: "select", options: ["inch", "cm", "mm", "ft"], name: "unit", label: "", fieldArea: 6, inputProps: { placeholder: "Unit", required: true } },
                        { type: "number", name: "quantity", label: "", fieldArea: 6, inputProps: { placeholder: "Quantity", min: 1, required: true } },
                        { type: "text", name: "material", label: "", fieldArea: 6, inputProps: { placeholder: "Material", required: false } },
                        { type: "text-area", name: "description", label: "", fieldArea: 12, inputProps: { placeholder: "Describe your design idea...", rows: 5, required: true } },
                        // { type: "file", accept: "image/*", name: "referenceImage", label: "Upload Reference Image", fieldArea: 12, inputProps: { accept: "image/*" } },
                        {
                            type: "file", name: "referenceImage", label: "Upload Reference Image", description: "Attach file. File size of your documents should not exceed 5MB",
                            showDropArea: true,
                            accept: ["application/pdf", "image/*"],
                            maxFileSize: 5 * 1000 * 1000,    //10MB
                            fieldArea: 12,
                        },
                        // --- Delivery Info ---
                        { type: "text", name: "address", label: "Delivery Address", fieldArea: 12, inputProps: { placeholder: "Full Address", required: true } },
                        { type: "date", name: "deliveryDate", label: "Preferred Delivery Date", fieldArea: 6, notRequired: true, inputProps: { placeholder: "Select Date" } },
                        { type: "text", name: "budget", label: "Budget Range", notRequired: true, fieldArea: 6, inputProps: { placeholder: "Your Budget (optional)" } },

                        // --- Notes ---
                        { type: "text-area", name: "notes", label: "Additional Notes", fieldArea: 12, notRequired: true, inputProps: { placeholder: "Any special instructions?", rows: 4 } },

                        // --- Submit ---
                        {
                            type: "submit",
                            name: "submit-btn",
                            label: <>Submit Order</>,
                            inputProps: {
                                w: "full",
                                size: "lg",
                                fontWeight: "600",
                                rounded: "lg",
                                color: "black",
                                bgGradient: "to-r",
                                gradientFrom: "gray.200",
                                gradientTo: "gray.400",
                                boxShadow: "md",
                                transition: "all 0.3s ease",
                                _hover: {
                                    gradientFrom: "gray.400",
                                    gradientTo: "gray.200",
                                    boxShadow: "lg",
                                },
                                _active: {
                                    transform: "translateY(0)",
                                    boxShadow: "md",
                                },
                            },
                            fieldArea: 12
                        }

                    ]}
                />
            </Box>
            <Box mt={10} p={6} bg="gray.50" borderRadius="md" boxShadow="sm">
                <Heading size="md" mb={4} display="flex" alignItems="center" gap={2}>
                    <FaExclamationCircle size={25} />
                    Important Notes
                </Heading>
                <List.Root gap={3} color="gray.700" fontSize="sm">
                    <ListItem> The timeline given only includes <b>working days (Mon–Fri)</b>. Weekends and holidays are not included.</ListItem>
                    <ListItem> Delivery time may vary depending on design complexity and material availability.</ListItem>
                    <ListItem> Please provide accurate size and quantity details to avoid delays.</ListItem>
                    <ListItem> For custom designs, uploading a reference image is highly recommended.</ListItem>
                    <ListItem> Advance payment may be required before starting production.</ListItem>
                    <ListItem> Any design changes requested <b>after order confirmation</b> may affect delivery time and cost.</ListItem>
                    <ListItem> Delivery charges will be included.</ListItem>
                </List.Root>
            </Box>

        </Box>

    );
}
