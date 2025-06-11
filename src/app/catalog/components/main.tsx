'use client'
import React, { useState } from 'react';
import { Box, Flex, Text, VStack, } from '@chakra-ui/react';
import Calligraphy from './Calligraphy';
import WoodenCraft from './WoodenCraft';
import WallArt from './WallArt';

export default function Main() {
    const [activeTab, setActiveTab] = useState('arabic-calligraphy');

    const renderContent = () => {
        switch (activeTab) {
            case 'arabic-calligraphy':
                return <Calligraphy />
            case 'wooden-craft':
                return <WoodenCraft />
            case 'wall-art':
                return <WallArt />
            default:
                return <Text fontSize="2xl" fontWeight="bold">Select a category</Text>;
        }
    };

    const navItems = [
        { id: "arabic-calligraphy", label: "Arabic Calligraphy" },
        { id: "wooden-craft", label: "3D Wooden Craft" },
        { id: "wall-art", label: "Wall Art" },
    ];

    return (
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
    );
}
