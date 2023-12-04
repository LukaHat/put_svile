import React, { useEffect, useState } from "react";
import { Header } from "./Header/Header";
import { Vilijun } from "./Vilijun/Vilijun";
import { QuoteGen } from "./QuoteGen/QuoteGen";
import style from "./style/main.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { HrvatskaKulturnaPutovnica } from "./HrvatskaKulturnaPutovnica/HrvatskaKulturnaPutovnica";
import KruznaKreativnost from "./KruznaKreativnost/KruznaKreativnost";
import { PozivNaSuradnju } from "./PozivNaSuradnju/PozivNaSuradnju";
import { Footer } from "./Footer/Footer";
import { Ratings } from "./PozivNaSuradnju/Rating/Rating";

function App(props) {
  const [language, setLanguage] = useState(props.language);

  useEffect(() => {
    // Update language state when props.language changes
    setLanguage(props.language);
  }, [props.language]);

  return (
    <div>
      <Parallax pages={5}>
        <ParallaxLayer
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/assets/pozadina/pos1.jpg"
            })`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderBottom: "2px solid white",
          }}
        >
          <Header />
          <Vilijun />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/assets/pozadina/pos4.png"
            })`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderBottom: "2px solid white",
          }}
        >
          <QuoteGen language={language} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/assets/pozadina/pozadina3.svg"
            })`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderBottom: "2px solid white",
          }}
        >
          <HrvatskaKulturnaPutovnica />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/assets/pozadina/pos2.png"
            })`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderBottom: "2px solid white",
          }}
        >
          <KruznaKreativnost />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/assets/pozadina/pos7.png"
            })`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <PozivNaSuradnju />
          <Ratings language={props.language} />
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
