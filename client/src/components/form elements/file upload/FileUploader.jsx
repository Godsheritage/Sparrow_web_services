import React, { useState } from "react";
import "./fileuploader.scss"

function FileUploader() {
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    setFiles(e.target.files);
  }

  return (
    <div className="file-uploader">
      <input type="file" multiple onChange={handleChange} className = "form-control"/>
      <div className={files.length > 0 && "file-input-label" }>
        {files.length > 0 && (
          <ul>
            {Array.from(files).map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default FileUploader;