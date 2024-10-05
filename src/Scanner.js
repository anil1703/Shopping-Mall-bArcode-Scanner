import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import { BrowserMultiFormatReader } from '@zxing/library';

const Scanner = () => {
  const [data, setData] = useState('Not Found');
  const [facingMode, setFacingMode] = useState('environment'); // Default to back camera
  const webcamRef = useRef(null);
  const codeReader = new BrowserMultiFormatReader();

  // Function to capture and scan barcode
  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      const img = document.createElement('img');
      img.src = imageSrc;
      img.onload = () => {
        codeReader.decodeFromImage(img)
          .then((result) => {
            setData(result.text);  // Set the scanned barcode data
          })
          .catch((err) => {
            console.error(err);
            setData('Not Found');  // Handle errors or no result
          });
      };
    }
  };

  // Automatically scan without button click
  useEffect(() => {
    const interval = setInterval(() => {
      capture();
    }, 1000); // Adjust the interval time for scanning frequency (1 second here)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Toggle between front and back cameras
  const handleCameraSwitch = () => {
    setFacingMode((prevMode) => (prevMode === 'user' ? 'environment' : 'user'));
  };

  return (
    <div className="scanner-container">
      <h1>Barcode Scanner</h1>
      <div className="camera-container">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="webcam"
          videoConstraints={{
            facingMode: facingMode, // Switch between 'user' (front) and 'environment' (back)
          }}
        />
        {/* Scanning red line */}
        <div className="scanner-line"></div>
      </div>
      <button onClick={handleCameraSwitch}>
        Switch to {facingMode === 'user' ? 'Back' : 'Front'} Camera
      </button>
      <p>Scanned Code: {data}</p>
    </div>
  );
};

export default Scanner;
