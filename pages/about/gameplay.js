import {Badge, Container} from '@chakra-ui/react'
import {Meta, Title} from '../../components/card'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const AboutGamePlay = () => (
    <Layout title="About Game">
        <Container>
            <Title>
                Drop and Rates
            </Title>
            <Badge>System</Badge>
            <Paragraph>
                Auto creation of accounts is enabled. Also You can use client on MacOS in Parallels Desktop.
            </Paragraph>
            <Badge>Drop</Badge>
            <Paragraph>
                Drop TBD
            </Paragraph>
            <Meta>Rates</Meta>
            <Paragraph>
                TBD
            </Paragraph>
            <Meta>Olympiad</Meta>
            <Paragraph>
                TBD
            </Paragraph>
        </Container>
    </Layout>
)

export default AboutGamePlay
export {getServerSideProps} from '../../components/chakra'
