// import React, { useState, useEffect } from 'react';
// import CipherFactory from '../../ui/EncryptDecrypt';

// // Function to encode a string using the Octal Cipher
// function encodeOctal(str) {
//     let encodedText = '';
//     for (let char of str) {
//         const charCode = char.charCodeAt(0);
//         const octalCharCode = charCode.toString(8);
//         encodedText += octalCharCode + ' ';
//     }
//     return encodedText.trim();
// }

// // Function to decode a string using the Octal Cipher
// function decodeOctal(str) {
//     const octalCodes = str.split(' ');
//     let decodedText = '';
//     for (let code of octalCodes) {
//         const charCode = parseInt(code, 8);
//         const char = String.fromCharCode(charCode);
//         decodedText += char;
//     }
//     return decodedText;
// }

// export default function OctalCipher({ ongetInfo }) {
//     const [inputText, setInputText] = useState('');
//     const [inputChars, setInputChars] = useState([]);
//     const [outputChars, setOutputChars] = useState([]);

//     const showInformation = () => {
//         const info = (
//             <>
//                 <p>
//                     The Octal Cipher encodes text by converting each character to its octal representation.
//                 </p>
//                 <p>To encode using the Octal Cipher, apply the encoding algorithm.</p>
//             </>
//         );
//         ongetInfo(info);
//     };

//     useEffect(() => {
//         showInformation();
//     }, []);

//     const handleEncode = (str) => {
//         const encodedStr = encodeOctal(str);
//         setInputText(str);
//         setInputChars([...inputChars, str]);
//         setOutputChars([...outputChars, encodedStr]);
//     };

//     const handleDecode = (str) => {
//         const decodedStr = decodeOctal(str);
//         setInputText(str);
//         setInputChars([...inputChars, str]);
//         setOutputChars([...outputChars, decodedStr]);
//     };

//     return (
//         <>
//             <div style={{ border: '1px solid black', padding: '10px', margin: '20px', overflow: 'scroll', height: '200px' }}>
//                 <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'arial, sans-serif' }}>
//                     <thead>
//                         <tr>
//                             <th style={{ border: '1px solid black', padding: '8px', fontSize: '20px' }}>Input Text</th>
//                             <th style={{ border: '1px solid black', padding: '8px', fontSize: '20px' }}>Output Text</th>
//                         </tr>
//                     </thead>
//                     <tbody style={{ textAlign: 'center' }}>
//                         {inputChars.map((char, index) => (
//                             <tr key={index}>
//                                 <td style={{ border: '1px solid black', padding: '8px' }}>{char}</td>
//                                 <td style={{ border: '1px solid black', padding: '8px' }}>{outputChars[index]}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//             <CipherFactory encode={handleEncode} decode={handleDecode} keyComponentA={1} />
//         </>
//     );
// }
import React, { useState } from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function OctalEncoding({ongetInfo}) {
  const [arr,setArr]=useState([])
  const [text,setText]=useState(0)
  const[text1,setText1]=useState(0)

  function encode(str) {
    let result = Number(str);
    result = (result >>> 0).toString(8);
    setArr(result.split('')); // Update array with octal digits
    setText(Number(str))
    return result;
  }

  function decode(oct) {
    let result=oct
    oct=(oct>>>0).toString(8)
    console.log(oct)
    setArr(String(oct).split('')); // Update array with decimal digits
    setText(result)
    return oct;
  }
  
      const showInformation=()=>{
        const temp=[]
        temp.push(text)
        let fin=text
        while(fin>0){
          let a=Math.floor(fin/8)
          temp.push(a)
          fin=fin/8
          fin=Math.floor(fin)
        }
        const info=(
          <>
            <p>
      Decimal to Octal Conversion is the process of converting a decimal number to its octal representation.
    </p>
    <ul>
      <li>Decimal Number: A number expressed in base-10, using digits from 0 to 9.</li>
      <li>Octal Representation: Octal is a base-8 numeral system, using digits from 0 to 7, where each digit represents a power of 8.</li>
      <li>Conversion Process: To convert a decimal number to octal, repeatedly divide the number by 8 and note the remainders, then read the remainders in reverse order to obtain the octal representation.</li>
      <li>Example: For decimal number 10, dividing by 8 yields remainders 2, 1 (reading in reverse gives octal 12).</li>
      <li>Uses: Octal representation is commonly used in computer programming and digital systems.</li>
    </ul>
          <p>Steps are as follows:-</p>
          {arr.map((value,index)=>(
      
            <li key={index}>After Modulating {temp[index]} with 8 we get {temp[index] % 8}</li>
          ))}
          <p>final Answer is after reversing what we get in our list is : {arr.join('')}</p>
          </>
        )
        ongetInfo(info)
      }

      React.useEffect(()=>{
        showInformation()
      },[arr,text])
      return (
      <>
        
        <CipherFactory encode={encode} decode={decode} />
      </>
      )


};

