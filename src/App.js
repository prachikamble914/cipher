import React,{useState} from "react";
import { Layout, Menu, Typography, Watermark, Spin } from 'antd';


import lodash from 'lodash'
import AtbashCipher from "./components/ciphers/atbash"
import CaesarCipher from "./components/ciphers/caesar";
import BinaryEncoding from "./components/ciphers/binary";
import AffineCipher from "./components/ciphers/AffineCipher";
import BookCipher from "./components/ciphers/BookCipher";
import MasonicCipher from "./components/ciphers/MasonicCipher";
import MatrixCipher from "./components/ciphers/MatrixCipher";
import MorseCipher from "./components/ciphers/MorseCipher";
import OctalCipher from "./components/ciphers/OctalCipher";
import OneTimePadCipher from "./components/ciphers/OneTimePadCipher";
import OmnibookCipher from "./components/ciphers/OmnibookCipher";
import PermutationCipher from "./components/ciphers/PermutationCipher";
import PigpenCipher from "./components/ciphers/PigpenCipher";
import PolybiusSquareCipher from "./components/ciphers/PolybiusSquareCipher";
import PortaCipher from "./components/ciphers/PortaCipher";
import QuadraticCipher from "./components/ciphers/QuadraticCipher";
import QuagmireCipher from "./components/ciphers/ QuagmireCipher";
import RailfenceCipher from "./components/ciphers/RailfenceCipher";
import RosicrucianCipher from "./components/ciphers/RosicrucianCipher";
import ROT13Cipher from "./components/ciphers/ROT13Cipher";
import ROT18Cipher from "./components/ciphers/ROT18Cipher";
import ROT47Cipher from "./components/ciphers/ROT47Cipher";
import NullCipher from "./components/ciphers/NullCipher";
import NihilistSubstituionCipher from "./components/ciphers/NihilistSubstituionCipher";
import NihilistCipher from "./components/ciphers/ NihilistCipher";
import ColumnarTranspositionCipher from "./components/ciphers/ColumnarTranspositionCipher";
import DaggersCipher from "./components/ciphers/DaggersCipher";
import DancingMenCipher from "./components/ciphers/DancingMenCipher";
import ElianScriptCipher from "./components/ciphers/ElianScriptCipher";
import EnigmaMachineCipher from "./components/ciphers/EnigmaMachineCipher";
import FlessnerCipher from "./components/ciphers/FlessnerCipher";
import FourSquareCipher from "./components/ciphers/FourSquareCipher";
import FractionatedMorseCipher from "./components/ciphers/FractionatedMorseCipher";
import GlovanBattistaBellasoCipher from "./components/ciphers/ GlovanBattistaBellasoCipher";
import GrayCodeCipher from "./components/ciphersGrayCode/Cipher";
import GronsfeldCipher from "./components/ciphers/GronsfeldCipher";
import HeadlinesCipher from "./components/ciphers/HeadlinesCipher";
import HexCodeCipher from "./components/ciphers/HexCodeCipher";
import HillCipher from "./components/ciphers/HillCipher";
import HomophonicSubstitutionCipher from "./components/ciphers/ HomophonicSubstitutionCipher";
import ImperialCipher from "./components/ciphers/ImperialCipher";
import JuliusCaesarCipher from "./components/ciphers/ JuliusCaesarCipher";
import KeywordCipher from "./components/ciphers/KeywordCipher";
import LarrabeeCipher from "./components/ciphers/LarrabeeCipher";
import DoubleTranspositionCipher from "./components/ciphers/DoubleTranspositionCipher";

import {InfoCircleOutlined} from '@ant-design/icons';
const { Content, Header } = Layout
const { Title } = Typography;

const App = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showEncrypt,setShowEncrypt]=useState(false)
  const [showDecrypt,setShowDecrypt]=useState(false)
  const [cipherInfo, setCipherInfo] = useState('');
  const [encryptInfo, setEncryptInfo] = useState('');
  const [decryptInfo, setDecryptInfo] = useState('');

  const toggleInfo=()=>{
      setShowInfo(!showInfo)

  }
  const toggleEncrypt=()=>{
      setShowEncrypt(!showEncrypt)
  }
  const toggleDecrypt=()=>{
    setShowDecrypt(!showDecrypt)
  }

  const items = [
    ['Caesar Cipher', <CaesarCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo}/>],
    ['Atbash Cipher', <AtbashCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['Binary Conversion', <BinaryEncoding ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo}/>],
    ['Affine Cipher', <AffineCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['Book Cipher', <BookCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['Masonic Cipher', <MasonicCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['Matrix Cipher', <MatrixCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['Morse Cipher', <MorseCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['Octal Cipher', <OctalCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['OneTimePad Cipher', <OneTimePadCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['Omnibook Cipher', <OmnibookCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['Permutation Cipher', <PermutationCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['Pigpen Cipher', <PigpenCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['PolybiusSquare Cipher', <PolybiusSquareCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['Porta Cipher', <PortaCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['Quadratic Cipher', <QuadraticCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['Quagmire Cipher', <QuagmireCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['Rosicrucian Cipher', <RosicrucianCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['ROT13 Cipher', <ROT13Cipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['ROT18 Cipher', <ROT18Cipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['ROT47 Cipher', <ROT47Cipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['Null Cipher', <NullCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['Nihilist Cipher', <NihilistCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['NihilistSubstitution Cipher', <NihilistSubstituionCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['ColumnarTransposition Cipher', <ColumnarTranspositionCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['Daggers Cipher', <DaggersCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['DancingMen Cipher', <DancingMenCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['DoubleTransposition Cipher', <DoubleTranspositionCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['ElianScript Cipher', <ElianScriptCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['EnigmaMachine Cipher', <EnigmaMachineCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['Flessner Cipher', <FlessnerCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['FourSquare Cipher', <FourSquareCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['FractionatedMorse Cipher', <FractionatedMorseCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['GlovanBattistaBellaso Cipher', <GlovanBattistaBellasoCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['GrayCode Cipher', <GrayCodeCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['Gronsfeld Cipher', <GronsfeldCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['Headlines Cipher', <HeadlinesCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['HexCode Cipher', <HexCodeCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['Hill Cipher', <HillCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['HomophonicSubstitution Cipher', <HomophonicSubstitutionCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['Imperial Cipher', <ImperialCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['JuliusCaesar Cipher', <JuliusCaesarCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['Keyword Cipher', <KeywordCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />], 
    ['Larrabee Cipher', <LarrabeeCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
    ['RailFence Cipher', <RailfenceCipher ongetInfo={setCipherInfo} onEncryptInfo={setEncryptInfo} onDecryptInfo={setDecryptInfo} />],
   
  ]

  const defaultSelectedIndex = 0;
  const [current, setCurrent] = useState(defaultSelectedIndex);
  const [comp, setComp] = useState(items[defaultSelectedIndex][1]);
  const [title, setTitle] = useState(items[defaultSelectedIndex][0]);

  const onClick = (e) => {
    setCurrent(e.key);
    let k = Number(e.key);
    setComp(items[k][1]); setTitle(items[k][0]);
  };

  return (
    <>
   <Layout >
    <Header style={{textAlign: 'center',color: '#fff', fontSize: 16}}> EN | CRYPTO | DE  <Spin /> PlayGround </Header>
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items.map((ele, index) => ({ label: ele[0], key: index }))} />
    <Watermark content="ICY Labs">
      <Content style={{ padding: '50px'}}>
      <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center' }}>
              <Title style={{ textAlign: 'center', margin: 0 }} underline level={1} type={lodash.sample(['danger', 'success', 'warning'])}>{title}</Title>
              
                <InfoCircleOutlined height={'2em'} onClick={() => { toggleInfo()}} style={{ marginTop:'20px',marginLeft:'3px' }}/>
                <button onClick={()=>{toggleEncrypt()}}>Show Encrypt</button>
                <button onClick={()=>{toggleDecrypt()}}>Show Decrypt</button>

            
            </div>
      {
        showInfo&& <p>{cipherInfo}</p>
      }
      {
        showEncrypt && <p>{encryptInfo}</p>
      }
      {
        showDecrypt && <p>{decryptInfo}</p>
      }
        <div>
          {comp}
        </div>
      </Content>
      
    </Watermark>
  </Layout>
  
    </>

  );
};

export default App;