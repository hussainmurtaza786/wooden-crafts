'use client';

import React, { useState } from 'react';
import { Box, Flex, Grid, Heading, Image, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { DUMMY_DATA } from './data/products';
import { FiShoppingCart } from 'react-icons/fi';

export default function Shop() {
    const [activeTab, setActiveTab] = useState('wooden-craft');

    const navItems = [
        { id: "frames", label: "Frames " },
        { id: "decor", label: "Decor" },
        { id: "kitchen-items", label: "Kitchen Items" },
        { id: "furniture", label: "Furniture" },
        { id: "laser-cutting", label: "Laser Cutting" },
        { id: "3d-design", label: "3D Design" },
        { id: "wooden-doors", label: "Wooden Doors" },
        { id: "wall-panels", label: "Wall Panels" },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'frames':
                return <ProductCard workType="Frames" />;
            case 'decor':
                return <ProductCard workType="Decor" />;
            case 'kitchen-items':
                return <ProductCard workType="Kitchen Items" />;
            case 'furniture':
                return <ProductCard workType="Furniture" />;
            case 'laser-cutting':
                return <ProductCard workType="Laser Cutting" />;
            case '3d-design':
                return <ProductCard workType="3D Design" />;
            case 'wooden-doors':
                return <ProductCard workType="Wooden Doors" />;
            case 'wall-panels':
                return <ProductCard workType="Wall Panels" />;
            default:
                return null;
        }
    };


    return (
        <Box w="100%" minH="100vh" >
            {/* Header Intro */}
            <Box maxW="3xl" mx="auto" textAlign="center" bg="white" boxShadow="lg" rounded="2xl" p={{ base: 6, md: 10 }} mt={10} mb={10}>
                <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="gray.800" mb={4}>
                    Our Craft, Your Home
                </Heading>
                <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" lineHeight="tall">
                    We’re proud to present our handcrafted wooden creations — made with love, skill, and natural beauty.
                    This is where our passion comes to life, and where you can find the perfect piece for your home or as a meaningful gift.
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} color="app.green" fontWeight="medium" mt={4}>
                    See something you like? You can place your order right here.
                </Text>
            </Box>

            <Flex wrap="wrap" justify="center" align="center" gap={4} px={6} py={4} bg="app.green" borderBottom="1px solid #2e4a39">
                {navItems.map((item) => (
                    <Box key={item.id} px={5} py={2} borderRadius="md" bg={activeTab === item.id ? 'green.900' : 'app.green'} color="white" fontWeight="medium" cursor="pointer" transition="0.2s" _hover={{ bg: 'green.800' }} onClick={() => setActiveTab(item.id)} >
                        {item.label}
                    </Box>
                ))}
            </Flex>

            {/* Products Grid */}
            <Box w="100%" p={6}>
                {renderContent()}
            </Box>
        </Box>
    );
}


interface ProductProps {
    workType: string;
}

function ProductCard({ workType }: ProductProps) {
    return (
        <Grid maxW="1440px" mx="auto" templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6} >
            {DUMMY_DATA.filter(item => item.workType === workType).map((item) => (
                <Box key={item.id} bg="white" borderRadius="2xl" boxShadow="md" overflow="hidden" transition="all 0.3s ease"
                    _hover={{
                        boxShadow: "xl",
                        transform: "scale(1.03)",
                    }}
                >
                    <Link href={`/shop/${item.slug}`}>
                        <Image src={item.imageUrl} alt={item.title} w="100%" h="200px" objectFit="fill" />

                        <Box p={5}>
                            <Text fontSize="xl" fontWeight="semibold" textAlign="center" mb={1} >
                                {item.title}
                            </Text>

                            <Text color="gray.600" fontSize="sm" mb={3}
                                css={{
                                    display: '-webkit-box',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                }}
                            >
                                {item.description}
                            </Text>

                            <Flex justify="space-between" align="center" mt={4}>
                                <Text fontWeight="bold" fontSize="lg" color="app.brown1">
                                    ${item.price}
                                </Text>

                                <Box bg="#D2691E" color="white" borderRadius="full" p={3} _hover={{ bg: "#A0522D" }} transition="background 0.2s ease" >
                                    <FiShoppingCart size={20} />
                                </Box>
                            </Flex>
                        </Box>
                    </Link>
                </Box>
            ))}
        </Grid>
    );
}
