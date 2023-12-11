import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  Heading,
  Button,
  Image,
  HStack,
  usePrefersReducedMotion,
  keyframes,
  theme,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Highlight } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
// import theme from '../theme';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Homepage = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/industry-list`;
    navigate(path);
  };
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 30s linear`;
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <HStack maxH="80vh" p={0}>
          {/* <Logo
            h="50vh"
            pointerEvents="none"
            position="fixed"
            left="23vw"
            top="20vh"
          /> */}
          <Image
            borderRadius="10px"
            boxSize="300px"
            src={
              'https://img.icons8.com/external-nawicon-flat-nawicon/512/1FB141/external-earth-ecology-nawicon-flat-nawicon-2.png'
            }
            alt={'home'}
            cursor={'pointer'}
            position="fixed"
            left="23vw"
            top="23vh"
            animation={animation}
          />
          <VStack spacing={4} p={10}>
            <Heading
              size="4xl"
              zIndex={1}
              position="fixed"
              left="50vw"
              top="31vh"
            >
              <Highlight
                query="ESG"
                styles={{
                  px: '2',
                  py: '1',
                  rounded: '10px',
                  color: 'green.400',
                }}
              >
                ESGer
              </Highlight>
            </Heading>
            <Text size="24px" position="fixed" left="51vw" top="42vh">
              Your ESG Consultant
            </Text>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="green"
              variant="solid"
              position="fixed"
              left="51vw"
              top="51vh"
              onClick={routeChange}
            >
              Explore
            </Button>
          </VStack>
        </HStack>
      </Box>
      <Grid
        width="100vw"
        height={50}
        backgroundColor="green.400"
        position="fixed"
        bottom={0}
        zIndex={2}
      ></Grid>
    </ChakraProvider>
  );
};
export default Homepage;
