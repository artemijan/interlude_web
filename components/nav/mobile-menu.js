import {
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import CustomMenuItem from './menu-item'
import menu from './menu.json'

const MobileMenu = () => {
  return (
    <Menu isLazy id="navbar-menu">
      <MenuButton
        as={IconButton}
        icon={<HamburgerIcon />}
        variant="outline"
        aria-label="Options"
      />
      <MenuList>
        {menu.items.map(menu_item => {
          if (!menu_item.isExternal)
            return (
              <CustomMenuItem key={menu_item.href} href={menu_item.href}>
                {menu_item.title}
              </CustomMenuItem>
            )
          return (
            <MenuItem key={menu_item.href} as={Link} href={menu_item.href}>
              {menu_item.title}
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}
export default MobileMenu
