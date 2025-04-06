export const UploadFile = async (fileData) => {
    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: fileData,
      });
  
      if (!response.ok) {
        const errorBody = await response.text(); // get the error message from backend
        throw new Error(`Server responded with ${response.status}: ${errorBody}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Upload API Error:", error.message);
    }
  };
  