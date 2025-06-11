import { Box, Image, Text, Flex, Grid } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';

export default function Calligraphy() {
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
    { name: "Arabic Calligraphy 1", price: 50, imageUrl: "https://i.pinimg.com/736x/42/bd/ed/42bdedb973f3d3ccb48334c556b37e6d.jpg" },
    { name: "Arabic Calligraphy 2", price: 60, imageUrl: "https://media.istockphoto.com/id/1422692136/vector/arabic-and-islamic-calligraphy-of-ayat-al-kursi-also-known-as-ayat-ul-kursi-the-throne-verse.jpg?s=612x612&w=0&k=20&c=ufw_iDLM0XC9CGGs5dOg3p2hd5HvopfGRkwKVRPyFWE=" },
    { name: "Arabic Calligraphy 3", price: 70, imageUrl: "https://i.pinimg.com/736x/4d/2e/46/4d2e4665143b40473c15c990aab3143a.jpg" },
    { name: "Arabic Calligraphy 4", price: 80, imageUrl: "https://simransinnan.com/wp-content/uploads/2020/06/N-WD-415-Rabbi-Zidni-Ilma-Design-Ref.jpg" },
    { name: "Arabic Calligraphy 5", price: 90, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbzhk3MvkZ8pagZgIzVfWQba9wPouVwxK5A&s" },
    { name: "Arabic Calligraphy 6", price: 100, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ueXTEillfgBau-RSlUsP-c-SZGLk1i-hKw&s" },
]