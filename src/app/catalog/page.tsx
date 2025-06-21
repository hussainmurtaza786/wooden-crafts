'use client'
import React, { useState } from 'react';
import { Box, Flex, Grid, Heading, Image, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { DUMMY_DATA } from './data/products';
import { FiShoppingCart } from 'react-icons/fi';

export default function Catalog() {
    const [activeTab, setActiveTab] = useState('wooden-craft');

    const renderContent = () => {
        switch (activeTab) {
            case 'wooden-craft':
                return <WoodenCraft />
            case 'arabic-calligraphy':
                return <Calligraphy />
            case 'wall-art':
                return <WallArt />
            default:
                return <Text fontSize="2xl" fontWeight="bold">Select a category</Text>;
        }
    };

    const navItems = [
        { id: "wooden-craft", label: "3D Wooden Craft" },
        { id: "arabic-calligraphy", label: "Arabic Calligraphy" },
        { id: "wall-art", label: "Wall Art" },
    ];

    return (
        <Box maxW="1440px" mx="auto" bg="gray.50" minH="100vh" py={12} px={4}>
            <Box maxW="3xl" mx="auto" textAlign="center" bg="white" boxShadow="lg" rounded="2xl" p={{ base: 6, md: 10 }} mb={12}      >
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


            <Flex h="100vh" w="100%" direction={{ base: "column", md: "row" }} bg="#f9f9f9">
                {/* Sidebar */}
                <Box w={{ base: '100%', md: '260px' }} bg="white" p={6} border="1px solid #e2e8f0" borderRadius="lg" ml={{ md: 8 }} mt={{ base: 4, md: 8 }} mb={{ base: 4, md: 8 }} boxShadow="md" h={{ md: "auto" }} >
                    <Text fontSize="xl" fontWeight="bold" mb={6}>
                        Categories
                    </Text>
                    <VStack align="stretch" >
                        {navItems.map((item) => (
                            <Box key={item.id}>
                                <Text py={3} px={2} borderBottom={activeTab === item.id ? '1px solid red' : '1px solid black'} fontSize="md" fontWeight={activeTab === item.id ? 'bold' : 'normal'} color={activeTab === item.id ? '#ff5652' : 'gray.700'} cursor="pointer" _hover={{ color: '#ff5652' }} onClick={() => setActiveTab(item.id)}>
                                    {item.label}
                                </Text>
                            </Box>
                        ))}
                    </VStack>
                </Box>

                {/* Main Content */}
                <Box flex="1" p={10} overflowY="auto">
                    {renderContent()}
                </Box>
            </Flex>
        </Box>

    );
}


function Calligraphy() {
    return (
        <Box>
            <ProductCard workType="Arabic Calligraphy" />
        </Box>
    );
}

function WoodenCraft() {
    return (
        <Box>
            <ProductCard workType="3d Wooden Craft" />
        </Box>
    );
}

function WallArt() {
    return (
        <ProductCard workType="3d wall art" />
    );
}





interface product {
    workType: string;
}

function ProductCard({ workType }: product) {
    return (
        <Grid maxW="1440px" templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(2, 1fr)",lg:"repeat(3, 1fr)" }} gap={6}>
            {DUMMY_DATA.filter(item => item.workType === workType).map((item) => (
                <Box key={item.id} bg="white" borderRadius="2xl" boxShadow="md" overflow="hidden" transition="all 0.3s ease"
                    _hover={{
                        boxShadow: "xl",
                        transform: "scale(1.03)",
                    }}
                >
                    <Link href={`/catalog/${item.slug}`}>
                        <Image src={item.imageUrl} alt={item.title} w="100%" h="200px" objectFit="fill" />

                        <Box p={5}>
                            <Text fontSize="xl" fontWeight="semibold" truncate textAlign="center" mb={1}>
                                {item.title}
                            </Text>

                            <Text css={{
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                            }} color="gray.600" fontSize="sm" mb={3}>
                                {item.description}
                            </Text>

                            <Flex justify="space-between" align="center" mt={4}>
                                <Text fontWeight="bold" fontSize="lg" color="app.brown1">
                                    ${item.price}
                                </Text>

                                <Box bg="#D2691E" color="white" borderRadius="full" p={3} _hover={{ bg: "#A0522D" }} transition="background 0.2s ease">
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
