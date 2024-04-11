import React, { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";

const QRScanner = (props) => {
  const [data, setData] = useState("");

  useEffect(() => {
    props.getURL(data);
  }, [data]);

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (result) {
            setData(result?.text);
          }
          if (error) {
            console.info(error);
          }
        }}
        style={{ width: "100%" }}
      />
    </>
  );
};

export default QRScanner;
