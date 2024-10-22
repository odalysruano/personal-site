import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import ReadingPage from '../ReadingPage/ReadingPage';
import theme from '../../theme';
import './App.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reading" element={<ReadingPage />} />
      </Routes>
      <Footer></Footer>
    </ChakraProvider>
  );
}

export default App;
