import React from 'react';
import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';
import networkgraph from 'highcharts/modules/networkgraph';
import {
  Center,
  Box,
  ChakraProvider,
  HStack,
  Heading,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack,
  Highlight,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { E } from '../Components/E.js';
import { S } from '../Components/S.js';
import { G } from '../Components/G.js';

const me = '#E2E8F0',
  downstream = '#276749',
  midstream = '#48BB78',
  upstream = '#C6F6D5';

HighchartsExporting(Highcharts);
networkgraph(Highcharts);

const options = {
  chart: {
    renderTo: 'container',
    type: 'networkgraph',
    marginTop: 20,
    height: '60%',
    innerWidth: '100%',
  },
  title: {
    text: 'IC Industrial Chain Network Graph',
  },
  plotOptions: {
    networkgraph: {
      keys: ['from', 'to'],
      layoutAlgorithm: {
        enableSimulation: true,
        integration: 'verlet',
        linkLength: 110,
        // friction: -0.9,
      },
    },
  },
  tooltip: {
    formatter: function() {
      var info = '';
      switch (this.color) {
        case midstream:
          console.log(midstream);
          info = '台積電<b>中游</b>';
          break;
        case downstream:
          console.log(downstream);
          info = '台積電<b>下游</b>';
          break;
        case upstream:
          console.log(upstream);
          info = '台積電<b>上游</b>';
          break;
        default:
          console.log('Not handled in Chain.js');
          break;
      }
      return '<b>' + this.key + '</b>: ' + info;
    },
  },
  series: [
    {
      marker: {
        radius: 10,
      },
      dataLabels: {
        enabled: true,
        linkFormat: '',
        allowOverlap: true,
        style: {
          textOutline: false,
        },
      },
      data: [
        ['光洋科 (1785)', '台積電 (2330)'],
        ['台積電 (2330)', '盟立 (2464)'],
        ['台積電 (2330)', '弘塑 (3131)'],
        ['台積電 (2330)', '京鼎 (3413)'],
        ['台積電 (2330)', '家登 (3680)'],
        ['台積電 (2330)', '日月光投控 (3711)'],
        ['台積電 (2330)', '三福化 (4755)'],
        ['台積電 (2330)', '世界 (5347)'],
        ['台積電 (2330)', '環球晶 (6488)'],
        ['台積電 (2330)', '精測 (6510)'],
        ['台積電 (2330)', '愛譜 (6531)'],
        ['台積電 (2330)', 'M31 (6643)'],
        ['台積電 (2330)', 'M31 (6643)'],
      ],
      nodes: [
        {
          id: '光洋科 (1785)',
          marker: {
            radius: 30,
          },
          color: midstream,
        },
        {
          id: '台積電 (2330)',
          marker: {
            radius: 40,
          },
          color: me,
        },
        {
          id: '盟立 (2464)',
          marker: {
            radius: 30,
          },
          color: midstream,
        },
        {
          id: '弘塑 (3131)',
          marker: {
            radius: 30,
          },
          color: midstream,
        },
        {
          id: '京鼎 (3413)',
          marker: {
            radius: 30,
          },
          color: midstream,
        },
        {
          id: '家登 (3680)',
          marker: {
            radius: 30,
          },
          color: midstream,
        },
        {
          id: '日月光投控 (3711)',
          marker: {
            radius: 30,
          },
          color: downstream,
        },
        {
          id: '三福化 (4755)',
          marker: {
            radius: 30,
          },
          color: midstream,
        },
        {
          id: '世界 (5347)',
          marker: {
            radius: 30,
          },
          color: midstream,
        },
        {
          id: '環球晶 (6488)',
          marker: {
            radius: 30,
          },
          color: midstream,
        },
        {
          id: '精測 (6510)',
          marker: {
            radius: 30,
          },
          color: downstream,
        },
        {
          id: '愛譜 (6531)',
          marker: {
            radius: 30,
          },
          color: upstream,
        },
        {
          id: 'M31 (6643)',
          marker: {
            radius: 30,
          },
          color: upstream,
        },
      ],
    },
  ],
};

const CompanySC = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    let path = `/company`;
    navigate(path);
  };
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider>
      <Heading marginBottom={8}>
        <Highlight
          query="台積電"
          styles={{
            px: '2',
            py: '1',
            rounded: '10px',
            bg: 'gray.700',
            color: 'white',
          }}
        >
          台積電供應鏈 ESG 分數
        </Highlight>
      </Heading>
      <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center>
              <Heading>Score for Social</Heading>
            </Center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody onClick={routeChange} cursor="pointer">
            <Center>
              <S h="80vh" />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
      <HStack>
        <Box
          maxh="70vh"
          w="30vw"
          p="5px"
          onClick={routeChange}
          cursor="pointer"
        >
          <VStack>
            <Heading size={'1xl'} paddingLeft={6}>
              Score for Environmental
            </Heading>
            <Center>
              <E h="50vh" />
            </Center>
          </VStack>
        </Box>
        <Box
          maxh="70vh"
          w="30vw"
          ml={'10px'}
          p="5px"
          pr={'0px'}
          cursor="pointer"
        >
          <VStack>
            <Heading size={'1xl'}>Score for Social</Heading>
            <Center>
              <S h="50vh" onClick={onOpen} />
            </Center>
          </VStack>
        </Box>
        <Box
          maxh="70vh"
          w="30vw"
          p="5px"
          pl={'0px'}
          onClick={routeChange}
          cursor="pointer"
        >
          <VStack>
            <Heading size={'1xl'}>Score for Governance</Heading>
            <Center>
              <G h="50vh" />
            </Center>
          </VStack>
        </Box>
      </HStack>
    </ChakraProvider>
  );
};

// render(<CompanySC />, document.getElementById('root'));

export default CompanySC;
