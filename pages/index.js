import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Heading,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Greeting from '../components/greeting'

const Home = () => (
  <Layout>
    <Container>
      <Greeting />
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          About me and this project
        </Heading>
        <Paragraph>
          I&apos;m software engineer and full-stack developer based in Ukraine.
          I like to learn new languages and try something new. I always wanted
          to run my own L2 project, that&apos;s why I decided to start this project.
          I don&apos;t really like JAVA, but that&apos;s only the option I have right now.
          There are plans to migrate it to Rust or GO. I already started implementing Login server in rust,
          and I have a good progress there, it&apos;s working with bugs, but working...
          I decided to postpone rewriting everything, and focus on improving stuff.
        </Paragraph>
        <Paragraph>
          This project is developed and maintained in my spear time, so do not expect quick fixes,
          or instant responses regarding issues. Donations on the server are disabled for now, and will be enabled
          later when the project goes out of beta.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/downloads">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Let&apos;s get it started!
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
