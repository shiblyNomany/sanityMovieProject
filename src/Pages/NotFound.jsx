import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

// import { Link } from "react-router-dom"

 

const NotFound = () => {
  return (
    <Layout>
      <h1 className=" text-center text-rose-400 text-8xl py-8">404</h1>
      <h1 className=" text-center text-5xl py-8">Not Found Page</h1>
      <Link to="/home"><div className="flex justify-center mb-8">
     <button className="bg-rose-300 btn btn-primary text-violet-50 text-3xl  px-8"><FiHome/></button> 
     </div></Link>
    </Layout>
  )
}

export default NotFound
