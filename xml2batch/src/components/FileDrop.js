// packages
import React, {useCallback} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import {useDropzone} from 'react-dropzone'

function FileDrop() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    var numFiles = acceptedFiles.length();
    for (let i=0; i<numFiles; i++ ) {

    }
  }, [])

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div className="container">
      <div className="file-drop" {...getRootProps()}> 
        <FontAwesomeIcon class="folder" icon={faFolder} />
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
