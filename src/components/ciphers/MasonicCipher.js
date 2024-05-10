import React, { useState, useEffect } from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

// Object containing the Pigpen Cipher symbols for each letter
const pigpenSymbols = {
    'A': '🞂', 'B': '🞃', 'C': '🞄', 'D': '🞅', 'E': '🞆',
    'F': '🞇', 'G': '🞈', 'H': '🞉', 'I': '🞊', 'J': '🞋',
    'K': '🞌', 'L': '🞍', 'M': '🞎', 'N': '🞏', 'O': '🞐',
    'P': '🞑', 'Q': '🞒', 'R': '🞓', 'S': '🞔', 'T': '🞕',
    'U': '🞖', 'V': '🞗', 'W': '🞘', 'X': '🞙', 'Y': '🞚', 'Z': '🞛'
};

// Function to encode a string using the Pigpen Cipher
function encodePigpen(str) {
    let encodedText = '';
    for (let char of str.toUpperCase()) {
        // Check if the character exists in the Pigpen symbols, if not, keep it unchanged
        encodedText += pigpenSymbols[char] || char;
    }
    return encodedText;
}

// Function to decode a string using the Pigpen Cipher
function decodePigpen(str) {
    // Inverse mapping of the Pigpen symbols to find the original characters
    const decodingSymbols = Object.fromEntries(Object.entries(pigpenSymbols).map(([key, value]) => [value, key]));
    let decodedText = '';
    let symbol = '';
    for (let char of str) {
        // Check if the character exists in the decoding symbols, if not, keep it unchanged
        symbol += char;
        if (decodingSymbols[symbol]) {
            decodedText += decodingSymbols[symbol];
            symbol = '';
        }
    }
    return decodedText;
}

export default function PigpenCipher({ ongetInfo }) {
    const [inputText, setInputText] = useState('');
    const [inputChars, setInputChars] = useState([]);
    const [outputChars, setOutputChars] = useState([]);

    // Function to display information about the Pigpen Cipher
    const showInformation = () => {
        const info = (
            <>
                <p>
                    The Pigpen Cipher, also known as the Masonic Cipher, uses symbols to represent letters of the alphabet.
                </p>
                <p>To encode using the Pigpen Cipher, apply the encoding algorithm.</p>
                {/* Add any additional information about the Pigpen Cipher here */}
            </>
        );
        ongetInfo(info);
    };

    // useEffect hook to display information when the component mounts
    useEffect(() => {
        showInformation();
    }, []);

    // Function to handle encoding
    const handleEncode = (str) => {
        const encodedStr = encodePigpen(str);
        setInputText(str);
        setInputChars([...inputChars, str]);
        setOutputChars([...outputChars, encodedStr]);
    };

    // Function to handle decoding
    const handleDecode = (str) => {
        const decodedStr = decodePigpen(str);
        setInputText(str);
        setInputChars([...inputChars, str]);
        setOutputChars([...outputChars, decodedStr]);
    };

    return (
        <>
            <div style={{ border: '1px solid black', padding: '10px', margin: '20px', overflow: 'scroll', height: '200px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'arial, sans-serif' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid black', padding: '8px', fontSize: '20px' }}>Input Text</th>
                            <th style={{ border: '1px solid black', padding: '8px', fontSize: '20px' }}>Output Text</th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: 'center' }}>
                        {inputChars.map((char, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{char}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{outputChars[index]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <CipherFactory encode={handleEncode} decode={handleDecode} keyComponentA={1} />
        </>
    );
}

