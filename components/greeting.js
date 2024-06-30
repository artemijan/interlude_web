import {Box, Heading, Image, useColorModeValue} from '@chakra-ui/react'

const Greeting = () => (
    <div>
        <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="justify"
            display="flex"
            flexDirection="column"
            justifyContent={'center'}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
            <p>
                This Interlude Classic server, it is still in development but most of the features work.
                The server is still under development, so please fill free to report any bugs or issues.
            </p>
            <p>
                Server is located in Ukraine.
            </p>
        </Box>
        <Box display={{md: 'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Interlude Classic
                </Heading>
                <p>Java version: 22</p>
                <p>Server status: Beta</p>
            </Box>
            <Box
                flexShrink={0}
                mt={{base: 4, md: 0}}
                ml={{md: 6}}
                textAlign="center"
            >
                <Image
                    borderColor="whiteAlpha.800"
                    borderWidth={1}
                    maxWidth="250px"
                    display="inline-block"
                    borderRadius="full"
                    src="/images/martial-logo.png"
                    alt="Profile image"
                />
            </Box>
        </Box>
    </div>
)

export default Greeting
