import React, { useState, useEffect } from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
    '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', ' ': '/'
};

function encodeMorse(str) {
    let encodedText = '';
    for (let char of str.toUpperCase()) {
        encodedText += morseCode[char] || '';
    }
    return encodedText;
}

function decodeMorse(str) {
    let decodedText = '';
    const morseReverse = Object.fromEntries(Object.entries(morseCode).map(([key, value]) => [value, key]));
    const words = str.split('/');
    for (let word of words) {
        const letters = word.split(' ');
        for (let letter of letters) {
            decodedText += morseReverse[letter] || '';
        }
        decodedText += ' ';
    }
    return decodedText.trim();
}

export default function MorseCipher({ ongetInfo }) {
    const [inputText, setInputText] = useState('');
    const [inputChars, setInputChars] = useState([]);
    const [outputChars, setOutputChars] = useState([]);

    const showInformation = () => {
        const info = (
            <>
                <p>
                    The Morse Cipher encodes text using dots and dashes to represent each letter.
                </p>
                <p>To encode using the Morse Cipher, apply the encoding algorithm.</p>
            </>
        );
        ongetInfo(info);
    };

    useEffect(() => {
        showInformation();
    }, []);

    const handleEncode = (str) => {
        const encodedStr = encodeMorse(str);
        setInputText(str);
        setInputChars([...inputChars, str]);
        setOutputChars([...outputChars, encodedStr]);
    };

    const handleDecode = (str) => {
        const decodedStr = decodeMorse(str);
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
