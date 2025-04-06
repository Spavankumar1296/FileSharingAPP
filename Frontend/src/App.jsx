import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { UploadFile } from './service/api';

function App() {
  const [file, setFile] = useState(null);
  const [res, setRes] = useState('');
  const uploadRef = useRef();

  const handleUpload = () => {
    uploadRef.current.click();
  };

  useEffect(() => {
    const apicall = async () => {
      if (file) {
        const fileData = new FormData();
        fileData.append("name", file.name);
        fileData.append("file", file);

        console.log("Uploading:", file.name);

        const response = await UploadFile(fileData);
        console.log("Response from API:", response);

        if (response?.path) {
          setRes(response.path);
        }
      }
    };
    apicall();
  }, [file]);

  return (
    <div className='flex flex-col justify-center items-center bg-green-600 h-[100vh] w-[100vw]'>
      <h1 className='font-bold text-[42px] text-white' >File Sharing App</h1>
      <div className='ml-9'>
        <button onClick={()=>{handleUpload()}} className='bg-blue-600 text-white px-2 py-2 rounded-xl'>Upload</button>
        <input type="file" ref={uploadRef} className='hidden' onChange={(event)=>setFile(event.target.files[0] )}/>
      </div>
      {res && (
  <div className="mt-4">
    <a href={res} className="text-white underline"  rel="noreferrer">
      {res}
    </a>
  </div>
)}
    </div>
  )
}

export default App;
