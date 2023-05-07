import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QRScanner = ({data, setData, setIsLoggedIn}) => {

  return (
    <>
      <QrReader
        delay={500}
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <p>{data}</p>
    </>
  );
};
export default QRScanner;