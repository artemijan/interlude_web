import Head from 'next/head'
import NavBar from '../navbar'
import {Box, Container} from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Interlude Classic"/>
                <meta name="author" content="Artem Fedorov"/>
                <link rel="apple-touch-icon" href="/images/icons/apple-touch-icon.png"/>
                <link rel="shortcut icon" href="/images/icons/favicon.ico" type="image/x-icon"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:image" content="/images/contents/card.webp"/>
                <meta property="og:site_name" content="Interlude Classic"/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content="/images/contents/card.webp"/>
                <title>Interlude Classic</title>
            </Head>

            <NavBar path={router.asPath}/>

            <Container maxW="container.md" pt={14}>
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main
