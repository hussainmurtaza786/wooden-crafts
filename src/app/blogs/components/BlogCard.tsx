// "use client";

// import CustomButton from "@/components/CustomButton";
// import { Box, Heading, Text, VStack, HStack, Image, } from "@chakra-ui/react";
// import Link from "next/link";

// interface BlogCardProps {
//     title: string;
//     excerpt: string;
//     slug: string;
//     image?: string;
//     date?: string;
//     category?: string;
// }

// export default function BlogCard({
//     title,
//     excerpt,
//     slug,
//     image = "/placeholder.jpg", // fallback image
//     date = "Sep 13, 2025",
//     category = "Business",
// }: BlogCardProps) {
//     return (
//         <Box borderWidth="1px" borderRadius="2xl" overflow="hidden" shadow="md" bg="whiteAlpha.50" _hover={{ shadow: "xl", transform: "translateY(-6px)" }} transition="all 0.3s ease" mx={5} >
//             <Image src={image} alt={title} w="100%" h="200px" objectFit="cover" />

//             <VStack align="start" p={5}>
//                 <HStack fontSize="sm" color="gray.500">
//                     <Text>{date}</Text>
//                     <Text color="blue.500" fontWeight="semibold">
//                         {category}
//                     </Text>
//                 </HStack>

//                 <Heading size="md">{title}</Heading>
//                 <Text>{excerpt}</Text>

//                 <Link href={`/blogs/${slug}`}>
//                     <CustomButton px={4} py={2}>
//                         Read More
//                     </CustomButton>
//                 </Link>
//             </VStack>
//         </Box>
//     );
// }
