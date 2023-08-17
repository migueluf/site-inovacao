import { Button, IconButton, Link, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon  } from '@chakra-ui/icons'


export const MenuSusp = () => {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
                color='white'
            />
            <MenuList>
                <MenuItem icon={<AddIcon />}>
                    New Tab
                </MenuItem>
                <MenuItem icon={<ExternalLinkIcon />}>
                    New Window
                </MenuItem>
                <MenuItem icon={<RepeatIcon />}>
                    Open Closed Tab
                </MenuItem>
                <MenuItem icon={<EditIcon />}>
                    Open File...
                </MenuItem>
            </MenuList>
        </Menu>
    )
}