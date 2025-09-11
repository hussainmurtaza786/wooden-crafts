"use client";
import CustomButton from "@/components/CustomButton";
import { Box, Flex, Image, Heading, Text, Button, SimpleGrid, Grid } from "@chakra-ui/react";
import Link from "next/link";

const expertiseData = [
    {
        id: "frames",
        title: "Frames",
        image: "https://image.made-in-china.com/202f0j00gfGqCHPROkcM/High-Quality-Wooden-House-Decoration-Wood-Photo-Frames-for-Arts-Painting-Projects.webp",
        description:
            "Beautifully crafted wooden frames perfect for photos, art, and mirrors, adding warmth and elegance to your space."
    },
    {
        id: "decor",
        title: "Decor",
        image: "/assets/decor.jpg",
        description:
            "Stylish wooden décor pieces designed to bring a natural charm and unique character to any room."
    },
    {
        id: "kitchen-items",
        title: "Kitchen Items",
        image: "/assets/quality.webp",
        description:
            "Premium wooden kitchenware including cutting boards, utensils, and serving trays for a touch of craftsmanship."
    },
    {
        id: "furniture",
        title: "Furniture",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDsvz3kuUUmnNxUYRMdTlqpN31c64fGdcOKA&s",
        description:
            "Custom-designed wooden furniture built to last, combining functionality with timeless beauty."
    },
    {
        id: "laser-cutting",
        title: "Laser Cutting",
        image: "https://www.epiloglaser.com/assets/img/wd-cigarbox.jpg",
        description:
            "High-precision laser cutting for intricate designs and personalized wooden creations."
    },
    {
        id: "3d-design",
        title: "3d Design",
        image: "https://static.vecteezy.com/system/resources/previews/054/047/730/non_2x/intricate-wooden-flower-illustration-png.png",
        description:
            "Modern 3D wooden designs blending creativity, precision, and artistry for unique results."
    },
    {
        id: "wooden-doors-panels",
        title: "Wooden Doors & Panels",
        image: "https://www.3dkart.in/wp-content/uploads/2023/06/Bouquet-Door-2.jpg",
        description:
            "Elegant and durable wooden doors and panels that combine craftsmanship with lasting quality."
    },
    {
        id: "wooden-wall-art",
        title: "Wooden Wall Art",
        image: "https://m.media-amazon.com/images/I/81IAXaoosZL._UF350,350_QL80_.jpg",
        description:
            "Stunning wooden wall art pieces that add a touch of nature and sophistication to your home decor."
    }
];

export default function FieldOfExpertise() {
    const truncateText = (text: any, limit: any) => {
        if (text.length <= limit) return text;
        return text.slice(0, limit) + "...";
    };

    return (
        <Box w="100%" py={{ base: 10, md: 20 }} px={{ base: 4, md: 8 }} bg="#fffaf5">
            <Heading textAlign="center" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="app.brown" mb={10}>
                Our Field of Expertise
            </Heading>

            <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap="6" columns={{ base: 1, sm: 2, md: 3 }} maxW="1200px" mx="auto">
                {expertiseData.map((item) => (
                    <Box key={item.id} bg="white" p={2} shadow="md" borderRadius="lg" overflow="hidden" transition="transform 0.3s ease" _hover={{ transform: "translateY(-5px)", shadow: "lg" }}>
                        {/* Image */}

                        <Box userSelect="none" >
                            <Image src={item.image} alt={item.title} w="100%" h="300px" objectFit="contain" />
                        </Box>

                        {/* Content */}
                        <Box p={5}>
                            <Heading fontSize="xl" mb={3} color="app.brown">
                                {item.title}
                            </Heading>
                            <Text fontSize="md" color="gray.600" mb={5}>
                                {truncateText(item.description, 90)}
                            </Text>

                            <Link href={`/shop?category=${item.id}`}>
                                <CustomButton children='View More' px={4} py={2} />
                            </Link>

                        </Box>
                    </Box>
                ))}
            </Grid>
        </Box>
    );
}
