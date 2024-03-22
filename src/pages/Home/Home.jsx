import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <section className="banner-cont">
        <img src="/background2.jpg" className="banner-img" alt="" />
      </section>
      <section className="card-section">
        <Card
          image="/gallery/01.jpg"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          img="/user.jpg"
          name="user"
        />
        <Card
          image="/gallery/02.jpg"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          img="/user.jpg"
          name="user"
        />
        <Card
          image="/gallery/03.jpg"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          img="/user.jpg"
          name="user"
        />
        <Card
          image="/gallery/04.jpg"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          img="/user.jpg"
          name="user"
        />
        <Card
          image="/gallery/05.jpg"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          img="/user.jpg"
          name="user"
        />
        <Card
          image="/gallery/06.jpg"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          img="/user.jpg"
          name="user"
        />
        <Card
          image="/gallery/07.jpg"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          img="/user.jpg"
          name="user"
        />
        <Card
          image="/gallery/08.jpg"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          img="/user.jpg"
          name="user"
        />
        <Card
          image="/gallery/09.jpg"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          img="/user.jpg"
          name="user"
        />
        <Card
          image="/gallery/10.jpg"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          img="/user.jpg"
          name="user"
        />
        <Card
          image="/gallery/11.jpg"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          img="/user.jpg"
          name="user"
        />
        <Card
          image="/gallery/12.jpg"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          img="/user.jpg"
          name="user"
        />
        <Card
          image="/gallery/13.jpg"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          img="/user.jpg"
          name="user"
        />
        <Card
          image="/gallery/14.jpg"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          img="/user.jpg"
          name="user"
        />
        <Card
          image="/gallery/15.jpg"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          img="/user.jpg"
          name="user"
        />
      </section>
      <Footer />
    </>
  );
}

export default Home;
