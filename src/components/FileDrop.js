// packages
import React, {useCallback, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { useDropzone } from 'react-dropzone'

// XML Manager
const xmlManager = require('../managers/xmlManager')

const FileDrop = (props) => {
  // define progress state
  const [progress, setProgress] = useState(0);
  const [output, setOutput] = useState("");

  // styles
  const progressColor = "#431DB1";
  const progressContainer = {
    height: 20,
    width: `100%`,
    backgroundColor: "#D9D9D9",
    borderRadius: 50,
  };

  const progressStyles = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: progressColor,
    borderRadius: 50,
    transition: "ease-in-out 0.6s"
  };

  useDropzone({
    accept: {
      'text/xml': ['.xml']
    }
  });

  const onDrop = useCallback(acceptedFiles => {
    let completedFiles = 0;

    acceptedFiles.forEach(file => {
      var reader = new FileReader();
      reader.onload = function(e) {
        var contents = e.target.result;
        setOutput(output => output+=xmlManager.parseXml(contents));
      };
      reader.readAsText(file);
      completedFiles += 1;
      setProgress(completedFiles/acceptedFiles.length*100);
    });
  }, []);
  
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "results.sql";
    link.href = url;

    const download = () => {
      link.click();
    }

  const {getRootProps, getInputProps} = useDropzone({onDrop});

  return (
    <div className="container">
      <div className="file-drop flex-center" {...getRootProps()}> 
        <FontAwesomeIcon className="folder" icon={faFolder} size="4x"/>
        <input {...getInputProps()} />
        <h5>Drop XML Files Here</h5>
      </div>
      <h4>Files</h4>
      <div className="flex-between">
        <p>{progress}% Uploaded</p>
        {progress === 100 && 
          <div className="output">
            <button className="btn" onClick={download}>Download Results</button>
          </div>
        }
      </div>
      <div className="flex-center progress">
        <div style={progressContainer}>
          <div style={progressStyles}></div>
        </div>
      </div>
    </div>
  );
}

export default FileDrop;
