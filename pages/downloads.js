import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
const Downloads = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
    </Container>
  </Layout>
)

export default Downloads
