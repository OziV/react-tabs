import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Loading from "./Loading";

const url = "https://course-api.com/react-tabs-project";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setData(newJobs);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="section loading">
        <Loading />
      </section>
    );
  }
  const { company, dates, duties, title } = data[value];

  return (
    <>
      <section className="section">
        <div className="title">
          <h2>experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {data.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && "active-btn"}`}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
        <button type="button" className="btn">
          more info
        </button>
      </section>
    </>
  );
}

export default Home;
