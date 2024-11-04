import Contact from "../components/contact";

import Footer from "../components/footer";
import Header from "../components/header";
import ImageCard from "../components/image-card";
import Testimonial from "../components/testimonial";
import Partners from "../components/partners";
import FAQ from "../components/faq";
import ViewPort from "../components/view-port";
import Card from "../components/card";
import '../index.css'


const Home = () => {
  return (
    <div className="grid">

      <Header />
      <ViewPort />

      <Partners />
      <Card title="Our Services" description={`Handshake infographic mass market crowdfunding iteration.`} services={true} />

      <ImageCard />


      <Testimonial />
      <FAQ />
      <Card title="Our Blog" description="Value proposition accelerator product management venture" blogs={true} className="!bg-[#fff] !text-[#000]" />

      <Contact />

      <Footer />




    </div>
  );
};
export default Home;
