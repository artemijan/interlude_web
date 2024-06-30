import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { SkillGridItem } from '../components/grid-item'

import devOps from '../public/images/skills/devops.jpeg'
import dev from '../public/images/skills/softdev.jpeg'

const Skills = () => (
  <Layout title="My Tech Skills">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        My tech Skills
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <SkillGridItem id="devops" title="DevOps" thumbnail={devOps}>
            AWS, Teamcity, Terraform
          </SkillGridItem>
        </Section>
        <Section>
          <SkillGridItem id="dev" title="Development" thumbnail={dev}>
            JS, Python, Shell/Fish
          </SkillGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Skills
