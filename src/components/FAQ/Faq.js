import React, { useState } from "react";
import { FaqData } from "./FaqData";
import FaqContent from "./FaqContent";
import "./Faq.css";

const Faq = () => {
  const [data] = useState(FaqData);
  return (
    <>
      <section className="main-div reveal">
        <h1 className="common-heading">Frequently Asked Questions </h1>
        <div className="flex-horizontal">
          <div style={{ width: "50%" }}>
            <img
              src={require("../../assets/questions.png")}
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div style={{ width: "48%" }}>
            {data.map((curElem) => {
              return <FaqContent key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
