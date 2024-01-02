import React, { useContext } from "react";
import { FolderContext } from "../../context/FolderContext";


function Folder(props){

    const [folderName, setFolderName] = useContext(FolderContext)
    console.log(props)
    return(
      <div>       {
        folderName.length > 0 ?

        <div className="folder_wrapper">
            <img src={''} alt=""/>
            <p>{props.name}</p>
        </div> : ""
       }
       </div>

    )
}

export default Folder;