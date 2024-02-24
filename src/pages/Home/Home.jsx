import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <section className="banner-cont">
        <img
          src="../../../public/background2.jpg"
          className="banner-img"
          alt=""
        />
      </section>
      <section className="card-section">
        <Card image="/public/gallery/01.jpg" />
        <Card image="/public/gallery/02.jpg" />
        <Card image="/public/gallery/03.jpg" />
        <Card image="/public/gallery/04.jpg" />
        <Card image="/public/gallery/05.jpg" />
        <Card image="/public/gallery/06.jpg" />
        <Card image="/public/gallery/07.jpg" />
        <Card image="/public/gallery/08.jpg" />
        <Card image="/public/gallery/09.jpg" />
        <Card image="/public/gallery/10.jpg" />
        <Card image="/public/gallery/11.jpg" />
        <Card image="/public/gallery/12.jpg" />
        <Card image="/public/gallery/13.jpg" />
        <Card image="/public/gallery/14.jpg" />
        <Card image="/public/gallery/15.jpg" />
      </section>
      <Footer />
    </>
  );
}

export default Home;
