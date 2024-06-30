import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/skills'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Skill = () => (
  <Layout title="AWS">
    <Container>
      <Title>
        DevOps <Badge>AWS/Teamcity/Terraform</Badge>
      </Title>
      <Paragraph>
        I&apos;m pretty sure each software engineer should have at least basic
        knowledge of what is IaC and how it can be used to simplify maintaning
        infrastructure for large projects. Since 2019 I was working on a project
        which was running on 57 machines on AWS. I was involved not only in
        development but maintaining infrastructure as well.
      </Paragraph>
      <Paragraph>
        I was supporting existing terraform code written by other developer, so
        I do not have an experience to write it from scratch. Nevertheless,
        it&apos;s not an issue for me to write terraform module to deploy some
        microservice or component on AWS.
      </Paragraph>
      <Paragraph>
        Here is a list of services I was working with on AWS (it&apos;s not
        full):
      </Paragraph>
      <List ml={8} my={2}>
        <ListItem>
          <Meta>Cognito</Meta>
          <span>
            We were using Cognito AWS managed service to restrict an access to
            our tests environments (as a side effect test environments were
            restricted for search engines bots like google).
          </span>
        </ListItem>
        <ListItem>
          <Meta>OpenSearch</Meta>
          <span>
            We were using AWS OpenSearch to store catalogue (products), also
            another instances of openseach were used for storing logs for a
            graylog
          </span>
        </ListItem>
        <ListItem>
          <Meta>ECS</Meta>
          <span>
            Our applications were deployed as ECS services and were running in
            docker containers
          </span>
        </ListItem>
        <ListItem>
          <Meta>Route 53, VPC, ALB</Meta>
          <span>
            Traffic routing/redirecting, subdomain managing, network security
          </span>
        </ListItem>
      </List>
      <Paragraph>
        Apart from terraform/terragrunt, I was setting up build/deployment
        configuration on <Meta d="inline">Teamcity</Meta> from scratch. So
        writing shell scripts is a daily routing for me 😀. Configuring{' '}
        <Meta d="inline">Grafana</Meta> dahbaords and{' '}
        <Meta d="inline">Graylog</Meta>
        streams/alerts is not an issue at all as well.
      </Paragraph>
    </Container>
  </Layout>
)

export default Skill
