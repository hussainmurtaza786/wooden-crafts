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
            backgroundSize="200% 100%"
            backgroundPosition="left bottom"
            color="white"
            transition="all 0.5s ease"
            _hover={{
                backgroundPosition: "right bottom",
            }}
            px={px}
            py={py}
        >
            {children}
        </Button>
    );
}