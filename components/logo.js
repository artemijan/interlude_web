import Link from 'next/link'
import {Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'
import UAMap from './icons/ua-map'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    p {
        margin-left: 5px;
    }
`

const Logo = () => {
    return (
        <Link href="/">
            <LogoBox>
                <UAMap fill="#a56d0c"/>
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='M PLUS Rounded 1c", sans-serif'
                    fontWeight="bold"
                >
                    Interlude Classic
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo
