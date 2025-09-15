import { Button } from "@chakra-ui/react";


interface CustomButtonProps {
    children: React.ReactNode;
    px?: string | number;
    py?: string | number;

    // props: React.ComponentProps<typeof Button>;

}
export default function CustomButton({ children, px, py }: CustomButtonProps) {
    return (
        <Button
            bgGradient="to-r" gradientFrom="app.brown" gradientTo="app.green"
            color="white"
            transition="all 0.5s ease"
            _hover={{
                backgroundPosition: "right",
                gradientFrom: "app.green", gradientTo: "app.brown",
                boxShadow: "lg",
            }}
            px={px}
            py={py}
        >
            {children}
        </Button>
    );
}