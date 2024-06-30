import {Container, Heading, Link} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from "../components/paragraph";

const Downloads = () => (
    <Layout title="Downloads">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Downloads
            </Heading>
            <Paragraph>
                <Link href={"https://drive.google.com/file/d/1jh9_0wrHGc5kTI4g9MMjxbKWq2Ay3AoW/view?usp=sharing"}
                      target="_blank">The game</Link>
            </Paragraph>
            <Paragraph>
                <Link
                    target="_blank"
                    href={"https://drive.google.com/file/d/1JFueQZjxhf4CYZNviGGAfBfp1VubmXuk/view?usp=sharing"}>System</Link>
            </Paragraph>
        </Container>
    </Layout>
)

export default Downloads
export {getServerSideProps} from '../components/chakra'
