import { Header } from "./Header/Header";
import { Vilijun } from "./Vilijun/Vilijun";
import { QuoteGen } from "./QuoteGen/QuoteGen";
import style from "./style/main.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div>
      <Parallax pages={5}>
        <ParallaxLayer
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/assets/pozadina/pozadina4.jpg"
            })`,
            backgroundSize: "cover",
            margin: "0 auto",
          }}
        >
          <Header />
          <Vilijun />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/assets/pozadina/pozadina4.jpg"
            })`,
            backgroundSize: "cover",
            margin: "0 auto",
          }}
        >
          <QuoteGen />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/assets/pozadina/pozadina4.jpg"
            })`,
            backgroundSize: "cover",
            margin: "0 auto",
          }}
        >
          <h1>Hello World3</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/assets/pozadina/pozadina4.jpg"
            })`,
            backgroundSize: "cover",
            margin: "0 auto",
          }}
        >
          <h1>Hello World4</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/assets/pozadina/pozadina4.jpg"
            })`,
            backgroundSize: "cover",
            margin: "0 auto",
          }}
        >
          <h1>Hello World5</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
