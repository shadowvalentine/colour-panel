import React, { useEffect, useRef } from 'react';

function App() {
  const canvasRef = useRef(null);

  function generateValues() {
    let returnArray = [];

    // Using the 256 RGB values from 0-255, while skipping 0,
    // Starts from the first 8th value (7) and steps in 8 up and including to 255
    for (let r = 7; r <= 255; r += 8) {
      for (let g = 7; g <= 255; g += 8) {
        for (let b = 7; b <= 255; b += 8) {
          returnArray.push({ r, g, b });
        }
      }
    }

    return returnArray;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const canvasContext = canvas.getContext('2d');
      if (canvasContext) {
        let rgbArray = generateValues();
        let x = 0;
        let y = 0;

        // Unpack rgb values into the canvas
        rgbArray.forEach(value => {
          canvasContext.fillStyle = `rgb(${value.r},${value.g},${value.b})`;
          canvasContext.fillRect(x, y, 1, 1);

          // Set new canvas coordinates 
          if (x < 256) {
            x += 1;
          } else {
            x = 0;
            y += 1;
          }
        });
      }
    }
  });

  return (
    <div className="App">
      <canvas ref={canvasRef} width={256} height={128}/>
    </div>
  );
}

export default App;
