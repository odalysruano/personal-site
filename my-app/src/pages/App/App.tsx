import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import MyHomePage from '../MyHomePage/MyHomePage';

function App() {
  return (
    <ChakraProvider>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<MyHomePage />} />
      </Routes>
      <Footer></Footer>
    </ChakraProvider>
  );
}

export default App;
