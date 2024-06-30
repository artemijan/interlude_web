import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { Link, MenuItem } from '@chakra-ui/react'
import constants from '../constants'

const CustomMenuItem = ({ href, children, }) => {
  const router = useRouter()
  return (
    <NextLink href={href} passHref>
      <MenuItem
        borderRadius={'5px'}
        bg={href === router.asPath ? constants.selectionColor : undefined}
        as={Link}
      >
        {children}
      </MenuItem>
    </NextLink>
  )
}
export default CustomMenuItem
