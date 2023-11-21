import React from "react";
import "./works.css";
import data from "../../data/data.json";

function Works() {
  return (
    <section id="work">
      <h2 className="worksTitle">My Projects</h2>
      <div className="project-section">
        {data.map((card) => {
          return (
            <div className="project-card">
              <a href={card.url} alt="cards" target="_blank" rel="noreferrer">
                <img src={`/img/${card.img}`} alt="" />
              </a>

              {/* <h4>{card.title}</h4> */}
              <h6>{card.description}</h6>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Works;
