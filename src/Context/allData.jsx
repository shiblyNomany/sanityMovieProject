
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

   

    const getUserSearchData = (e)=>{
        const userSearchValue = e.target.value
        getUserMovie(userSearchValue)


        // let searchQuery = `*[_type == "movie"]`
        // if (searchTerm){
        //     searchQuery += `
        // console.log(userSearchValue)
    }

    const getUserMovie = async (userData)=>{
      const Query =`*[_type=="Movie" &&  (MovieName match " ${userData}*")] 
      {_id , MovieName , CatagoryName->{Catagory} ,"imageUrl": Movieimage.asset->url,content,MovieVideo}`
      const searchMovieResult=await client.fetch(Query)
      setMovies(searchMovieResult)
    //   console.log(searchMovieResult)
    }


     useEffect(() => {
       
       getAllMovies()
       getAllCatagory()
        
     }, [ ])





    return <MovieContext.Provider value={{ movies,catagory,loading,getUserSearchData }}>
        {children}
    </MovieContext.Provider>
}



export function useMovieContext(){

   return useContext(MovieContext)

}
 



