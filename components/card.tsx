import React from "react";
import {Box, styled} from "@mui/system";
import Link from "next/link";
import {motion} from "framer-motion";

const StyledCard: React.FC<{
    href: string;
    title: string;
    description: string;
    imageUrl: string;
}> = ({href, title, description, imageUrl}) => {
    // on hover move image relative to mouse
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-end",
                width: "100%",
                borderRadius: "2rem",
                border: "1px solid #4A4A4A",
                height: "14rem",
                boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.05)",
                overflow: "hidden",
                //mix an image with a dark overlay 40%
                position: "relative",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.4)",
                    zIndex: 1,
                },
                '&:hover': {
                    cursor: "pointer",
                    "&::before": {
                        backgroundColor: "rgba(0,0,0,0.6)",
                    },
                    '& .bg': {
                        transform: "scale(1.05) rotate(-2deg)",
                    },
                    border: "1px solid #8acc33",
                }
            }}>
            <Box
                className="bg"
                sx={{
                    transition: "transform 0.2s ease-in-out",
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                }}/>
            <Box sx={{
                zIndex: 2,
                padding: "1rem",
                textShadow: "0 0 4px rgba(0,0,0,0.6)",
            }}>
                <Box component={"h3"} sx={{
                    color: "accent.main",
                    fontSize: "1.5rem",
                }}>{title}</Box>
                <Box sx={{
                    color: "text.main",
                    fontSize: "1rem",
                }}>{description}</Box>
            </Box>
        </Box>
    );
};

export default StyledCard;
