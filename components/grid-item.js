import NextLink from 'next/link'
import Image from 'next/image'
import {Box, LinkBox, Text} from '@chakra-ui/react'
import {Global} from '@emotion/react'

export const SkillGridItem = ({children, id, title, thumbnail}) => (
    <Box w="100%" textAlign="center">
        <NextLink href={`/skills/${id}`}>
            <LinkBox cursor="pointer">
                <Image
                    src={thumbnail}
                    alt={title}
                    width={570}
                    height={320}
                    sizes="30vw"
                    className="grid-item-thumbnail"
                    placeholder="blur"
                />
                <Text mt={2} fontSize={20}>
                    {title}
                </Text>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>
)

export const GridItemStyle = () => (
    <Global
        styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
    />
)
