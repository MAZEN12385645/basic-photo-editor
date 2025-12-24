import { useState } from 'react'
import './App.css'
import one from "./brightness.png"
import two from "./contrast.png"
import three from "./blur.png"

function App() {
  const [file, setFile] = useState(null)
  const [brightness, setBrightness] = useState(100)
  const [contrast, setContrast] = useState(100)
  const [blur, setBlur] = useState(0)
  const [activeFilter, setActiveFilter] = useState("brightness") // الفلتر الحالي

  // تحميل الصورة
  const handleChange = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile))
    }
  }

  // تغيير قيمة الفلتر حسب النشط
  const handleSlider = (e) => {
    const value = e.target.value
    if (activeFilter === "brightness") setBrightness(value)
    if (activeFilter === "contrast") setContrast(value) 
    if (activeFilter === "blur") setBlur(value)
  }

  // نحدد value و min/max حسب الفلتر النشط
  const getRange = () => {
    if (activeFilter === "brightness") return { min: 0, max: 200, value: brightness }
    if (activeFilter === "contrast") return { min: 0, max: 200, value: contrast }
    if (activeFilter === "blur") return { min: 0, max: 20, value: blur }
  }
  const { min, max, value } = getRange()

  return (
    <div>
      <div className='insert'>
        {!file && (
          <input 
            className='ins'
            type="file" 
            onChange={handleChange}
            accept="image/*"
          />
        )}
        {file && ( 
          <img 
            style={{
              borderRadius: "10px",
              filter:`brightness(${brightness}%) contrast(${contrast}%) blur(${blur}px)`
            }}
            src={file} 
            alt="mypic" 
          />
        )}
      </div>
      {file && (
        <div className="edit">
          <div className="photos">
            <img
              onClick={() => setActiveFilter("brightness")}
              src={one}
              alt="brightness"
              style={{
                cursor: "pointer",
                border: activeFilter === "brightness" ? "2px solid greenyellow " : "2px solid transparent",
                borderRadius: activeFilter === "brightness" ? "50%" : "0"
              }}
            />
            <img
              onClick={() => setActiveFilter("contrast")}
              src={two}
              alt="contrast"
              style={{
                width: "50px",
                cursor: "pointer",
                border: activeFilter === "contrast" ? "2px solid greenyellow" : "2px solid transparent",
                borderRadius: activeFilter === "contrast" ? "50%" : "0"
              }}
            />
            <img
              onClick={() => setActiveFilter("blur")}
              src={three}
              alt="blur"
              style={{
                cursor: "pointer",
                border: activeFilter === "blur" ? "2px solid greenyellow" : "2px solid transparent",
                borderRadius: activeFilter === "blur" ? "50%" : "0"
              }}
            />
          </div>
          <input     
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={handleSlider}
          />
        </div>
      
      )}
      <button onClick={
        ()=> {
if (activeFilter === "brightness") setBrightness(100);
if (activeFilter === "contrast") setContrast(100);
if (activeFilter === "blur") setBlur(0);
        }
      }>Reset</button>
    </div>
  )
}

export default App
