//ye sab date shere in movie

//thish page of parents  
// Contex file ther create becouse ther are use for relation attech parrento to child got to all details 
// context <API> and usecontext hooks ther are diffrent 
import React ,{useContext, useEffect, useState}from 'react' 

// import
const API_KEY = process.env.REACT_APP_API_KEY;  //thish are api hide becouse secorety is very importent //its use .env file of root 
 export const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;
//const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=titanic`;

//const API_URL = 'http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=titanic';
 //api key

//context(warehouse) //cotext is a warehouse use for every prodect ther avellabele
//Provider (delivery boy)               // provider are use for get content from 
//consumer / (useContext( you))           // Consumer are use for get daata from context 

const AppContext = React.createContext();

//we need to cratre a provider fun
//arey me koi divery boy raha to he data provide kiya jaye gan nahi nahi kiya jaye ga
const AppProvider = ({children}) => {

    const [isLoding , setISLoding] = useState(true);
    const [movie, setMovie] = useState([]);  //movie ke folder me fethc kare nge ]
    const [isError, setISError] = useState({show:"false",msg: ""});
    const [query, setQuery] = useState("titanic");  {/*3 fir setqury aa gya or pass ho gya query me */}

// thet try catch and fetch api
    const getMovies = async (url) => {
        setISLoding(true);
        try {
            const res = await fetch(url);
            const data = await  res.json();
            console.log(data);
            if(data.Response === "True"){
                setISLoding(false);
                   setISError({
                    show: false,
                    msg: "",
                })
                setMovie(data.Search);
            } else {
                setISError({
                    show: true,
                    msg: data.Error,
                })
            }


        }catch (error) {
            console.log(error);
        }
    };

useEffect(() => {
    //ther are use " Debouncing in React JS" becouse kitane time ke bad serch kiya hu dikhana hai use settime
   let timerOut = setTimeout(() => {    
         // getMovies(API_URL);  //main yahi hai 
   getMovies(`${API_URL}&s=${query}`); //ye jo hai wo serch ke liya ho raha hai or serch me jo karunga oo ayega 
   {/*4 fir ooqry me gya or fetch ho gya  */}
    }, 500);
//ther are dbounce becouse itsis importen ther not get more pracer in api    
    return () => clearTimeout(timerOut);  // thet ther use 1 time responce ther are "debounce" 
   
},[query]);{/* iske wajse */}

return <AppContext.Provider value= {{ movie, isLoding, isError,  query, setQuery}}>
    {children}</AppContext.Provider>  // uper se fech kar liya sab or retrn kar diya 
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




//.env ther are use of secure your data and api 
//step1 = .env ther are create file "root " min finel file 
//step2 = got ot the .gitigonore file and mice thet add .env file 
//step3 = .env make sure neet and clean and then same write "REACT_APP_Name=yourkey" name ke jagaha par aap kuch bhi de sakte hai
//"="after put your key 
//step4 = and go your api urel other vaice go yor url 
//like const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=titanic`;  betwin put "API_KEY"in ${}
//after creat constent like "const API_KEY = process.env.REACT_APP_API_KEY; " 
//write : "process.env.your_name" and "your_name" me write wahi karo jo tumne .env file me diye the 
//step 4 : restert your server lets use your api 
//