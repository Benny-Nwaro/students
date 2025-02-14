"use client"

import {
  Box,
  ChakraProvider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  extendTheme,
  Grid,
  useDisclosure,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { IoMdCloseCircle } from "react-icons/io";


// Optionally extend Chakra's theme if you need to customize it
const theme = extendTheme({
  // Add any theme customizations here
})

interface MainWrapperProps {
  children: ReactNode
}

export default function MainWrapper({ children }: MainWrapperProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <ChakraProvider theme={theme}>
        {/* Header Area */}
        <Grid
          templateAreas={{
            base: `"header" "main"`, // On mobile, stack header and main vertically
            md: `"nav header" "nav main"`, // On larger screens, use sidebar and grid layout
          }}
          gridTemplateRows={{ base: 'auto 1fr', md: '60px 1fr' }}
          gridTemplateColumns={{ base: '1fr', md: 'auto 1fr' }}
          minH="100vh"
          gap="1"
        >
          <Box position="sticky" top={0} zIndex={10}>
            <Header onOpen={onOpen} />
          </Box>

          {/* Sidebar Wrapper */}
          <Box
            gridArea="nav"
            display={{ base: 'none', md: 'block' }}
            h="100vh"
            transition="width 0.3s ease"
            width={{ base: '4rem', md: '4rem' }}
            _hover={{
              width: '18rem',
              transition: 'width 0.3s ease',
            }}
          >
            <Sidebar />
          </Box>

          {/* Main Content */}
          <Box gridArea="main" bg="gray.100" p={{ base: 2, md: 4 }}>
            {children}
          </Box>

          {/* Drawer for Mobile Sidebar */}
          <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
              <DrawerContent>
              <DrawerCloseButton
                left="1rem"
                top="1rem"
                fontSize="24px"
                p="12px"
                bg="red.500"
                color="white"
                borderRadius="full"
                _hover={{ bg: "red.700" }}
              />                
              <DrawerBody>
                  <Sidebar />
                </DrawerBody>
              </DrawerContent>
          </Drawer>
        </Grid>
      </ChakraProvider>
    </>
  )
}
