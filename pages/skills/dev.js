import { Container, Badge } from '@chakra-ui/react'
import { Title, Meta } from '../../components/skills'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Skill = () => (
  <Layout title="AWS">
    <Container>
      <Title>
        Software Development <Badge>JS/Python/Shell scripting</Badge>
      </Title>
      <Paragraph>
        Any software engineer should know in details how computer performs each
        instruction written by him. If something is unclear or hidden in
        abstraction from developer then it may bring some issues later.
        Tha&apos;s why It&apos;s important to understand technology or language
        you are writing code in.
      </Paragraph>
      <Meta>FE experience</Meta>
      <Paragraph>
        It was my first experience in a big team as a front-end engineer. We
        were developing LMS (learning management system) for our client in US.
        The project is pretty complex and contained many components: BE (.NET),
        FE (angular 1), infrastructure (terraform). I was developing only FE
        part. While working on this project I have learned many things about
        angular, HTTP/S, SPA (single page app), REST and so on. This project
        gave me a good start for improving my tech skills.
      </Paragraph>
      <Paragraph>
        Another FE project - Firefox/Chrome extension. It was a long time ago,
        so I am not sure if this experience is still relevant. Anyways I have
        such experience, and, probably, it will not be an issue for me to
        implement some browser extension as well.
      </Paragraph>
      <Paragraph>
        I&apos;m pretty sure that I can learn new JS/typescript frameworks and
        technologies very fast. Just reading some documentation and following
        best practices is 90% of success.
      </Paragraph>
      <Meta>BE experience</Meta>
      <Paragraph></Paragraph>
    </Container>
  </Layout>
)

export default Skill
