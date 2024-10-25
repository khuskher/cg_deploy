import buildings from "../images/Buildings.jpg";
import people from "../images/people.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../CSS/Home.css";

// import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Parallax pages={3} className="bg">
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1.5}
          style={{
            backgroundImage: `url(${buildings})`,
            backgroundSize: `cover`,
          }}
        ></ParallaxLayer>

        <ParallaxLayer offset={0.3} speed={0.05}>
          <h1 className="title">
            <span class=" underline--magical">CRIME-GLANCE</span>
          </h1>
        </ParallaxLayer>

        <ParallaxLayer offset={1.3} speed={0.05}>
          <p
            className="about about_title"
            // style={{
            //   color: "#FFFF00",
            //   fontSize: '3rem',
            // }}
          >
            Welcome to CrimeGlance!
          </p>
          <p className="about">
            We are a community of individuals dedicated to promoting awareness
            of all criminal activities. Feel free to explore our platform and
            join us in our mission to stay informed and vigilant.
          </p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.7}
          speed={1}
          factor={0.75}
          style={{
            backgroundImage: `url(${people})`,
            backgroundSize: `cover`,
          }}
        ></ParallaxLayer>

        <ParallaxLayer offset={2.4} speed={1}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Home;
