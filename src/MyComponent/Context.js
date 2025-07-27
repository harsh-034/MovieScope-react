//thish page of parents  
// Contex file ther create becouse ther are use for relation attech parrento to child got to all details 
// context <API> and usecontext hooks ther are diffrent 
import React ,{useContext}from 'react'  // import


//context(warehouse) //cotext is a warehouse use for every prodect ther avellabele
//Provider (delivery boy)               // provider are use for get content from 
//consumer / (useContext( you))           // Consumer are use for get daata from context 

const AppContext = React.createContext();

//we need to cratre a provider fun
//arey me koi divery boy raha to he data provide kiya jaye gan nahi nahi kiya jaye ga
const AppProvider = ({children}) => {
return <AppContext.Provider value= "thapa">{children}</AppContext.Provider>
};  

// globel custem hook 
const useGlobalContext = () => {
    return useContext (AppContext);
}

export {AppContext,AppProvider, useGlobalContext};  // thet this line get and export 


