'use client';

import React, { useState } from 'react';
import { Box, Flex, Heading, Image, Text, } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export default function ExplorePanel() {
    const [activeTab, setActiveTab] = useState('material');

    const navItems = [
        { id: 'material', label: 'Materials We Use' },
        { id: 'apart', label: 'What Sets Us Apart' },
        { id: 'client', label: 'Client Stories' },
        { id: 'design', label: 'Behind the Designs' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'material':
                return <Material />;
            case 'apart':
                return <SetApart />;
            case 'client':
                return <Story />;
            case 'design':
                return <Design />;
            default:
                return null;
        }
    };

    return (
        <Box w="100%" h="100%">
            {/* Navigation Tabs */}
            <Flex wrap="wrap" justify="center" align="center" gap={4} px={6} py={4} bg="app.green" borderBottom="1px solid #2e4a39">
                {navItems.map((item) => (
                    <Box key={item.id} px={5} py={2} borderRadius="md" bg={activeTab === item.id ? 'green.900' : 'app.green'} color="white" fontWeight="medium" cursor="pointer" transition="0.2s" _hover={{ bg: 'green.800' }} onClick={() => setActiveTab(item.id)}>
                        {item.label}
                    </Box>
                ))}
            </Flex>

            {/* Transitioned Content */}
            <Box w="100%" minH="calc(100vh - 100px)" p={4} animation={`${fadeInUp} 0.6s ease`}
                key={activeTab}>
                {renderContent()}
            </Box>
        </Box>
    );
}


interface PanelContent {
    title: string,
    text: string,
    img: string
}
function PanelContent({ title, text, img }: PanelContent) {
    return (
        <Flex direction="column" align="center" py={10} gap={10} px={4}>
            <Heading fontSize={{ base: '2xl', md: '4xl' }} textAlign="center">
                {title}
            </Heading>
            <Flex direction={{ base: 'column', md: 'row' }} justify="space-evenly" align="center" gap={10} maxW="1200px">
                <Box maxW="600px">
                    <Text fontSize="lg" color="gray.700">
                        {text}
                    </Text>
                </Box>
                <Box maxW="600px">
                    <Image w="100%" src={img} alt={title} rounded="md" shadow="md" />
                </Box>
            </Flex>
        </Flex>
    );
}


function Material() {
    return (
        <PanelContent
            title="Crafted with Excellence"
            text="We carefully select premium, sustainable materials that not only enhance the beauty of each design but also ensure durability and longevity..."
            img="/assets/wood-sample.webp"
        />
    );
}

function SetApart() {
    return (
        <PanelContent
            title="Innovation Meets Craftsmanship"
            text="We carefully select premium, sustainable materials that not only enhance the beauty of each design but also ensure durability and longevity. From eco-friendly composites to innovative 3D printing mediums, our choices reflect quality and responsibility."
            img="/assets/different-design.jpg"
        />
    );
}

function Story() {
    return (
        <PanelContent
            title="Voices of Satisfaction"
            text="Hear from those who have transformed their spaces with us. Our clients’ experiences showcase the impact of thoughtful design, personalized service, and the lasting impression our work leaves behind."
            img="/assets/happy-client.webp"
        />
    );
}

function Design() {
    return (
        <PanelContent
            title="The Creative Journey"
            text="Explore the meticulous process behind each creation—from initial sketches and 3D modeling to final craftsmanship. This is where imagination meets expertise, turning ideas into tangible works of art."
            img="/assets/design.jpg"
        />
    );
}
