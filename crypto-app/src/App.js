import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';

import { InputLabel, TextField } from '@mui/material';

function App() {
  return (
    <div className="">
      <div className="flex flex-col w-screen h-screen bg-no-repeat bg-cover md:flex-row items-centre bg-hero">
          <h2 className="pb-16 pl-10 mx-auto mt-8 mr-5 text-5xl text-white md:text-6xl sm:ml-10 sm:mt-12 md:mt-40 md: lg:mt-44 md:border-t-2 md:border-b-2 sm:p-10 lg:max-w-lg md:max-w-md lg:text-7xl md:ml-20 lg:ml-30 md:my-auto xs:mt-20 broder-white font-nunito md:pb-0">
          I Lost Weight With Crypto.
          </h2>
          <Container  maxWidth="xs" maxHeight=""  className="flex flex-row float-left mr-0 bg-black opacity-80 md:mt-24 h-3/4 lg:mt-24 ">
            
          
          </Container>
      </div>
      
     
    </div>


  );
}

export default App;
