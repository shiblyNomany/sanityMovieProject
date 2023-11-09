import { useMovieContext } from "../Context/allData";
import Layout from "../Layout/Layout";
import Loader from "../assets/Component/Loader";
import MovieCard from "../assets/Component/MovieCard";

const Movies = () => {
  // const { movies } = useMovieContext()

  const { movies, loading ,catagory,getUserSearchData } = useMovieContext();

  return (
    <Layout title={"Movies"}>
      <section className="flex justify-center my-5 gap-2">
        <input
          type="search" onChange={getUserSearchData}
          placeholder="Search a movie name"
          className="input input-bordered w-[50%]"
        />
        <select onSelect={} className=" select select-bordered">
          <option disabled  selected>
            Select Catagory
          </option>
          {
            catagory.map(cat=> <option key={cat._id}>{cat.Catagoryname}</option>)
          }
          
        </select>
      </section>

      <section>
        <div className="flex justify-center gap-5 mb-9 mt-9 flex-wrap">
          {loading ? (
            <Loader />
          ) : (
            <>
              {movies.map((movie) => (
                <MovieCard key={movie._id} movieInfo={movie} />
              ))}
            </>
          )}

          {/* {
            movies.map( movies => <MovieCard/>)
          } */}
        </div>

        <div>
          <div className="join flex justify-center my-5 ">
            <button className="join-item btn btn-outline">Previous</button>

            <button className="join-item btn btn-outline">2</button>
            <button className="join-item btn btn-outline">3</button>
            <button className="join-item btn btn-outline">4</button>
            <button className="join-item btn btn-outline">5</button>
            <button className="join-item btn btn-outline">6</button>
            <button className="join-item btn btn-outline">7</button>

            <button className="join-item btn btn-outline">Next.....</button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Movies;
