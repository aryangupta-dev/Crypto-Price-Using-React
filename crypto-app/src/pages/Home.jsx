import React from "react";

import { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";
function Home() {
  let history = useHistory();
  const [eth, setEth] = useState([]);
  const [bit, setBit] = useState([]);
  const [dog, setDoge] = useState([]);
  const [lun, setLuna] = useState([]);
  const [loop, setLoop] = useState([]);
  const [rip, setRip] = useState([]);
  const [input,setInput]=useState("");
  const site =
    "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_128/";
  const bitcoin = "4caf2b16a0174e26a3482cea69c34cba.png";
  const etherum = "604ae4533d9f4ad09a489905cce617c2.png";
  const luna = "855b602c464d4ce2a149a622cbef75e0.png";
  const doge = "63e240f3047f41c791796784bc719f63.png";
  const ripple = "ba90bcb0cafb4801ac5dd310f47d6411.png";
  const loopring = "abd4f81bcc5d43709c01f4c699cd270c.png";
  const b = "BTC";
  const o = "LRC";
  const d = "DOGE";
  const e = "ETH";
  const r = "XRP";
  const l = "LUNA";
  const submit=()=>{
    try{
    history.push(`/result/${input}`);}catch(error){
      
    }
  }
  const Bitcoin = () => {
   
    history.push(`/result/${b}`);
  };
  const Luna = () => {
   
    history.push(`/result/${l}`);
  };
  const Ripple = () => {
    
    history.push(`/result/${r}`);
  };
  const Etherum = () => {
    
    history.push(`/result/${e}`);
  };
  const Doge = () => {
    
    history.push(`/result/${d}`);
  };
  const Loop = () => {
    
    history.push(`/result/${o}`);
  };
  useEffect(() => {}, []);
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex flex-col w-screen h-screen bg-no-repeat bg-cover md:flex-row items-centre bg-hero">
        <h2 className="pb-10 pl-10 mx-auto mt-8 mr-5 text-4xl text-white md:text-6xl sm:ml-10 md:mt-40 lg:mt-44 md:border-t-2 md:border-b-2 sm:p-10 lg:max-w-lg md:max-w-md lg:text-7xl md:ml-20 lg:ml-30 md:my-auto xs:mt-20 broder-white font-nunito md:pb-0">
          I Lost Weight With Crypto.
        </h2>

        <div className="flex flex-col w-4/5 p-4 mx-auto my-auto border-2 border-white rounded-sm opacity-90 md:w-2/5 md:h-3/4 h-3/5 bg-gradient-to-r from-blue-500 to-transparent">
          <img
            src="https://www.codester.com/static/uploads/items/000/022/22767/preview-xl.jpg"
            alt="Logo"
            className="w-3/4 mx-auto h-2/5"
          />
          <label
            htmlFor="curyInput"
            className="px-2 py-3 mx-auto mt-20 font-mono text-3xl font-bold text-white "
          >
            Crypto Currency
          </label>
          <input
            type="text"
            id="curyInput"
            className="px-2 py-3 mx-auto mt-5 text-black rounded-md "
            placeholder="Ex..BTC,ETH"
            onChange={(event)=>setInput(event.target.value)}
          />
          <button
            type="submit"
            className="px-16 py-2 mx-auto mt-10 text-blue-500 bg-white rounded-md opacity-100"
            onClick={submit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-20 bg-white h-2/4">
        <h1 className="flex pb-4 mx-auto mb-10 text-3xl border-b-2 border-gray-900 sm:text-5xl font-noto">
          Most Watched Currencies
        </h1>
        <div className="flex flex-col pb-12 mx-auto border-b border-gray-400 sm:flex-row">
          <div
            onClick={Bitcoin}
            className="flex flex-col items-center w-screen p-10 mb-6 border-2 border-gray-300 shadow-lg sm:p-20 sm:w-2/4 h-2/4 rounded-xl sm:mt-0 bg-gradient-to-r from-gray-500 hover:from-green-200 to-transparent "
          >
            <img src={site + bitcoin} alt="BTC" />
            <p className="text-xl">Bitcoin</p>
          </div>
          <div
            onClick={Etherum}
            className="flex flex-col items-center p-10 mb-6 border-2 border-gray-300 shadow-lg sm:p-20 sm:w-2/4 md:ml-16 h-2/4 rounded-xl hover: bg-gradient-to-r from-blue-500 hover:from-red-400 to-transparent"
          >
            <img src={site + etherum} alt="etherum" />
            <p className="text-xl text-white sm:text-3xl">Etherum</p>
          </div>
          <div
            onClick={Doge}
            className="flex flex-col items-center p-10 mb-6 border-2 border-gray-300 shadow-lg sm:p-20 sm:w-2/4 md:ml-16 h-2/4 rounded-xl hover: bg-gradient-to-r from-gray-500 hover:from-green-200 to-transparent"
          >
            <img src={site + doge} alt="doge" />
            <p className="text-xl">DogeCoin</p>
          </div>
        </div>

        <div className="flex flex-col pt-8 pb-12 mx-auto mt-10 bg-black border-b-2 border-white sm:flex-row">
          <h1 className="flex pb-4 my-auto mb-10 text-xl text-white sm:text-4xl font-nunito">
            Most profitable Currencies from last month
          </h1>
          <div
            onClick={Ripple}
            className="flex flex-col items-center w-screen p-10 mb-6 border-2 border-gray-300 shadow-lg sm:p-16 sm:w-1/4 h-2/4 rounded-xl sm:mt-0 bg-gradient-to-r from-gray-500 hover:from-green-200 to-white "
          >
            <img src={site + ripple} alt="XRC" />
            <p className="text-xl">Ripple</p>
          </div>
          <div
            onClick={Luna}
            className="flex flex-col items-center p-10 mb-6 border-2 border-gray-300 shadow-lg sm:p-16 sm:w-1/4 md:ml-16 h-2/4 rounded-xl hover: bg-gradient-to-r from-blue-500 hover:from-red-400 to-white"
          >
            <img src={site + luna} alt="Luna" />
            <p className="text-xl text-white sm:text-3xl">Luna</p>
          </div>
          <div
            onClick={Loop}
            className="flex flex-col items-center p-10 mb-6 border-2 border-gray-300 shadow-lg sm:p-16 sm:w-1/4 md:ml-16 h-2/4 rounded-xl hover: bg-gradient-to-r from-gray-500 hover:from-green-200 to-white"
          >
            <img src={site + loopring} alt="Lrc" />
            <p className="text-xl">Loopring</p>
          </div>
        </div>
        <div>
          <h1></h1>
        </div>
      </div>
      <div className="flex flex-col items-center py-10 bg-purple-500">
      <h1  className="text-2xl font-bold text-white">Do follow this link if want crypto symbol doc.</h1>
      <a href="https://www.coinapi.io/integration#assets my-5 " className="flex px-4 py-2 mx-auto mt-5 text-xl bg-yellow-300 rounded-lg">Cryto Symbols</a></div>
    </div>
  );
}

export default Home;
