'use client';
import { Provider } from "@/components/ui/provider"
import { breakpoints } from "@/theme/config";
import { Box, Flex } from "@chakra-ui/react";
import { ReactNode, useEffect } from "react";
import Header from './Header'
import Footer from './Footer'
import { Toaster } from "@/components/ui/toaster";
import ChatBot from "@/app/ChatBot";
import Script from "next/script";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* Botpress scripts */}
                <Script
                    src="https://cdn.botpress.cloud/webchat/v3.0/inject.js"
                    strategy="afterInteractive"
                />
                <Script
                    src="https://files.bpcontent.cloud/2025/06/11/09/20250611092526-K079K47U.js"
                    strategy="afterInteractive"
                />
            </head>
            <body>
                <Provider enableSystem={false}>
                    <Toaster />
                    <Layout>
                        <ChatBot />
                        {children}
                    </Layout>
                </Provider>
            </body>
        </html>
    );
}

function Layout({ children, }: { children: ReactNode, }) {
    return (
        <Flex direction='column' h='full' w='full' overflow='auto' minW={breakpoints.xs}>
            <Header />
            <Box flex="1 0 auto" >
                {children}
            </Box>
            <Footer />
        </Flex>
    )
}
