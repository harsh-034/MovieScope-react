import React from 'react' //rafce
import { useGlobalContext } from './Context'
import { Form } from 'react-router-dom';


const Search = () => {
  const {query, setQuery, isError } = useGlobalContext(); {/*2 set query pe gya or wo cotext file me gya import ho gya   */}
   return (<>
  <section className='search-section'>
    <h2>Search Your Favourite Movie</h2>
    <form action="" onSubmit={(e) => e.preventDefault()}>
    <div>
      <input type="text" placeholder='Search Here' 
      value={query}
      onChange={(e) => setQuery(e.target.value)} />  {/*1 one by one serch ho gya o waha setqurey par gya  */}
      
    </div>
    </form>

    <div className='card-error'>
      <p >{isError.show && isError.msg}</p>  
      {/* error ter are not serch thet message cheke context file */}
    </div>
  </section>
 
   ;
    </>
  )
}

export default Search
