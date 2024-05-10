import React from 'react'
import CipherFactory from '../../ui/EncryptDecrypt';

const BookCipher = () => {

    const encode=()=>{
        return 0;
    }
    const decode=()=>{
        return 0;
    }
  return (
    <div>
        <CipherFactory encode={encode} decode={decode} />
    </div>
  )
}

export default BookCipher
