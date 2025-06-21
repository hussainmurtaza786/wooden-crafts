
import { Provider } from "@/components/ui/provider"
import { breakpoints } from "@/theme/config";
import { Box, Flex } from "@chakra-ui/react";
import { ReactNode, } from "react";
import Header from './Header'
import Footer from './Footer'
import { Toaster } from "@/components/ui/toaster";
import ChatBot from "@/app/ChatBot";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning>
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
