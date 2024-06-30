import {IoLogoGithub} from 'react-icons/io5'
import {Stack} from '@chakra-ui/react'
import LinkItem from './link-item'
import menu from './menu.json'

const DesktopMenu = () => {
    return (
        <Stack
            direction={{base: 'column', md: 'row'}}
            display={{base: 'none', md: 'flex'}}
            width={{base: 'full', md: 'auto'}}
            alignItems="center"
            flexGrow={1}
            mt={{base: 4, md: 0}}
        >
            {menu.items
                .filter(i => !i.mobileOnly)
                .map(menu_item => {
                    let externalLinkStyles = {}
                    if (menu_item.isExternal === true) {
                        externalLinkStyles.display = 'inline-flex'
                        externalLinkStyles.alignItems = 'center'
                        externalLinkStyles.style = {gap: 4}
                        externalLinkStyles.pl = 2
                        externalLinkStyles._target = '_blank'
                    }
                    return (
                        <LinkItem
                            prefetch={false}
                            key={menu_item.href}
                            href={menu_item.href}
                            {...externalLinkStyles}
                        >
                            {menu_item.showLogoGit ? <IoLogoGithub/> : ''}
                            {menu_item.title}
                        </LinkItem>
                    )
                })}
        </Stack>
    )
}
export default DesktopMenu
