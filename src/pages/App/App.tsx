import { ChakraProvider, Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import MemifyPage from '../MemifyPage/MemifyPage';
import MyCareerPage from '../MyCareerPage/MyCareerPage';
import MyWorkPage from '../MyWorkPage/MyWorkPage';
import ReadingPage from '../ReadingPage/ReadingPage';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import reading24 from '../../constants/reading24';
import reading25 from '../../constants/reading25';
import theme from '../../theme';
import './App.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ScrollToTop />
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <NavBar />
        <Box flex ="1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/memify" element={<MemifyPage />} />
            <Route path="/career" element={<MyCareerPage />} />
            <Route path="/work" element={<MyWorkPage />} />
            <Route path="/reading2024" element={<ReadingPage props={reading24} />} />
            <Route path="/reading2025" element={<ReadingPage props={reading25} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
