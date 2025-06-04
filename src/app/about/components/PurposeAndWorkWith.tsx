import { Box, Heading, Text, Stack, SimpleGrid, } from "@chakra-ui/react";
import { FaHandsHelping, FaBullseye, FaLightbulb, FaStar, FaClock, FaUserCheck } from "react-icons/fa";

export default function PurposeAndWork() {
    return (
        <Box py={{ base: 10, md: 20 }} px={{ base: 4, md: 10 }}>
            <Stack textAlign="center" maxW="4xl" mx="auto">
                <Heading mb={4} fontSize={{ base: "3xl", md: "4xl" }}>
                    Driven by Purpose
                </Heading>
                <Text maxW="600px" lineHeight="30px" mx="auto" fontSize="lg" color="gray.600">
                    We don't just create designs — we craft experiences. Our mission, vision, and values define who we are, what we strive for, and the principles that guide our every project.
                </Text>
            </Stack>

            <SimpleGrid mb={16} gap={4} columns={{ base: 1, md: 3 }} mt={16} maxW="6xl" mx="auto">
                {Purpose.map((item, idx) => (
                    <Box key={idx} p={6} rounded="xl" shadow="md" textAlign="center" transition="all 0.3s ease" _hover={{ transform: "translateY(-5px)", shadow: "lg" }}>
                        {item.icon}
                        <Heading fontSize="xl" mb={2}> {item.title} </Heading>
                        <Text color="gray.600" fontSize="md">
                            {item.description}
                        </Text>
                    </Box>
                ))}

            </SimpleGrid>

            <Stack textAlign="center" maxW="4xl" mx="auto">
                <Heading mb={4} fontSize={{ base: "3xl", md: "4xl" }}>
                    Why Work With Us?
                </Heading>
                <Text maxW="600px" lineHeight="30px" mx="auto" fontSize="lg" color="gray.600">
                    At our core, we are dedicated to delivering exceptional craftsmanship and innovative designs tailored to meet your unique needs. We combine creativity with precision to ensure every product not only looks stunning but also serves a meaningful purpose in your life or business. Our team values transparency, reliability, and customer satisfaction, working closely with you throughout the process to bring your vision to life. Choosing us means partnering with experts who are passionate about quality, detail, and exceeding expectations — making sure you get more than just a product, but a lasting experience.
                </Text>
            </Stack>

            <SimpleGrid gap={4} columns={{ base: 1, md: 3 }} mt={16} maxW="6xl" mx="auto">
                {WhyUs.map((item, idx) => (
                    <Box key={idx} p={6} rounded="xl" shadow="md" textAlign="center" transition="all 0.3s ease" _hover={{ transform: "translateY(-5px)", shadow: "lg" }}>
                        {item.icon}
                        <Heading fontSize="xl" mb={2}> {item.title} </Heading>
                        <Text color="gray.600" fontSize="md">
                            {item.description}
                        </Text>
                    </Box>
                ))}

            </SimpleGrid>
        </Box>
    );
}


const Purpose = [
    {
        icon: <FaBullseye size={40} color="#3182ce" style={{ margin: "0 auto 16px" }} />,
        title: " Our Mission",
        description: "To deliver highly creative, detailed, and unique interior wall and product designs that tell a story and bring spaces to life."
    },
    {
        icon: <FaLightbulb size={40} color="#3182ce" style={{ margin: "0 auto 16px" }} />,
        title: " Our Vision",
        description: "To be pioneers in 3D and decorative wall innovations that transform homes, offices, and public environments worldwide."
    },
    {
        icon: <FaHandsHelping size={40} color="#4299e1" style={{ margin: "0 auto 16px" }} />,
        title: " Our Values",
        description: "Creativity, Precision, and Integrity. We believe in honest craftsmanship and long-lasting impact through art and design."
    },
]

const WhyUs = [
  {
    icon: <FaStar size={40} color="#3182ce" style={{ margin: "0 auto 16px" }} />,
    title: " Quality & Creativity",
    description: "Each design is crafted with attention to detail, aesthetics, and functionality using premium materials and artistic flair."
  },
  {
    icon: <FaClock size={40} color="#3182ce" style={{ margin: "0 auto 16px" }} />,
    title: " Timely Delivery",
    description: "  We value your time. Every project is managed efficiently to meet deadlines without compromising on quality."
  },
  {
    icon: <FaUserCheck size={40} color="#3182ce" style={{ margin: "0 auto 16px" }} />,
    title: " Client Satisfaction",
    description: "   Your happiness is our priority. We listen, understand, and work closely with you to bring your ideas to life."
  },
]