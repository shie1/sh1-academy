import type {NextPage} from 'next'
import Head from "next/head";
import {Box, Container, useMediaQuery} from "@mui/system";
import Card from "@/components/card";
import Grid from "@mui/system/Unstable_Grid";
import StyledButton from "@/components/button";
import Button from "@/components/button";


const Home: NextPage = () => {
    return (<>
        <Head>
            <title>SH1 Academy - Tanulj programozni</title>
        </Head>
        <main>
            <Container sx={{
                p: "1rem",
            }}>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr', // all screens smaller than sm
                        sm: '1fr', // screens sm or larger
                        md: '1fr 1fr', // screens md or larger
                        lg: '2fr 3fr', // screens lg or larger
                    },
                    gridGap: '2.5rem',
                    alignItems: 'start',
                    gridAutoRows: "1fr",
                    '@media (max-width: 900px)': {
                        gridAutoRows: "unset !important",
                    }
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-between",
                        height: "100%",
                        gap: "1.5rem",
                        '&:hover': {
                            '& .weight-anim': {
                                fontWeight: 800,
                            }
                        }
                    }}>
                        <Box component="h1" sx={(theme) => ({
                            color: theme.palette.primary.main,
                            fontSize: "4rem",
                            "@media (max-width: 460px)": {
                                fontSize: "3rem",
                            },
                            "@media (max-width: 360px)": {
                                fontSize: "2.5rem",
                            },
                            fontWeight: 100,
                            fontFamily: '"Paytone One", monospace',
                            display: 'block',
                            overflow: 'hidden',
                            maxHeight: "2.5em",
                        })}>Programozás mindenkinek</Box>
                        <Box component="h2" sx={{
                            fontSize: "2rem",
                            fontWeight: 300,
                        }}>
                            <Box className="weight-anim" sx={{
                                transition: ".2s ease-in-out",
                                display: "inline",
                                fontWeight: 600,
                            }}>Ingyenesen elérhető oktatóanyagok</Box>, amikkel könnyen megismerkedhetsz a kódolás
                            világával.
                        </Box>
                        <Box sx={{
                            width: '100%',
                        }}>
                            <Button size="1.5rem">Tovább</Button>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            sm: '1fr', // all screens smaller than sm
                            md: '2fr 3fr', // screens lg or larger
                        },
                        gap: '1rem',
                        alignItems: 'start',
                        gridAutoRows: "1fr",
                    }}>
                        <Box sx={{gridColumn: {sm: '1', md: '1 / span 1'}}}>
                            <Card href="#" title="Kezdj itt!" description="Válassz ki egy területet és tanulj!"
                                  imageUrl="/bento_1.jpg"/>
                        </Box>
                        <Box sx={{gridColumn: {sm: '1', md: '2 / span 1'}}}>
                            <Card href="#" title="Hírlevél" description="Értesülj elsőként a legújabb trendekről!"
                                  imageUrl="/bento_2.jpg" color="accent.main"/>
                        </Box>
                        <Box sx={{gridColumn: {sm: '1', md: '1 / span 2'}}}>
                            <Card href="#" title="Csatlakozz és Taníts!"
                                  description="Írj saját cikkeket az oldalon és segíts formálni a jövő programozóit!"
                                  imageUrl="/bento_3.jpg" color="secondary.main"/>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </main>
    </>)
}

export default Home