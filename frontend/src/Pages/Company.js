import React from 'react';
import Chart from 'react-apexcharts';
import {
  ChakraProvider,
  Box,
  Grid,
  HStack,
  Heading,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useDisclosure,
  Card,
  CardBody,
  Highlight,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormControl,
  ModalCloseButton,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const eClass = {
  options: {
    chart: {
      id: 'radar',
      foreColor: '#ffffff',
    },
    xaxis: {
      categories: [
        '能源管理',
        '溫室氣體排放',
        '水及污染管理',
        '廢棄物管理',
        '其他',
      ],
      style: {
        fontSize: '16px',
        colors: ['#FFFFFF'],
        foreColor: ['#FFFFFF'],
      },
    },
    colors: ['#A3D591'],
    tooltip: {
      theme: 'dark',
    },
  },
  series: [
    {
      name: '台積電',
      data: [60, 55, 65, 55, 60],
      style: {
        fontSize: '16px',
        colors: ['#FFFFFF'],
        foreColor: ['#FFFFFF'],
      },
    },
  ],
};

const sClass = {
  options: {
    chart: {
      id: 'radar',
    },
    xaxis: {
      categories: ['社區關係', '勞工關係', '薪酬與福利', '其他'],
    },
    tooltip: {
      theme: 'dark',
    },
  },
  series: [
    {
      name: '台積電',
      data: [74, 80, 80, 75],
      style: {
        fontSize: '16px',
        colors: ['#FFFFFF'],
        foreColor: ['#FFFFFF'],
      },
    },
  ],
};

const gClass = {
  options: {
    chart: {
      id: 'radar',
      foreColor: '#ffffff',
    },
    xaxis: {
      categories: ['商業倫理', '供應鏈管理', '其他'],
    },
    colors: ['#B85757'],
    tooltip: {
      theme: 'dark',
    },
  },
  series: [
    {
      name: '台積電',
      data: [80, 67, 57],
      style: {
        fontSize: '16px',
        colors: ['#FFFFFF'],
        foreColor: ['#FFFFFF'],
      },
    },
  ],
};

const companyBars = {
  series: [{ name: '台積電', data: [60, 98, 96] }],
  options: {
    chart: {
      type: 'bar',
      height: 400,
      foreColor: '#ffffff',
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
          fontSize: '16px',
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '16px',
        colors: ['#FFFFFF'],
      },
    },
    stroke: {
      show: true,
      width: 0,
      colors: ['#000000'],
    },
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
    xaxis: {
      categories: ['E', 'S', 'G'],
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 500,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '20px',
          fontWeight: 500,
        },
      },
    },
    colors: [
      function({ value, seriesIndex, dataPointIndex, w }) {
        if (dataPointIndex === 0) {
          return '#A3D591';
        } else if (dataPointIndex === 1) {
          return '#91D1D5';
        } else {
          return '#D59191';
        }
      },
    ],
  },
};
function Company() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/compare`;
    navigate(path);
  };
  const goHome = () => {
    let path = `/`;
    navigate(path);
  };

  const { isOpen, onToggle, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <ChakraProvider>
      <Box textAlign="center" fontSize="xl">
        <Grid textAlign="center" maxH="100vh" p={1}>
          <Heading>
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
              Overall ESG Score of 台積電
            </Highlight>
          </Heading>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="gray"
            variant="solid"
            position="fixed"
            left="77vw"
            top="12vh"
            // onClick={routeChange}
            onClick={onToggle}
            ref={finalRef}
          >
            Compare
          </Button>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader> Other Company</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  {/* <FormLabel></FormLabel> */}
                  <Input ref={initialRef} placeholder="Company Name" />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button onClick={onClose} mr={3}>
                  Cancel
                </Button>
                <Button colorScheme="blue" onClick={routeChange}>
                  Submit
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <HStack textAlign="center">
            {/* Left Section */}
            <Card w="30vw">
              <CardBody>
                <Chart
                  options={companyBars.options}
                  series={companyBars.series}
                  type="bar"
                />
              </CardBody>
            </Card>
            {/* Right Section */}
            <Tabs mt="40px" p="20px" variant="enclosed">
              <TabList>
                <Tab _selected={{ color: 'black', bg: '#A3D591' }}>
                  Environmental
                </Tab>
                <Tab _selected={{ color: 'black', bg: '#91D1D5' }}>Social</Tab>
                <Tab _selected={{ color: 'black', bg: '#D59191' }}>
                  Governance
                </Tab>
              </TabList>

              <TabPanels py="12px">
                <TabPanel>
                  <Box>
                    <Tabs
                      // index={tabIndex}
                      // onChange={handleTabsChange}
                      alignContent="left"
                      orientation="vertical"
                      // isFitted
                    >
                      <TabList>
                        <Tab>All</Tab>
                        <Tab>2023</Tab>
                        <Tab>2022</Tab>
                        <Tab>2021</Tab>
                        <Tab>2020</Tab>
                        <Tab>2019</Tab>
                        <Tab>2018</Tab>
                      </TabList>
                      <TabPanels h="50vh">
                        <TabPanel>
                          <Chart
                            options={eClass.options}
                            series={eClass.series}
                            type="radar"
                            width="500"
                          />
                        </TabPanel>
                        <TabPanel>
                          <Chart
                            options={eClass.options}
                            series={eClass.series}
                            type="radar"
                            width="500"
                          />
                        </TabPanel>
                        <TabPanel>
                          <Chart
                            options={eClass.options}
                            series={eClass.series}
                            type="radar"
                            width="500"
                          />
                        </TabPanel>
                        <TabPanel>
                          <Chart
                            options={eClass.options}
                            series={eClass.series}
                            type="radar"
                            width="500"
                          />
                        </TabPanel>
                        <TabPanel>
                          <Chart
                            options={eClass.options}
                            series={eClass.series}
                            type="radar"
                            width="500"
                          />
                        </TabPanel>
                        <TabPanel>
                          <Chart
                            options={eClass.options}
                            series={eClass.series}
                            type="radar"
                            width="500"
                          />
                        </TabPanel>
                        <TabPanel>
                          <Chart
                            options={eClass.options}
                            series={eClass.series}
                            type="radar"
                            width="500"
                          />
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box>
                    <Tabs alignContent="left" orientation="vertical">
                      <TabList>
                        <Tab>All</Tab>
                        <Tab>2023</Tab>
                        <Tab>2022</Tab>
                        <Tab>2021</Tab>
                        <Tab>2020</Tab>
                        <Tab>2019</Tab>
                        <Tab>2018</Tab>
                      </TabList>
                      <TabPanels h="50vh">
                        <TabPanel>
                          <Chart
                            options={sClass.options}
                            series={sClass.series}
                            type="radar"
                            width="500"
                          />
                        </TabPanel>
                        <TabPanel>
                          <Chart
                            options={sClass.options}
                            series={sClass.series}
                            type="radar"
                            width="500"
                          />
                        </TabPanel>
                        <TabPanel>
                          <Chart
                            options={sClass.options}
                            series={sClass.series}
                            type="radar"
                            width="500"
                          />
                        </TabPanel>
                        <TabPanel>
                          <Chart
                            options={sClass.options}
                            series={sClass.series}
                            type="radar"
                            width="500"
                          />
                        </TabPanel>
                        <TabPanel>
                          <Chart
                            options={sClass.options}
                            series={sClass.series}
                            type="radar"
                            width="500"
                          />
                        </TabPanel>
                        <TabPanel>
                          <Chart
                            options={sClass.options}
                            series={sClass.series}
                            type="radar"
                            width="500"
                          />
                        </TabPanel>
                        <TabPanel>
                          <Chart
                            options={sClass.options}
                            series={sClass.series}
                            type="radar"
                            width="500"
                          />
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box>
                    {/* <input
                      type="range"
                      min="0"
                      max="2"
                      value={tabIndex}
                      onChange={handleSliderChange}
                      orientation="vertical"
                    /> */}

                    <Tabs
                      // index={tabIndex}
                      // onChange={handleTabsChange}
                      alignContent="left"
                      orientation="vertical"
                      // isFitted
                    >
                      <TabList>
                        <Tab>All</Tab>
                        <Tab>2023</Tab>
                        <Tab>2022</Tab>
                        <Tab>2021</Tab>
                        <Tab>2020</Tab>
                        <Tab>2019</Tab>
                        <Tab>2018</Tab>
                      </TabList>
                      <TabPanels h="50vh">
                        <TabPanel>
                          <Chart
                            options={gClass.options}
                            series={gClass.series}
                            type="radar"
                            width="500"
                          />
                        </TabPanel>
                        <TabPanel>
                          <Chart
                            options={gClass.options}
                            series={gClass.series}
                            type="radar"
                            width="500"
                          />
                        </TabPanel>
                        <TabPanel>
                          <Chart
                            options={gClass.options}
                            series={gClass.series}
                            type="radar"
                            width="500"
                          />
                        </TabPanel>
                        <TabPanel>
                          <Chart
                            options={gClass.options}
                            series={gClass.series}
                            type="radar"
                            width="500"
                          />
                        </TabPanel>
                        <TabPanel>
                          <Chart
                            options={gClass.options}
                            series={gClass.series}
                            type="radar"
                            width="500"
                          />
                        </TabPanel>
                        <TabPanel>
                          <Chart
                            options={gClass.options}
                            series={gClass.series}
                            type="radar"
                            width="500"
                          />
                        </TabPanel>
                        <TabPanel>
                          <Chart
                            options={gClass.options}
                            series={gClass.series}
                            type="radar"
                            width="500"
                          />
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </HStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default Company;
