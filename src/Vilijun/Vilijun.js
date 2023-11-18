import React from "react";

export const Vilijun = () => {
  return (
    <>
      <section className="vilijun-box">
        <article className="text-box">
          <h2>VILIJUN</h2>
          <p>
            Vilijun je roman namijenjen onima koji su skloni putovanjima i
            upoznavanju samoga sebe očima drugoga
          </p>
          <span>-JASNA HORVAT</span>
        </article>
        <div className="language-picker">
          <select name="languages" id="language-select">
            <option value="hrvatski">Hrvatski</option>
            <option value="english">English</option>
            <option value="内斯基">内斯基</option>
          </select>
        </div>
      </section>
    </>
  );
};
