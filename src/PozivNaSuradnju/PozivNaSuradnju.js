import React from "react";

export const PozivNaSuradnju = () => {
  return (
    <>
      <div className="poziv-na-suradnju-box">
        <div className="info-socials">
          <div className="info-items">
            <h3>Adresa</h3>
            <p>Trg Ljudevita Gaja 7, 31000, Osijek</p>
            <h3>Pronađite događaj i na društvenim mrežama</h3>
          </div>
          <ul className="socials-items">
            <li className="socials-item">
              <a
                href="https://www.facebook.com/millennial.competition22"
                className="socials-link"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/social/facebook.png"}
                  alt="facebook link"
                />
              </a>
            </li>
            <li className="socials-item">
              <a
                href="https://www.youtube.com/c/InstitutAndizet"
                className="socials-link"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/social/youtube.png"}
                  alt="youtube link"
                />
              </a>
            </li>
            <li className="socials-item">
              <a
                href="https://www.instagram.com/millennial.competition/"
                className="socials-link"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/social/instagram.png"}
                  alt="instagram link"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
