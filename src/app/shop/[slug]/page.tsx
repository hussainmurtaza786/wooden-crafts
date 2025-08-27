// // import { DUMMY_DATA } from "@/data/products";
// import { notFound } from "next/navigation";
// import { Box, Image, Text, VStack } from "@chakra-ui/react";
// import { DUMMY_DATA } from "../data/products";

// export default function ProductDetailPage({ params }: { params: { slug: string } }) {
//   const product = DUMMY_DATA.find(p => p.slug === params.slug);
//   console.log()
//   if (!product) return notFound();

//   return (
//     <Box mx="auto" p={10}>
//       <Image src={product.imageUrl} alt={product.title} w="300px" mb={6} />
//       <VStack maxW="500px" align="start">
//         <Text fontSize="2xl" fontWeight="bold">{product.title}</Text>
//         <Text>Material: {product.material}</Text>
//         <Text>Type: {product.workType}</Text>
//         <Text>Price: ${product.price}</Text>
//         <Text>Size: {product.size}</Text>
//         <Text>{product.description}</Text>
//       </VStack>
//     </Box>
//   );
// }

export default function Details() { }

