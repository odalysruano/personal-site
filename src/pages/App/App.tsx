import { ChakraProvider, Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import ReadingPage from '../ReadingPage/ReadingPage';
import * as Data24 from '../../constants/readingPage24';
import theme from '../../theme';
import './App.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <NavBar />
        <Box flex ="1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reading" element={<ReadingPage year={Data24.year24} summary={Data24.summary24} bookList={Data24.bookList24} audiobookList={Data24.audiobookList24} />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
