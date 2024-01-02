import { createContext, useState } from "react";

export const FolderContext = createContext();

const FolderContextProvider = (props) =>{
    const [folder, setFolder] = useState([])

    return (
        <FolderContext.Provider value={[folder,setFolder]}>
            {props.children}
        </FolderContext.Provider>
    );
}

export default FolderContextProvider;