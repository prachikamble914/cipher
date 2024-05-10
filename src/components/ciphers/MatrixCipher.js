import React, { useState, useEffect } from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

// Function to encode a string using the Matrix Cipher
const encodingMatrix = {
    'A': 'Q', 'B': 'W', 'C': 'E', 'D': 'R', 'E': 'T',
    'F': 'Y', 'G': 'U', 'H': 'I', 'I': 'O', 'J': 'P',
    'K': 'A', 'L': 'S', 'M': 'D', 'N': 'F', 'O': 'G',
    'P': 'H', 'Q': 'J', 'R': 'K', 'S': 'L', 'T': 'Z',
    'U': 'X', 'V': 'C', 'W': 'V', 'X': 'B', 'Y': 'N', 'Z': 'M'
};
function encodeMatrix(str) {
    let encodedText = '';
    for (let char of str.toUpperCase()) {
        // Check if the character exists in the encoding matrix, if not, keep it unchanged
        encodedText += encodingMatrix[char] || char;
    }
    return encodedText;
}

// Function to decode a string using the Matrix Cipher
function decodeMatrix(str) {
    // Inverse mapping of the encoding matrix to find the original characters
    const decodingMatrix = Object.fromEntries(Object.entries(encodingMatrix).map(([key, value]) => [value, key]));
    let decodedText = '';
    for (let char of str.toUpperCase()) {
        // Check if the character exists in the decoding matrix, if not, keep it unchanged
        decodedText += decodingMatrix[char] || char;
    }
    return decodedText;
}

export default function MatrixCipher({ ongetInfo }) {
    const [inputText, setInputText] = useState('');
    const [inputChars, setInputChars] = useState([]);
    const [outputChars, setOutputChars] = useState([]);

    // Function to display information about the Matrix Cipher
    const showInformation = () => {
        const info = (
            <>
                <p>
                    The Matrix Cipher is a substitution cipher where each letter is replaced with another letter based on a matrix.
                </p>
                <p>To encode using the Matrix Cipher, apply the encoding algorithm.</p>
                {/* Add any additional information about the Matrix Cipher here */}
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
        const encodedStr = encodeMatrix(str);
        setInputText(str);
        setInputChars([...inputChars, str]);
        setOutputChars([...outputChars, encodedStr]);
    };
    const plaintext = "HELLO";
const encodedText = encodeMatrix(plaintext); // Encodes "HELLO" using Matrix Cipher
const decodedText = decodeMatrix(encodedText); // Decodes the encoded text back to "HELLO"
console.log("Encoded Text:", encodedText);
console.log("Decoded Text:", decodedText);

    // Function to handle decoding
    const handleDecode = (str) => {
        const decodedStr = decodeMatrix(str);
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


