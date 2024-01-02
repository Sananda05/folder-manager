import React, { useContext } from "react";

import { useState } from "react";


// import addIcon from '../assets/icon/plus.png'

import folderIcon from '../assets/icon/folder.png'


//css
import './FileManager.css'
// import Folder from "../components/folder/Folder";
import { FolderContext } from "../context/FolderContext";


function FileManager() {

    const [isOpen, setIsOpen] = useState(false)

    const [folderName, setFolderName] = useState('')
    const [addFolder, setAddFolder] = useContext(FolderContext)

    
    const handleModalOpener = (e) =>{
        setIsOpen(!isOpen)
    }  
    
    const handleFolderOpen = (e) =>{

    }

    const handleChange = (e) => {

        const {value } = e.currentTarget.value;

        setFolderName(value)
          
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', addFolder);

        setAddFolder((prevData) => {
            
            return [...prevData, { name:folderName }];
          });

        // setFolderName('')
        console.log(addFolder.length)
        
    };  

    return(
        <div className="main_container">
            <button className="add_button" onClick={handleModalOpener}>
               {/* <div>
                <img src={addIcon} alt="Add" />
                <button>Add New Folder</button>
               </div> */}
               Add New Folder
            </button>
          <div className="folderWrapper" >   
            {addFolder.length > 0? 

            addFolder.map((item) => ( 
    
            <div className="folder_content" onClick={handleFolderOpen} >
                
                <img src={folderIcon} alt="folder" style={{height:'24px', width:'24px'}}/>
                {console.log(item.name)}
                <h4>{item.name}</h4>
            </div>
            )):""
        }
            

           </div>

            {isOpen ? 
            <div className="modal_container">
            <div className={`modal ${isOpen ? 'open' : ''}`}>          
            <div className="modal-content">
                
                <form onSubmit={handleSubmit}>  
                <input type="text" placeholder="Folder Name" id="folder_name" name="name"  onChange={handleChange} />
                <div className="modal_button_group">
                <button className="cancel_btn" onClick={handleModalOpener}>cancel</button>
                <button className="create_btn" type="submit">create</button>
                </div>
                </form>
            </div>
            </div>
            </div>
        : 
            <div></div>
            }        
    </div>

    )
    

}

export default FileManager;