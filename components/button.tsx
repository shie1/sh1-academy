import {Box} from "@mui/system";
import {ReactNode} from "react";

const Button = ({onClick, children, color, size}: {
    onClick?: () => void;
    children: ReactNode;
    color?: string;
    size?: string;
}) => {
    return (
        <Box component="button" onClick={onClick} sx={{
            backgroundColor: "black",
            color: "white",
            fontSize: size || "1rem",
            padding: "14px 36px",
            borderRadius: "2rem",
            border: `1px solid`,
            fontWeight: "bold",
            borderColor: color ? color : "primary.main",
            cursor: "pointer",
            transition: "background-color 0.2s ease-in-out",
            '&:hover': {
                backgroundColor: color ? color : "primary.main",
            }
        }}>
            {children}
        </Box>
    );
}
export default Button;