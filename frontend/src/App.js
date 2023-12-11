import React from 'react';
import { ChakraProvider, Box, VStack, Grid } from '@chakra-ui/react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Compare from './Pages/Compare';
import IndustryList from './Pages/IndustryList';
import Industry from './Pages/Industry';
import Homepage from './Pages/Homepage';
import CompanySC from './Pages/CompanySC';
import Company from './Pages/Company';
// import RootLayout from './Layouts/'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Homepage />} />
      <Route path="home" element={<Homepage />} />
      <Route path="industry-list" element={<IndustryList />} />
      <Route path="industry" element={<Industry />} />
      <Route path="company-supply-chain" element={<CompanySC />} />
      <Route path="company" element={<Company />} />
      <Route path="compare" element={<Compare />} />
      {/* <Route path="chain-block" element={<ChainBlock />} /> */}
    </Route>
  )
);

const App = () => {
  // const navigate = useNavigate();

  return (
    <ChakraProvider>
      <Box textAlign="center" fontSize="xl">
        <Grid maxH="80vh" p={10}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack>
            <RouterProvider router={router} />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default App;
