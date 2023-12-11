import {
  Box,
  SimpleGrid,
  Heading,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Divider,
  Button,
  Input,
  VStack,
  InputGroup,
  InputLeftElement,
  Image,
  Center,
  ScaleFade,
  ChakraProvider,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
// import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';

const IndustryList = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/industry`;
    navigate(path);
  };
  // const [isOpen, setIsOpen] = useState(true);
  const isOpen = useState(true);

  const industryList = [
    {
      name: '半導體',
      imageSrc: 'https://img.icons8.com/ios/500/FFFFFF/motherboard.png',
      alt: 'electronics',
    },
    {
      name: '生技醫療',
      imageSrc: 'https://img.icons8.com/ios/500/FFFFFF/biotech.png',
      alt: 'protein',
    },
    {
      name: '休閒娛樂',
      imageSrc: 'https://img.icons8.com/ios/500/FFFFFF/dancing.png',
      alt: 'theme-park',
    },
    {
      name: '電子商務',
      imageSrc: 'https://img.icons8.com/ios/500/FFFFFF/e-commerce.png',
      alt: 'online-order',
    },
    {
      name: '水泥',
      imageSrc: 'https://img.icons8.com/ios/500/FFFFFF/cement-bag.png',
      alt: 'cement-bag',
    },
    {
      name: '食品',
      imageSrc: 'https://img.icons8.com/ios/500/FFFFFF/bread.png',
      alt: 'kawaii-bread-1',
    },
    {
      name: '石化',
      imageSrc: 'https://img.icons8.com/ios/500/FFFFFF/oil-industry.png',
      alt: 'oil-industry',
    },
    {
      name: '金融',
      imageSrc: 'https://img.icons8.com/ios/500/FFFFFF/get-cash--v1.png',
      alt: 'coin-in-hand',
    },
    {
      name: '農',
      imageSrc: 'https://img.icons8.com/ios/500/FFFFFF/farm-2.png',
      alt: 'farm-2',
    },
    {
      name: '通信網路',
      imageSrc: 'https://img.icons8.com/ios/500/FFFFFF/talk-male.png',
      alt: 'technology-lifestyle',
    },
    {
      name: '電機機械',
      imageSrc: 'https://img.icons8.com/ios/500/FFFFFF/engine.png',
      alt: 'engine',
    },
    {
      name: '鋼鐵',
      imageSrc: 'https://img.icons8.com/ios/500/FFFFFF/steel-i-beam.png',
      alt: 'iron-man',
    },
    {
      name: '汽車',
      imageSrc: 'https://img.icons8.com/ios/500/FFFFFF/automotive.png',
      alt: 'automotive',
    },
    {
      name: '軟體服務',
      imageSrc: 'https://img.icons8.com/ios/500/FFFFFF/laptop-settings--v1.png',
      alt: 'software-box',
    },
    {
      name: '建材營造',
      imageSrc: 'https://img.icons8.com/ios/500/FFFFFF/collapse-building.png',
      alt: 'steel-i-beam',
    },
    {
      name: '交通運輸',
      imageSrc:
        'https://img.icons8.com/ios/500/FFFFFF/ground-transportation.png',
      alt: 'ground-transportation',
    },
    {
      name: '貿易百貨',
      imageSrc: 'https://img.icons8.com/ios/500/FFFFFF/market-square.png',
      alt: 'market-square',
    },
    {
      name: '製造',
      imageSrc: 'https://img.icons8.com/ios/500/FFFFFF/factory-1.png',
      alt: 'manufacturing',
    },
    {
      name: '文化創意',
      imageSrc:
        'https://img.icons8.com/ios/500/FFFFFF/multicultural-people.png',
      alt: 'racism',
    },
    {
      name: '其他',
      imageSrc:
        'https://img.icons8.com/ios/500/FFFFFF/connection-status-off.png',
      alt: 'else',
    },
  ];

  const renderIndustry = () => {
    const industries = [];
    for (const industry of industryList) {
      industries.push(
        <ScaleFade
          initialScale={0.5}
          transition={{ exit: { delay: 1 }, enter: { duration: 0.5 } }}
          in={isOpen}
        >
          <Card border="1px" borderColor="white">
            <Center>
              <VStack>
                <CardBody color="gray.500">
                  <Box
                    w="150px"
                    h="150px"
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                  >
                    <Image
                      borderRadius="10px"
                      boxSize="100px"
                      src={industry.imageSrc}
                      alt={industry.alt}
                    />
                  </Box>
                </CardBody>
                <Divider borderColor="gray.200" />
                <CardFooter h={1} marginBottom={1.5}>
                  <Center>
                    <Button
                      variant="ghost"
                      onClick={routeChange}
                      colorScheme="gray.400"
                    >
                      <Heading as="h3" size="1xl" color="white">
                        {industry.name}
                      </Heading>
                    </Button>
                  </Center>
                </CardFooter>
              </VStack>
            </Center>
          </Card>
        </ScaleFade>
      );
    }
    return industries;
  };
  return (
    <ChakraProvider>
      {/* <Box pl={'3vw'} w={'100%'} justifyContent={'flex-start'}>
        <Image
          boxSize="50px"
          margin={5}
          src={
            'https://img.icons8.com/external-nawicon-flat-nawicon/512/1FB141/external-home-ecology-nawicon-flat-nawicon.png'
          }
          alt={'home'}
          cursor={'pointer'}
          onClick={goHome}
        />
      </Box> */}
      <SimpleGrid spacing={8} maxChildWidth={300}>
        <HStack
          spacing={3}
          zIndex={2}
          width="80vw"
          rounded="10px"
          opacity="0.9"
        >
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Search2Icon color="gray.300" />
            </InputLeftElement>
            <Input type="tel" placeholder="Search" color="gray.800" />
          </InputGroup>
        </HStack>
        <HStack pl={'10px'} spacing={6} maxW="80vw" flexWrap="wrap" overflow="scroll">
          {renderIndustry()}
        </HStack>
      </SimpleGrid>
    </ChakraProvider>
  );
};

export default IndustryList;
