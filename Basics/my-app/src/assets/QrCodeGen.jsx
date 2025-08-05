// import img1 from '../img/Color-Car.jpg'
import { useState } from 'react'

export const QrCodeGen = () => {

  const [img,setImg]= useState("")
  const [loading,setLoading] = useState(false)
  const [qrData, setQrData] = useState("www.youtube.com")
  const [qrSize,setQrSize] = useState(150)

  async function generateQr(){
    setLoading(true)
    try{
      const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
      // const url = img1
      setImg(url)
    }catch(error){
      console.error("Generating QR Code Error",error)
    }finally{
      setLoading(false)
    }
  }

  function downloadQr(){
    fetch(img)
    .then((response)=>response.blob())
    .then((blob)=>{
      const link=document.createElement("a")
      link.href=URL.createObjectURL(blob)
      link.download=`${qrData}-${qrSize}x${qrSize}-QR-Code.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }).catch((error)=>{
      console.log("Downloading QR Code Error",error)
    })
  }

  return (
    <div className='app-container'>
      <h1>QR CODE GENERATOR</h1>
      {/* <p>{qrData}</p> */}
      {loading && "Please Wait"}
      {img && <img src={img} alt="qr-img" width={150} height={150}/>}
      <div className='input-field'>
        <label htmlFor='dataInput' className='input-label'>
          Data for QR Code
        </label>
        <input type='text' id="dataInput" placeholder='Enter the data for QR Code' onChange={(e)=>{setQrData(e.target.value)}}/>

        <label htmlFor='sizeInput' className='input-label'>
          Image Size 
        </label>
        <input type='text' id="sizeInput" placeholder='Enter the image size for QR Code'onChange={(e)=>setQrSize(e.target.value)}/>
        <div className='button'>
          <button onClick={generateQr} className='generateQR' disabled={loading}>Generate QR Code</button>
          <button onClick={downloadQr} className='downloadQR'>Download QR Code</button>
        </div>
        <p>Designed By <a href="QrCodeGen.jsx">SMAZ</a></p>
      </div>
    </div>
  )
}
