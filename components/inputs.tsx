import React from "react";
import { Box, styled } from "@mui/system";
import {Search} from "@mui/icons-material"

const StyledInput = styled("input")(({ theme }) => ({
    backgroundColor: "transparent",
    border: "unset",
    color: theme.palette.text.main,
    fontSize: "16px",
    width: "100%",
    padding: "12px 16px",

    "&::placeholder": {
        color: "#4A4A4A",
    },

    "&:active, &:focus": {
        outline: "none",
    }
}));

const SearchBar: React.FC<{
    placeholder?: string;
}> = ({placeholder}) => {
    return (
        <Box sx={(theme)=>({
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            backgroundColor: "transparent",
            border: `1px solid transparent`,
            //just bottom
            borderBottomColor: "#4A4A4A",
            boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.05)",
            color: theme.palette.text.main,
            borderRadius: 0,
            fontSize: "16px",
            height: "100%",
            maxHeight: 48,
            width: "100%",
            transition: ".2s ease-in-out",

            "&::placeholder": {
                color: "#4A4A4A",
            },

            "&:focus-within": {
                borderRadius: "2rem",
                borderColor: "white",
                outline: "none",
            }
        })}>
            <StyledInput placeholder={placeholder || "Keresés..."} />
            <Box component="button" onClick={()=>{
                console.log("search");
            }} sx={{
                height: '100%',
                aspectRatio: "1",
                cursor: 'pointer',
                border: "1px solid transparent",
                backgroundColor: "transparent",
                color: "#4A4A4A",
                stroke: "#4A4A4A",
                fontSize: "1.8rem",
                //align text
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "2rem",
                transition: "color 0.2s ease-in-out, stroke 0.2s ease-in-out",
                '&:hover': {
                    color: "white",
                    stroke: "white",
                },
            }}>
                <Search fontSize={"inherit"} stroke={"inherit"} />
            </Box>
        </Box>
    );
};

export default SearchBar;
