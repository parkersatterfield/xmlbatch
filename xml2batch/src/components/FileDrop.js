// packages
import React, {useCallback} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { useDropzone } from 'react-dropzone'

// XML Manager
const xmlManager = require('../managers/xmlManager')

function FileDrop() {
  useDropzone({
    accept: {
      'text/xml': ['.xml']
    }
  })

  const onDrop = useCallback(acceptedFiles => {
    // create database command 
    
    acceptedFiles.forEach(file => {
      var reader = new FileReader();
      reader.onload = function(e) {
        var contents = e.target.result;
        xmlManager.parseXml(contents);
      };
      reader.readAsText(file);
    })
  }, [])

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div className="container">
      <div className="file-drop flex-center" {...getRootProps()}> 
        <FontAwesomeIcon className="folder" icon={faFolder} size="4x"/>
        <input {...getInputProps()} />
        <h4>Drop XML Files Here</h4>
      </div>
      <div>
        <h4>Files</h4>
        <p>{acceptedFiles.length} File(s)</p>
      </div>
    </div>
  );
}

export default FileDrop;
