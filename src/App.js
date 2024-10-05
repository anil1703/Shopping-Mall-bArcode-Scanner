import './App.css';
import React from 'react';
import Barcode from 'react-barcode'; // Import Barcode from react-barcode

function App() {
  // Example product data
  const product = {
    id: '9492033481',
    title: 'Shirt',
    cost: 2000
  };

  return (
    <div className="App">
      <h1>Bar Code Generator</h1>

      {/* Display product details */}
      <div>
        <p><strong>Title:</strong> {product.title}</p>
        <p><strong>Cost:</strong> {product.cost} INR</p>
      </div>

      {/* Generate and display the barcode */}
      <div>
        <h3>Barcode:</h3>
        <Barcode
          value={product.id} // Product ID as the barcode value
          width={2} // Width of the barcode lines
          height={100} // Height of the barcode
          displayValue={true} // Display the ID under the barcode
          fontSize={16} // Font size of the text
          background="#ffffff" // Background color of the barcode
          lineColor="#000000" // Color of the barcode lines
        />
      </div>
    </div>
  );
}

export default App;
