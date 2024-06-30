import NextLink from 'next/link'
import {Badge, Box, Heading, Image, Link} from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'

export const Title = ({children}) => (
    <Box>
        <Link href="/skills" as={NextLink}>Skills</Link>
        <span>
      {' '}
            <ChevronRightIcon/>{' '}
    </span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>
)

export const SkillImage = ({src, alt}) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4}/>
)

export const Meta = ({children, ...props}) => (
    <Badge colorScheme="green" {...props}>
        {children}
    </Badge>
)
