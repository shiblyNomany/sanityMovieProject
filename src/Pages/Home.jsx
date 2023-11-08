import Carousel from "./../assets/Component/Carousel";
import Layout from "../Layout/Layout";
import Catagorycard from "../assets/Component/CatagoryCard";
 
// import SectionTitel from '../assets/Component/SectionTitel'
// import SectionTitel from '../assets/Component/SectionTitel'

const Home = () => {



  return (
    <Layout title={"Home"}>
      <Carousel />

      <h1 className="text-center text-4xl mt-5">Catagory</h1>
      <h4 className="text-center text-2xl mb-5">
        Chose the best catagory For you
      </h4>

      <Catagorycard />

      {/* <SectionTitel MainTitel="Catagory" SubTitel="Find the best movie that you looking for " / > */}
    </Layout>
  );
};

export default Home;
