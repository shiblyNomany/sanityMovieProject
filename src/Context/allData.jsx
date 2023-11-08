
import { createContext, useContext, useEffect, useState } from 'react'
import { client } from '../Lib/Sanity'

 
export const MovieContext = createContext()
export function MovieDataProvider({ children }) {
    
    const [movies,setMovies] = useState([])
    const [ catagory , setCatagory ] = useState([])
    // loading
    const [ loading , setLoading ] = useState( )






    const getAllMovies = async () =>{
       
        const movies = await client.fetch('*[_type=="Movie"] {_id , MovieName , CatagoryName ,"imageUrl": Movieimage.asset->url }')
        console.log( movies )
        return setMovies(movies)
    
      
    
    }
    const getAllCatagory = async () =>{
        setLoading(true)
        const catagory = await client.fetch('*[_type=="Catagory"]{_id ,Catagoryname ,"imageUrl": photo.asset->url }')

        setLoading(false)
     
        return setCatagory(catagory)
    
      
    
    }
    


     useEffect(() => {
       
       getAllMovies()
       getAllCatagory()
        
     }, [ ])





    return <MovieContext.Provider value={{ movies,catagory,loading }}>
        {children}
    </MovieContext.Provider>
}



export function useMovieContext(){

   return useContext(MovieContext)

}
 



