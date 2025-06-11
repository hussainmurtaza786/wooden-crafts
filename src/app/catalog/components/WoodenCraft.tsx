import { Box, Image, Text, Flex, Grid } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';

export default function WoodenCraft() {
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
    { name: "Wooden Craft 1", price: 50, imageUrl: "https://i.pinimg.com/474x/85/97/b9/8597b9a171e541d9ccfb3111b19c133f.jpg" },
    { name: "Wooden Craft 2", price: 60, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRilW1GkieP-77WxsS9Dp-2vVLmIZ9V-B6tzqZSG7R0OXo7f5jwCks5OIA2tCs87GgSqF8&usqp=CAU" },
    { name: "Wooden Craft 3", price: 70, imageUrl: "https://image.made-in-china.com/202f0j00BQPGcgtRuUoF/Creative-Wooden-Craft-Table-Decor-Lovely-Deer-100-Handmade-Natural-Wood-Home-Office-Figurines-Birthday-Christmas-Gift-Christmas-Decoration.webp" },
    { name: "Wooden Craft 4", price: 80, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlfsejYrnHLWUhKuS--evE44Gaj2KPJHVxXw&s" },
    { name: "Wooden Craft 5", price: 90, imageUrl: "https://5.imimg.com/data5/SELLER/Default/2025/1/481872138/SL/UF/CI/183454421/cnc-wood-carving-machine-job-working-250x250.jpg" },
    { name: "Wooden Craft 6", price: 100, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY3DC9rZwDZZjTTQdDlQTfpbj9nS1-tyjnd_-XvVQS8Wbh5flY9QBEARNtxGROvLQQzi4&usqp=CAU" },
]