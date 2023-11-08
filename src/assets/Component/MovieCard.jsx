// import { useMovieContext } from "../../Context/allData";
// import image1 from "../../image/The Call.jpg";
// import { useMovieContext } from "../../Context/allData";

import { Link } from "react-router-dom";
 

const MovieCard = ({movieInfo}) => {
  const {_id,imageUrl,MovieName}= movieInfo
   

  // const { movies } = useMovieContext();

  return (
    <>

       <div   className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="bg-cover w-72 h-96 " src={imageUrl}  alt="" />
               
            </figure>
            <div className="card-body">
              <h2 className="card-title">  {MovieName}</h2>
              <h3 className=" text-base badge badge-success p-3">Catagoryname</h3>
               <div className="card-actions justify-end">
                <Link to={`/moviesinfo/${_id}`}>
                <button className="btn btn-primary">Details</button>
                </Link>
                
                 
              </div>
            </div>
          </div>



















{/* 

      {movies.map((movie) => (
       
          <div  key={movie._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={movie.imageUrl} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title"> {movie.MovieName}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              // <div className="card-actions justify-end"> */}
              {/* <Link to={"/moviesinfo/123"}>
                <button className="btn btn-primary">Details</button>
                <Link/>
              </div>
            </div>
          </div>
         
      ))} */}

      {/* {movies.map((movies) => (
        <MovieCard movieInfo={movies} key={movies._id} />
      ))} */}

      {/* */}
    </>
  );
};

export default MovieCard;
