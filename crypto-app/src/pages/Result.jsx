import { useParams } from "react-router";
import { Component, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
function Result() {
  const { b } = useParams();
 
  let history = useHistory();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [volume_1day_usd, setVolume_1day_usd] = useState("");
  const [volume_1hrs_usd, setVolume_1hrs_usd] = useState("");
  const [symbol, setSymbol] = useState("");
  const[type,setType]=useState("");
 
  const site =
    "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_128/";
  async function getUsers() {
   try{
    const inst=await axios.get(
      `https://rest.coinapi.io/v1/assets/${b}?apikey=95C60F55-CE57-44A0-A0F1-F4DE9DEBFB4C`
    )
    console.log(inst.data[0]);
    setImage((inst.data[0].id_icon).replaceAll("-", ""));
    setName(inst.data[0].name);
    setPrice(inst.data[0].price_usd);
    setVolume_1day_usd(inst.data[0].volume_1day_usd);
    setVolume_1hrs_usd(inst.data[0].volume_1hrs_usd);
    setSymbol(inst.data[0].asset_id);
    setType(inst.data[0].type_is_crypto)
   }catch (error) { 
     alert("Wrong entry");
    history.push(`/`);
   }
  }
  
  useEffect(() => {
   
    const interval = setInterval(() => {
      getUsers();
   }, 2000);
   return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen">
      <div className="flex flex-col w-screen mx-auto mt-24 sm:flex-row bg-gradient-to-r from-purple-500 to-purple-200 sm:h-60 h-70">
        <img src={site + image + ".png"} alt={name} className="w-44 sm:w-60 "/>
        <div className="p-5 my-auto text-3xl font-semibold text-white">
          <p className="text-lg">Symbol : {symbol}</p>
          <h1>{name}</h1>
          <h2 className="text-sm sm:text-xl ">Usd: {"$" + price}</h2>
        </div>
        <div className="p-10 my-auto text-3xl font-semibold text-white">
            <label>Type of crypto</label>
            <h1>{type}</h1>
        </div>
        <div className="p-10 my-auto text-3xl font-semibold text-white">
            <label>Volume 1hr Usd</label>
            <h1 className="text-sm sm:text-xl">{"$"+volume_1hrs_usd}</h1>
        </div>
      </div>
      <div className="flex flex-row w-screen mx-auto bg-gradient-to-r from-yellow-500 to-yellow-200 h-60">
        <div className="flex flex-col p-5 mx-auto text-3xl font-semibold text-white">
          <img src="../ok.png" alt="dvjb" className="mx-auto" />
          <label className="text-blue-600">Volume 1day Usd</label>
          <h1 className="mx-auto text-sm sm:text-xl">{"$" + volume_1day_usd}</h1>
        </div>
      </div>
    </div>
  );
}
export default Result;
