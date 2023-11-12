import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
// import Image2  from "../image/the-box.jpg";
import { useEffect, useState } from "react";
import { client } from "../Lib/Sanity";
import { PortableText } from "@portabletext/react";
import ReactPlayer from "react-player";

const MovieIndivisual = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState();

  const { MovieName, MovieVideo, imageUrl, content } = movie;

  const { id } = useParams();
  const Query = `*[_type=="Movie" && _id=="${id}"] 
{_id , MovieName , CatagoryName->{Catagory} ,"imageUrl": Movieimage.asset->url,content,MovieVideo}`;

  const getMovies = async () => {
    setLoading(true);
    const movie = await client.fetch(Query);
    console.log(movie);
    setLoading(false);
    return setMovie(movie[0]);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Layout title={"Movies Info"}>
      <div className="grid grid-flow-col card card-side bg-base-100 shadow-xl mx-20 my-12">
        <div className="grid-cols-3 pt-6">
          <figure className=" ml-10">
            <img className=" bg-cover " src={imageUrl} alt="Movie" />
          </figure>
        </div>

        <div className="grid-cols-9 card-body pl-40 pr-10">
          <h2 className="card-title text-4xl badge badge-success p-5 ">
           
            {MovieName}
          </h2>

          <div className=" ">
            <PortableText value={content} />
          </div>
          <div className="card-actions justify-end">
            {/* The button to open modal */}
            <label htmlFor="my_modal_6" className="btn">
              Watch Trailer
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box w-full">
                <ReactPlayer
                  className="react-player"
                  url={MovieVideo}
                  width="100%"
            
                />

                
                <div className="modal-action">
                  <label htmlFor="my_modal_6" className="btn">
                    Close!
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MovieIndivisual;
