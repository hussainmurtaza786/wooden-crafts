import { Box, Image, Text, Flex, Grid } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';

export default function WallArt() {
    return (
        <Grid
            templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
            {Data.map((item, index) => (
                <Box key={index} bg="white" borderRadius="lg" boxShadow="md" p={4} w="full" transition="all 0.2s"
                    _hover={{
                        boxShadow: 'lg',
                        transform: 'scale(1.02)'
                    }}
                >
                    <Image src={item.imageUrl} alt={item.name} borderRadius="md" mb={4} w="100%" h="150px" objectFit="fill" />
                    <Text fontWeight="bold" fontSize="md" mb={2}>
                        {item.name}
                    </Text>
                    <Flex justifyContent="space-between" alignItems="center" mb={4}>
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                            <Text fontSize="lg" fontWeight="semibold">
                                ${item.price}
                            </Text>
                        </Box>
                        <FiShoppingCart size={25} />
                    </Flex>
                </Box>
            ))}
        </Grid>
    );
}


const Data = [
    { name: "Wall Art 1", price: 50, imageUrl: "https://pyariwalls.pk/cdn/shop/files/WhatsAppImage2024-05-28at16.57.31.jpg?v=1716898165" },
    { name: "Wall Art 2", price: 70, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPHT-yg0NVN17QRgdu2KtVT5tkpdPQKmXWof_FBGbEsCCyqB-1nKaY8HY1uEvqvAwpbs&usqp=CAU" },
    { name: "Wall Art 3", price: 80, imageUrl: "https://cdn.shopify.com/s/files/1/0467/7985/9095/t/45/assets/il_794xn3466826438_oxkn-1678429593834.webp?v=1678429611" },
    { name: "Wall Art 4", price: 90, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK5Xd8HjRGweMxG9ZkQRv3CWQHBgeDCUXyTw&s" },
    { name: "Wall Art 5", price: 100, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9dOeY9G9BDXgDXjU50XkwPnMWJgNNRSkbng&s" },
]