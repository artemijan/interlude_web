import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { CardGridItem } from '../components/grid-item'

import ork from '../public/images/ork.jpg'
import towers from '../public/images/towers.jpg'

const About = () => (
  <Layout title="About the server">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        About the server
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <CardGridItem href="/about/gameplay" title="Gameplay" thumbnail={ork}>
            Drop/Rates/Olympiad
          </CardGridItem>
        </Section>
        <Section>
          <CardGridItem href="/about/server" title="Server" thumbnail={towers}>
            RAM/CPU/OS
          </CardGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default About
export { getServerSideProps } from '../components/chakra'
