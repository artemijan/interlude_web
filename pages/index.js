import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoInstagram } from 'react-icons/io5'
import Greeting from '../components/greeting'

const Home = () => (
  <Layout>
    <Container>
      <Greeting />
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Preamble
        </Heading>
        <Paragraph>
          I&apos;m software engineer and full-stack developer based in Ukraine.
          I really like to solve technical problems and learn something new,
          that&apos;s why software isn&apos;t magic for me. I was working with many
          frameworks and different languages (java, js, python, shell, fish).
        </Paragraph>
        <Paragraph>
          I was working for web development for 8 years. My very first experience
          was with Java Spring (3.5) + SOAP. Some time later I started to learn javascript,
          especially angular 1 and I was working on a few projects written in angular 1.
          Few years later I&apos;ve started developing in python. My first project was about
          writing BE for FSFE (Free software foundation Europe) ldap + openid connect.
          And last few year untill now I&apos;m working with large django projects only.
        </Paragraph>
        <Paragraph>
          I used to work with high-level requirements and transform those into exact tasks
          needs to be done to achieve business goal. That&apos;s why I always pay attention
          to details on each level of CI/CD process (requirements clarification, scoping,
          estimating, implementing, testing, deploying to production).
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/skills">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Tech Skills
            </Button>
          </NextLink>
        </Box>
      </Section>


      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Software engineering, Music, Watching films, Sports
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/artemijan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @artemijan
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.instagram.com/a_r_t_e_m_i_4/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @a_r_t_e_m_i_4
              </Button>
            </Link>
          </ListItem>
        </List>
        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
