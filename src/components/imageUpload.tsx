import React, { useState } from 'react';
import { Divider, Form } from "antd";

const ImageUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedFile) {
      // Logic to handle file upload goes here
      alert(`File uploaded: ${selectedFile.name}`);
    } else {
      alert('No file selected');
    }
  };

  return (

    <form onSubmit={handleSubmit}>
      <label htmlFor="file-upload">Upload an image:</label>
      <input type="file" id="file-upload" accept="image/*" onChange={handleFileChange} />
      {preview && <img src={preview} alt="Preview" width="200" />}
      <input type="submit" value="Upload" />
    </form>

   );
};

export default ImageUpload;