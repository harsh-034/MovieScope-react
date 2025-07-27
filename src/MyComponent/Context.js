//ye sab date shere in movie

//thish page of parents  
// Contex file ther create becouse ther are use for relation attech parrento to child got to all details 
// context <API> and usecontext hooks ther are diffrent 
import React ,{useContext, useEffect, useState}from 'react'  // import

const API_URL = "http://www.omdbapi.com/?apikey=b2b44183&s=titanic"; //api key

//context(warehouse) //cotext is a warehouse use for every prodect ther avellabele
//Provider (delivery boy)               // provider are use for get content from 
//consumer / (useContext( you))           // Consumer are use for get daata from context 

const AppContext = React.createContext();

//we need to cratre a provider fun
//arey me koi divery boy raha to he data provide kiya jaye gan nahi nahi kiya jaye ga
const AppProvider = ({children}) => {

    const [isLoding , setISLoding] = useState(true);
    const [movie, setMovie] = useState([]);  //movie ke folder me fethc kare nge ]
    const [isError, setISError] = useState({show:"false",msg: ""})

// thet try catch and fetch api
    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await  res.json();
            console.log(data);
            if(data.Response === "True"){
                setISLoding(false);
                setMovie(data.Search);
            }else{
                setISError({
                    show: true,
                    msg:data.error,
                })
            }


        }catch (error) {
            console.log(error);
        }
    };

useEffect(() => {
    getMovies(API_URL);
},[]);

return <AppContext.Provider value= {{isLoding, isError, movie}}>{children}</AppContext.Provider>  // uper se fech kar liya sab or retrn kar diya 
};  

// globel custem hook 
const useGlobalContext = () => {
    return useContext (AppContext);
}

export {AppContext,AppProvider, useGlobalContext};  // thet this line get and export 





//api are use only 1000 thet limit (and your limit complete can you go ombd web site and emain put get new api key and serch )
// all details avlibale of "ombd" web site 

//  use thish api this way http://www.omdbapi.com/?apikey=[yourkey]&
// Here is your key: b2b44183

// Please append it to all of your API requests,

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=b2b44183

// Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=2cdfccbd-9f44-4fa9-970f-4761de5eeac5
// If you did not make this request, please disregard this email.

//http://www.omdbapi.com/??apikey=[yourkey]&
//http://www.omdbapi.com/?apikey=b2b44183&s=titanic"