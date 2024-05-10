import React, { useState, useEffect } from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

// Function to generate a random key of a given length
function generateKey(length) {
    let key = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        key += characters[randomIndex];
    }
    return key;
}

// Function to perform encryption using the One-Time Pad Cipher
function encryptOneTimePad(plaintext, key) {
    let ciphertext = '';
    for (let i = 0; i < plaintext.length; i++) {
        const charCode = ((plaintext.charCodeAt(i) - 65 + key.charCodeAt(i) - 65) % 26) + 65;
        ciphertext += String.fromCharCode(charCode);
    }
    return ciphertext;
}

// Function to perform decryption using the One-Time Pad Cipher
function decryptOneTimePad(ciphertext, key) {
    let plaintext = '';
    for (let i = 0; i < ciphertext.length; i++) {
        let charCode = ((ciphertext.charCodeAt(i) - 65 - (key.charCodeAt(i) - 65)) % 26) + 65;
        if (charCode < 65) {
            charCode += 26;
        }
        plaintext += String.fromCharCode(charCode);
    }
    return plaintext;
}

export default function OneTimePadCipher({ ongetInfo }) {
    const [inputText, setInputText] = useState('');
    const [inputChars, setInputChars] = useState([]);
    const [outputChars, setOutputChars] = useState([]);
    const [key, setKey] = useState('');

    const showInformation = () => {
        const info = (
            <>
                <p>
                    The One-Time Pad Cipher is a symmetric encryption algorithm that uses a randomly generated key as long as the plaintext.
                </p>
                <p>To encrypt using the One-Time Pad Cipher, apply the encryption algorithm with a randomly generated key.</p>
            </>
        );
        ongetInfo(info);
    };

    useEffect(() => {
        showInformation();
    }, []);

    const handleEncode = (str) => {
        const generatedKey = generateKey(str.length);
        const encodedStr = encryptOneTimePad(str.toUpperCase(), generatedKey);
        setInputText(str);
        setInputChars([...inputChars, str]);
        setOutputChars([...outputChars, encodedStr]);
        setKey(generatedKey);
    };

    const handleDecode = (str) => {
        const decodedStr = decryptOneTimePad(str.toUpperCase(), key);
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
                            <th style={{ border: '1px solid black', padding: '8px', fontSize: '20px' }}>Key</th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: 'center' }}>
                        {inputChars.map((char, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{char}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{outputChars[index]}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{key}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <CipherFactory encode={handleEncode} decode={handleDecode} keyComponentA={1} />
        </>
    );
}
