import type {NextPage} from 'next'
import Head from "next/head";
import {Box, Container} from "@mui/system";
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
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: "4rem",
                    '& > *:first-child': {
                        flex: "2",
                    },
                    '& > *:nth-child(2)': {
                        flex: "3",
                    },
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        margin: "auto",
                        gap: "1rem",
                    }}>
                        <Box>
                            <Box component="h1" sx={(theme) => ({
                                color: theme.palette.primary.main,
                                fontSize: "4rem",
                            })}>Programozás mindenkinek</Box>
                            <Box component="h2" sx={{
                                fontSize: "2rem",
                            }}>
                                <Box sx={{
                                    color: "accent.main",
                                    display: "inline",
                                }}>Ingyenesen elérhető oktatóanyagok</Box>, amikkel könnyen megismerkedhetsz a kódolás
                                világával.
                            </Box>
                        </Box>
                        <Box sx={{
                            width: '100%',
                        }}>
                            <Button size="1.5rem">Tovább</Button>
                        </Box>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid xs={5}>
                            <Card href="#" title="Kezdj itt!" description="Válassz ki egy területet és tanulj!"
                                  imageUrl="/bento_1.jpg"/>
                        </Grid>
                        <Grid xs={7}>
                            <Card href="#" title="Hírlevél" description="Értesülj elsőként a legújabb trendekről!"
                                  imageUrl="/bento_2.jpg"/>
                        </Grid>
                        <Grid xs={12}>
                            <Card href="#" title="Csatlakozz és Taníts!"
                                  description="Írj saját cikkeket az oldalon és segíts formálni a jövő programozóit!"
                                  imageUrl="/bento_3.jpg"/>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </main>
    </>)
}

export default Home