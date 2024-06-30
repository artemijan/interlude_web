import {Container} from '@chakra-ui/react'
import {Title} from '../../components/card'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const AboutServer = () => (
    <Layout title="Serevr">
        <Container>
            <Title>
                Server config
            </Title>
            <Paragraph>
                TBD
            </Paragraph>
        </Container>
    </Layout>
)

export default AboutServer
export {getServerSideProps} from '../../components/chakra'
