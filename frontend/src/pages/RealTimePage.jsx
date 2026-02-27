import React, { useRef, useState, useEffect } from "react";

export default function RealTimePage() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#6B46C1");
  const [brushSize, setBrushSize] = useState(4);
  const [history, setHistory] = useState([]);
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  // Text tool
  const [textMode, setTextMode] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [fontSize, setFontSize] = useState(24);
  const [fontStyle, setFontStyle] = useState("normal");

  // Start drawing
  const startDrawing = (e) => {
    if (textMode) return; // disable freehand when text mode is on
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
    setShowPlaceholder(false);
  };

  const draw = (e) => {
    if (!isDrawing || textMode) return;
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.shadowBlur = 2;
    ctx.shadowColor = color;
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    setHistory((prev) => [...prev, canvas.toDataURL()]);
    setIsDrawing(false);
  };

  // Add text on click
  const handleCanvasClick = (e) => {
    if (!textMode || !textInput) return;
    const ctx = canvasRef.current.getContext("2d");
    ctx.fillStyle = color;
    ctx.font = `${fontStyle} ${fontSize}px sans-serif`;
    ctx.fillText(textInput, e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    const canvas = canvasRef.current;
    setHistory((prev) => [...prev, canvas.toDataURL()]);
    setTextInput(""); // clear input
    setShowPlaceholder(false);
  };

  // Clear canvas
  const handleClear = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    drawGrid();
    setHistory([]);
    setShowPlaceholder(true);
  };

  // Undo last stroke
  const handleUndo = () => {
    const last = history.slice(0, -1);
    setHistory(last);
    const ctx = canvasRef.current.getContext("2d");
    const img = new Image();
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    drawGrid();
    if (last.length > 0) {
      img.src = last[last.length - 1];
      img.onload = () => ctx.drawImage(img, 0, 0);
    } else {
      setShowPlaceholder(true);
    }
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "artwork.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  // Draw subtle grid
  const drawGrid = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#e0e0e0";
    ctx.lineWidth = 0.5;
    const step = 50;
    for (let x = 0; x <= canvas.width; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y <= canvas.height; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    // diagonal
    ctx.strokeStyle = "#f0f0f0";
    for (let x = -canvas.height; x < canvas.width; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + canvas.height, canvas.height);
      ctx.stroke();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    drawGrid();
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-purple-50 to-indigo-50 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-center text-purple-700">
        Real-time Collaboration
      </h1>

      {/* Controls */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
        <div>
          <label className="mr-2 font-semibold text-purple-700">Color:</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="rounded-lg cursor-pointer"
          />
        </div>

        <div>
          <label className="mr-2 font-semibold text-purple-700">Brush Size:</label>
          <input
            type="range"
            min="1"
            max="20"
            value={brushSize}
            onChange={(e) => setBrushSize(e.target.value)}
            className="cursor-pointer"
          />
        </div>

        <button
          onClick={handleUndo}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Undo
        </button>
        <button
          onClick={handleClear}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Clear
        </button>
        <button
          onClick={handleSave}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Save
        </button>

        {/* Text tool */}
        <button
          onClick={() => setTextMode(!textMode)}
          className={`px-4 py-2 rounded-lg transition font-semibold ${
            textMode ? "bg-yellow-500 text-white" : "bg-gray-300 text-black"
          }`}
        >
          {textMode ? "Text Mode On" : "Text Mode Off"}
        </button>
        {textMode && (
          <>
            <input
              type="text"
              placeholder="Enter text..."
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              className="border rounded px-2 py-1"
            />
            <select
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              className="border rounded px-2 py-1"
            >
              {[16, 20, 24, 32, 40, 48].map((size) => (
                <option key={size} value={size}>{size}px</option>
              ))}
            </select>
            <select
              value={fontStyle}
              onChange={(e) => setFontStyle(e.target.value)}
              className="border rounded px-2 py-1"
            >
              <option value="normal">Normal</option>
              <option value="bold">Bold</option>
              <option value="italic">Italic</option>
            </select>
          </>
        )}
      </div>

      {/* Canvas */}
      <div
        className="bg-white border rounded-2xl shadow-lg mx-auto relative"
        style={{ maxWidth: "900px", height: "500px" }}
      >
        {showPlaceholder && (
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400 text-xl select-none pointer-events-none">
            Start drawing here...
          </p>
        )}
        <canvas
          ref={canvasRef}
          className="w-full h-full rounded-2xl cursor-crosshair"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onClick={handleCanvasClick} // add text
        />
      </div>
    </div>
  );
}