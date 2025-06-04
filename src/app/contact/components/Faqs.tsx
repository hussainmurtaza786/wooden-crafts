import { Accordion, Box, Flex, Heading, Image, Span } from "@chakra-ui/react"
import { IoMdArrowDropdown } from "react-icons/io"
export default function FAQs() {
    return (
        <Flex bgColor="#f3f4eedd" gap={10} py="5" w="100%" direction={{ base: "column", md: "row" }} justify="center" align="center" px={10} >
            <Flex direction="column" justify="center" align="center" w="100%" >
                <Heading textAlign="center" fontFamily="abrilFatface" fontSize="40px" fontWeight="500" py="5">FAQs</Heading>
                <Accordion.Root collapsible defaultValue={["a"]} maxW="600px" >
                    {faqs.map((item, index) => (
                        <Accordion.Item borderBottom="1px solid gray" my="4" p={4} key={index} value={item.value}>
                            <Accordion.ItemTrigger justifyContent="space-between">
                                <Span fontSize="20px" fontFamily="plus_jakarta_sans" >{item.title}</Span>
                                <IoMdArrowDropdown size={25} />
                            </Accordion.ItemTrigger>
                            <Accordion.ItemContent >
                                <Accordion.ItemBody fontSize="15px">{item.text}</Accordion.ItemBody>
                            </Accordion.ItemContent>
                        </Accordion.Item>
                    ))}
                </Accordion.Root>
            </Flex>
        </Flex>
    )
}

const faqs = [
    { value: "a", title: "What kind of wood do you use for your crafts?", text: "We use high-quality, durable wood such as Sheesham, Oak, Pine, and Walnut, depending on the product and its intended use." },
    { value: "b", title: "Are your products handmade?", text: "Our products are a blend of machine precision and handcrafted artistry. While machines help with accuracy and structure, the final detailing, finishing, and creative touches are done by hand to ensure each piece has a unique, human touch." },
    { value: "c", title: "Can I request a custom design?", text: "Absolutely! We accept custom orders. Share your idea with us, and we’ll work with you to bring it to life." },
    { value: "d", title: "Do you ship internationally?", text: "Currently, we ship within Pakistan. However, international shipping can be arranged on request — just contact us." },
    { value: "e", title: "How long does it take to receive my order?", text: "Standard orders are processed and shipped within 5–7 working days. Custom orders may take longer depending on the design." },
    { value: "f", title: "What is your return policy?", text: "We accept returns on damaged or defective items within 7 days of delivery. Please contact us with images for a quick resolution." },
]