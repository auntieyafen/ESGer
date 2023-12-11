import {
  Box,
  SimpleGrid,
  Heading,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  ButtonGroup,
  ChakraProvider,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

// IC 設計公司列表
const logicChipList = [
  '聯發科 (2454)',
  '聯詠 (3034)',
  '義隆 (2458)',
  '矽創 (8016)',
  '群聯 (8299)',
  '瑞昱 (2379)',
  '瑞鼎 (3592)',
  '敦泰 (3545)',
  '揚智 (3041)',
  '祥碩 (5269)',
  '譜瑞-KY (4966)',
  '矽力-KY (6415)',
  '奇景 (HIMX.ADR)',
]; // 邏輯晶片
const microChipList = [
  '聯發科 (2454)',
  '威盛 (2388)',
  '凌陽 (2401)',
  '盛群 (6202)',
]; // 微元件晶片
const memoryList = ['晶豪科 (3006)', '愛譜 (6531)', '鈺創 (5351)']; // 記憶體
const analogyChipList = [
  '茂達 (6138)',
  '致新 (8081)',
  '聯發科 (2454)',
  '類比科 (3438)',
  '富鼎 (8261)',
]; // 類比晶片
const ipDesign = [
  'M31 (6643)',
  '智元 (3035)',
  '力旺 (3529)',
  '晶心科 (6533)',
  '創意 (3443)',
]; //  IP 設計

// IC 製造公司列表
const equipmentList = [
  '家登 (3680)',
  '京鼎 (3413)',
  '盟立 (2464)',
  '意德士 (7556)',
  '弘塑 (3131)',
  '漢辰科技',
]; // 製造設備
const foundryList = [
  '台積電 (2330)',
  '穩懋 (3105)',
  '聯電 (2303)',
  '力積電 (6770)',
  '世界 (5347)',
  '元隆 (6287)',
  '宏捷科 (8086)',
  '茂矽 (2342)',
  '新唐 (4919)',
  '漢磊 (3707)',
  '敦南',
]; // 晶圓代工
const memoryProduceList = ['旺宏 (2337)', '華邦電 (2344)', '南亞科 (2408)']; // 記憶體製造
const materialWaferList = [
  '環球晶 (6488)',
  '嘉晶 (3016)',
  '合晶 (6182)',
  '台勝科 (3532)',
  '信越半導體',
]; // 製造材料 - 矽晶圓
const materialReticleList = ['光罩 (2338)', '台灣美日先進']; // 製造材料 - 光罩
const materialChemicalList = [
  '長興 (1717)',
  '永光 (1711)',
  '三福化 (4755)',
  '長春石化',
  '聯華氣體',
]; // 製造材料 - 化學品
const materialMetalList = ['鑫科 (3663)', '光洋科 (1785)', '益瑞']; // 製造材料 - 金屬靶材

// IC 封測公司列表
const chipPackList = [
  '日月光投控 (3711)',
  '頎邦 (6147)',
  '華東 (8110)',
  '南茂 (8150)',
  '力成 (6239)',
]; // 晶片封裝
const chipTestList = [
  '日月光投控 (3711)',
  '京元電子 (2449)',
  '力成 (6239)',
  '欣銓 (3264)',
  '矽格 (6257)',
]; // 晶片測試
const chipTestEquipmentList = [
  '精測 (6510)',
  '德律 (3030)',
  '致茂 (2360)',
  '雍智科技 (6683)',
]; // 晶片測試設備
const chipPackBoardList = ['欣興 (3037)', '景碩 (3189)', '南電 (8046)']; // 晶片封裝材料 — IC 載板
const chipMoldPackList = ['長興 (1717)', '崇越 (5434)', '長春石化']; // 晶片封裝材料 — 模封材料
const solderBallList = ['業強 (6124)', '昇貿 (3305)', '恆碩']; // 晶片封裝材料 — 錫球
const goldThreadList = ['長華 (8070)', '致茂 (2360)']; // 晶片封裝材料 — 金線
const leadFrameList = ['長華 (8070)']; // 晶片封裝材料 — 導線架
const chipPackEquipmentList = ['弘塑 (3131)', '均豪 (5443)', '基丞科技']; // 晶片封裝材料 — 晶片封裝設備

const Industry = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/company-supply-chain`;
    navigate(path);
  };

  const renderCompanyList = companyClassList => {
    // console.log(companyClassList);
    const companies = [];
    for (const company of companyClassList) {
      companies.push(
        <ButtonGroup>
          <Button
            colorScheme="blue"
            variant="link"
            onClick={routeChange}
            w="10vw"
          >
            {company}
          </Button>
        </ButtonGroup>
      );
    }
    return companies;
  };

  return (
    <ChakraProvider>
      <SimpleGrid spacing={8} maxChildWidth={300}>
        <Heading marginBottom={4}>半導體產業鍊</Heading>
        <HStack
          spacing={10}
          maxW="80vw"
          flexWrap="wrap"
          overflow="visible"
          paddingLeft={4}
          paddingRight={2}
        >
          <Box w="22vw" h="80vh">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="center">
                    <Heading size="1xl">上游：IC 設計</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                      <AccordionButton bg="gray.900">
                        <Box as="span" flex="1" textAlign="center">
                          <Heading size="1xl">邏輯晶片</Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        {renderCompanyList(logicChipList)}
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionButton bg="gray.900">
                        <Box as="span" flex="1" textAlign="center">
                          <Heading size="1xl">IP 設計</Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        {renderCompanyList(ipDesign)}
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionButton bg="gray.900">
                        <Box as="span" flex="1" textAlign="center">
                          <Heading size="1xl">微元件晶片</Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        {renderCompanyList(microChipList)}
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionButton bg="gray.900">
                        <Box as="span" flex="1" textAlign="center">
                          <Heading size="1xl">記憶體</Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        {renderCompanyList(memoryList)}
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionButton bg="gray.900">
                        <Box as="span" flex="1" textAlign="center">
                          <Heading size="1xl">類比晶片</Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4} bg="gray.800">
                        {renderCompanyList(analogyChipList)}
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box w="22vw" h="80vh">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="center">
                    <Heading size="1xl">中游：IC 製造</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                      <AccordionButton bg="gray.900">
                        <Box as="span" flex="1" textAlign="center">
                          <Heading size="1xl">晶圓代工</Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        {renderCompanyList(foundryList)}
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionButton bg="gray.900">
                        <Box as="span" flex="1" textAlign="center">
                          <Heading size="1xl">記憶體製造</Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        {renderCompanyList(memoryProduceList)}
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionButton bg="gray.900">
                        <Box as="span" flex="1" textAlign="center">
                          <Heading size="1xl">製造設備</Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        {renderCompanyList(equipmentList)}
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionButton bg="gray.900">
                        <Box as="span" flex="1" textAlign="center">
                          <Heading size="1xl">製造材料</Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4} bg="gray.800">
                        <Accordion defaultIndex={[0]} allowMultiple>
                          <AccordionItem>
                            <AccordionButton bg="gray.900">
                              <Box as="span" flex="1" textAlign="center">
                                <Heading size="1xl">矽晶圓</Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                              {renderCompanyList(materialWaferList)}
                            </AccordionPanel>
                          </AccordionItem>
                          <AccordionItem>
                            <AccordionButton bg="gray.900">
                              <Box as="span" flex="1" textAlign="center">
                                <Heading size="1xl">光罩</Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                              {renderCompanyList(materialReticleList)}
                            </AccordionPanel>
                          </AccordionItem>
                          <AccordionItem>
                            <AccordionButton bg="gray.900">
                              <Box as="span" flex="1" textAlign="center">
                                <Heading size="1xl">化學品</Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                              {renderCompanyList(materialChemicalList)}
                            </AccordionPanel>
                          </AccordionItem>
                          <AccordionItem>
                            <AccordionButton bg="gray.900">
                              <Box as="span" flex="1" textAlign="center">
                                <Heading size="1xl">金屬靶材</Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4} bg="gray.800">
                              {renderCompanyList(materialMetalList)}
                            </AccordionPanel>
                          </AccordionItem>
                        </Accordion>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box w="22vw" h="80vh">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="center">
                    <Heading size="1xl">下游：IC 封裝</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                      <AccordionButton bg="gray.900">
                        <Box as="span" flex="1" textAlign="center">
                          <Heading size="1xl">晶片封裝</Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        {renderCompanyList(chipPackList)}
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionButton bg="gray.900">
                        <Box as="span" flex="1" textAlign="center">
                          <Heading size="1xl">晶片測試</Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        {renderCompanyList(chipTestList)}
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionButton bg="gray.900">
                        <Box as="span" flex="1" textAlign="center">
                          <Heading size="1xl">晶片測試設備</Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        {renderCompanyList(chipTestEquipmentList)}
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionButton bg="gray.900">
                        <Box as="span" flex="1" textAlign="center">
                          <Heading size="1xl">晶片封裝設備</Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        {renderCompanyList(chipPackEquipmentList)}
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionButton bg="gray.900">
                        <Box as="span" flex="1" textAlign="center">
                          <Heading size="1xl">晶片封裝材料</Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4} bg="gray.800">
                        <Accordion defaultIndex={[0]} allowMultiple>
                          <AccordionItem>
                            <AccordionButton bg="gray.900">
                              <Box as="span" flex="1" textAlign="center">
                                <Heading size="1xl">IC 載板</Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                              {renderCompanyList(chipPackBoardList)}
                            </AccordionPanel>
                          </AccordionItem>
                          <AccordionItem>
                            <AccordionButton bg="gray.900">
                              <Box as="span" flex="1" textAlign="center">
                                <Heading size="1xl">模封材料</Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                              {renderCompanyList(chipMoldPackList)}
                            </AccordionPanel>
                          </AccordionItem>
                          <AccordionItem>
                            <AccordionButton bg="gray.900">
                              <Box as="span" flex="1" textAlign="center">
                                <Heading size="1xl">錫球</Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                              {renderCompanyList(solderBallList)}
                            </AccordionPanel>
                          </AccordionItem>
                          <AccordionItem>
                            <AccordionButton bg="gray.900">
                              <Box as="span" flex="1" textAlign="center">
                                <Heading size="1xl">金屬</Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4} bg="gray.800">
                              {renderCompanyList(goldThreadList)}
                            </AccordionPanel>
                          </AccordionItem>
                          <AccordionItem>
                            <AccordionButton bg="gray.900">
                              <Box as="span" flex="1" textAlign="center">
                                <Heading size="1xl">導線架</Heading>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4} bg="gray.800">
                              {renderCompanyList(leadFrameList)}
                            </AccordionPanel>
                          </AccordionItem>
                        </Accordion>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </HStack>
      </SimpleGrid>
    </ChakraProvider>
  );
};

export default Industry;
