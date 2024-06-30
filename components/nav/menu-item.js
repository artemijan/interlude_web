import {useRouter} from 'next/router'
import NextLink from 'next/link'
import {MenuItem} from '@chakra-ui/react'
import constants from '../constants'

const CustomMenuItem = ({href, children,}) => {
    const router = useRouter()
    return (
        <MenuItem
            href={href}
            borderRadius={'5px'}
            bg={href === router.asPath ? constants.selectionColor : undefined}
            as={NextLink}
        >
            {children}
        </MenuItem>
    )
}
export default CustomMenuItem
