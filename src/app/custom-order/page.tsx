
import Form from "@/components/Form";
import { Box, } from "@chakra-ui/react";

export default function CustomOrderPage() {
    return (
        <Box maxW="600px" mx="auto" py={10} px={5}>

            <Form
                // onSubmit={}
                fields={[
                    { type: "text", name: "name", label: "", fieldArea: { base: 12, sm: 12 }, inputProps: { placeholder: 'Full Name' } },
                    { type: "email", name: "email", label: "", fieldArea: { base: 12, sm: 12 }, inputProps: { placeholder: 'Email' } },
                    { type: "tel", name: "phone", label: "", fieldArea: { base: 12, sm: 12 }, inputProps: { placeholder: 'Contact Number' } },
                    { type: "text", name: "size", label: "", fieldArea: { base: 9, sm: 9 }, inputProps: { placeholder: 'Size ' } },
                    { type: "select", options: ["inch","mm","cm","ft"], name: "unit", label: "", fieldArea: { base: 3, sm: 3 },  },
                    { type: "text-area", name: "message", label: "", fieldArea: 12, inputProps: { placeholder: 'A brief Explanation', rows: 8 } },
                    { type: "file", accept: "image/*", name: "image", label: "", fieldArea: 12, inputProps: { placeholder: 'Upload Image', accept: "image/*" } },
                    { type: 'submit', name: 'submit-btn', label: <>Submit Message </>, inputProps: { mr: "auto", rounded: "sm", color: "black", bgColor: "transparent", border: "1px solid #ccc", size: "lg", w: "full", fontWeight: "600", _hover: { bgColor: "gray.100" } }, fieldArea: 12 },
                ]}
            />
        </Box>

    )
}
