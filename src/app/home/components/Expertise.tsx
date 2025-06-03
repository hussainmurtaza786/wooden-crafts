/** @jsxImportSource @emotion/react */
'use client';

import { Box, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { css, keyframes } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;



export default function ExpertiseSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setAnimate(entry.isIntersecting),
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);


    return (
        <Box ref={sectionRef} bg="#f7f3ef" py={16} px={{ base: 4, md: 16 }}>
            <VStack
                css={
                    animate
                        ? css`
                                  animation: ${fadeInUp} 0.6s ease-out;
                                `
                        : undefined
                } textAlign="center" mb={12}>
                <Heading size="2xl" color="#5e3a1c">
                    Our Expertise
                </Heading>
                <Text fontSize="lg" color="gray.600" maxW="600px" mt={4}>
                    Masterfully crafted wooden creations designed with precision, passion, and timeless artistry.
                </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={5}>
                {expertiseItems.map((item, index) => (
                    <Box cursor="pointer" _hover={{ shadow: "2xl" }} key={index} p={6} bg="white" borderRadius="xl" boxShadow="lg" color="gray.800" fontWeight="semibold" fontSize="lg" textAlign="center" opacity={animate ? 1 : 0}
                        css={
                            animate
                                ? css`
                    animation: ${fadeInUp} 0.6s ease-out ${index * 0.1}s both;
                  `
                                : undefined
                        }
                    >
                        <Heading fontSize="md" fontWeight="bold">{item.title}</Heading>
                        <Text fontSize="xs">{item.description}</Text>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};


const expertiseItems = [
    {
        title: '3D Wooden Wall Art',
        description: 'Custom 3D wall pieces that bring depth, texture, and elegance to your spaces.',
    },
    {
        title: 'Premium Wooden Frames',
        description: 'Elegant handcrafted wooden frames for art, mirrors, or photos with perfect finishes.',
    },
    {
        title: 'Custom 3D Woodwork',
        description: 'Tailored 3D wood projects designed to reflect your vision and creativity.',
    },
    {
        title: 'Handcrafted Wooden Decor',
        description: 'Unique decor pieces carved with passion and expert craftsmanship.',
    },
    // {
    //     title: 'Rustic & Modern Wall Panels',
    //     description: 'Wall panel designs that suit both classic and contemporary interiors.',
    // },
    {
        title: 'Engraved Wooden Nameplates',
        description: 'Precision-cut personalized wooden nameplates for homes and offices.',
    },
    {
        title: 'Artistic Wood Sculptures',
        description: 'Artful wood sculptures that showcase creativity and natural beauty.',
    },
    {
        title: 'Custom Laser Wood Cutting',
        description: 'Accurate laser-cut wood designs for signage, crafts, and detailing.',
    },
    {
        title: 'Bespoke Wooden Signs',
        description: 'Business and home signage crafted with durability and style.',
    },
    {
        title: 'Luxury Wood Installations',
        description: 'High-end wooden installations for luxury spaces and premium interiors.',
    },
];