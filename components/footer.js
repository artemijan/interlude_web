import {Box} from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box align="center" opacity={0.4} fontSize="sm" position="absolute" bottom={0} alignItems="center" left={0}
             right={0} marginRight={"auto"} marginLeft={"auto"}>
            &copy; {new Date().getFullYear()} Artem Fedorov. All Rights Reserved.
        </Box>
    )
}

export default Footer
