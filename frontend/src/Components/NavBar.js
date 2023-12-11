import { BellIcon } from '@chakra-ui/icons';
import {
  Flex,
  Button,
  Spacer,
  HStack,
  useToast,
  ButtonGroup,
  Center,
  Image,
  IconButton,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { ColorModeSwitcher } from '../ColorModeSwitcher';


const NavBar = () => {
  const toast = useToast();

//   const navigateToHome = () => {
//     let path = `/`;
//     navigate(path);
//   };

  return (
    <Flex as="nav" p="10px" ml="10" mb="10px" justifySelf="flex-start">
      {/* <Heading as="h1" fontSize="1.5em">
        Guard
      </Heading> */}

      <Spacer />
      <HStack spacing="20px">
        {/* <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Back to home`}
          variant="ghost"
          color="current"
          marginLeft="2"
          onClick={navigateToHome}
          icon={<FaHome />}
        /> */}
        
        <Image
          borderRadius="10px"
          boxSize="50px"
          src={'https://img.icons8.com/isometric/512/1FB141/home.png'}
          alt={'ok'}
          cursor={'pointer'}
          // onClick={navigateToHome}
        />
        {/* <ColorModeSwitcher /> */}
      </HStack>
      <Spacer />
    </Flex>
  );
}

export default NavBar;
