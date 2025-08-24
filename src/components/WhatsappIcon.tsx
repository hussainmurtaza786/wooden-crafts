"use client";

import { Box, Link } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappIcon() {
    return (
        <Link
            href="https://wa.me/923700154565"
            target="_blank"
            //   isExternal
            _hover={{ textDecoration: "none" }}
        >
            <Box position="fixed" bottom="20px" right="20px" bg="#25D366" color="white" borderRadius="full"
                w="60px" h="60px" display="flex" alignItems="center" justifyContent="center" fontSize="30px"
                boxShadow="lg" cursor="pointer" _hover={{ bg: "#20b858" }} zIndex={1000}>
                <FaWhatsapp />
            </Box>
        </Link>
    );
}
