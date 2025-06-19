// import { DUMMY_DATA } from "@/data/products";
import { notFound } from "next/navigation";
import { Box, CheckboxGroup, Image, Text, VStack } from "@chakra-ui/react";
import { DUMMY_DATA } from "../data/products";



export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = DUMMY_DATA.find(p => p.slug === params.slug);
console.log()
  if (!product) return notFound();

  return (
    <Box p={10}>
      <Image src={product.imageUrl} alt={product.title} w="300px" mb={6} />
      <VStack align="start">
        <Text fontSize="2xl" fontWeight="bold">{product.title}</Text>
        <Text><strong>Material:</strong> {product.material}</Text>
        <Text><strong>Type:</strong> {product.workType}</Text>
        <Text><strong>Price:</strong> ${product.price}</Text>
        <Text><strong>Size:</strong> {product.size}</Text>
        <Text><strong>Description:</strong> {product.description}</Text>
      </VStack>
    </Box>
  );
}



