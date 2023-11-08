 
import Footer from "../assets/Component/Footer";
import Navbar from "../assets/Component/Navbar";
 
import { Helmet } from "react-helmet";
 


const Layout = ({ children , title }) => {
  return (
    <>
      <head>
        <Helmet>
           <title>{title}</title>
        </Helmet>
      </head>



      <Navbar />     
       
      {/* style={{ height:"90vh" }} */}
      <main  >{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
