
import React, { useState } from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function RailfenceCipher({ ongetInfo }) {
  const [arr, setArr] = useState([]);
  const [text, setText] = useState('');

  // Function to encode a message using the Railfence Cipher
  function encodeRailfence(message, rails) {
    const fence = [];
    for (let i = 0; i < rails; i++) {
      fence.push([]);
    }
    let rail = 0;
    let direction = 1;
    for (let char of message) {
      fence[rail].push(char);
      rail += direction;
      if (rail === rails - 1 || rail === 0) {
        direction = -direction;
      }
    }
    const encodedMessage = fence.flat().join('');
    setArr(encodedMessage.split(''));
    setText(message);
    return encodedMessage;
  }

  // Function to decode a message using the Railfence Cipher
  function decodeRailfence(encodedMessage, rails) {
    const fence = [];
    for (let i = 0; i < rails; i++) {
      fence.push([]);
    }
    let rail = 0;
    let direction = 1;
    for (let i = 0; i < encodedMessage.length; i++) {
      fence[rail].push('');
      rail += direction;
      if (rail === rails - 1 || rail === 0) {
        direction = -direction;
      }
    }
    let index = 0;
    for (let i = 0; i < rails; i++) {
      for (let j = 0; j < encodedMessage.length; j++) {
        if (fence[i][j] === '') {
          fence[i][j] = encodedMessage[index++];
        }
      }
    }
    let decodedMessage = '';
    rail = 0;
    direction = 1;
    for (let i = 0; i < encodedMessage.length; i++) {
      decodedMessage += fence[rail][i];
      rail += direction;
      if (rail === rails - 1 || rail === 0) {
        direction = -direction;
      }
    }
    setArr(decodedMessage.split(''));
    setText(encodedMessage);
    return decodedMessage;
  }

  const showInformation = () => {
    const info = (
      <>
        <p>
          The Railfence Cipher is a transposition cipher that writes plaintext in a zigzag pattern across a number of
          "rails" and then reads off the ciphertext.
        </p>
        <p>To encode using the Railfence Cipher, apply the encoding algorithm with the desired number of rails.</p>
      </>
    );
    ongetInfo(info);
  };

  React.useEffect(() => {
    showInformation();
  }, []);

  return (
    <>
      <CipherFactory encode={encodeRailfence} decode={decodeRailfence} />
    </>
  );
}
