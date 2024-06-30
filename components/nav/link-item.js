import {Link, useColorModeValue} from '@chakra-ui/react'
import NextLink from 'next/link'
import {useRouter} from 'next/router'
import constants from '../constants'

const LinkItem = ({href, children, ...props}) => {
    const router = useRouter()
    const active = router.asPath === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <Link
            as={NextLink}
            href={href} passHref
            p={2}
            bg={active ? constants.selectionColor : undefined}
            borderRadius={'5px'}
            color={active ? '#202023' : inactiveColor}
            {...props}
        >
            {children}
        </Link>
    )
}
export default LinkItem
