import { useState } from "react";

const Cta = ({ handleCta }) => (
  <div className="cta">
    <button onClick={handleCta} className="btn">
      Call to Action
    </button>
  </div>
);

const Box = ({ id, boxes, handleCta }) => {
  return (
    <>
      <div className="box">Content Box {id + 1}</div>
      {id === 3 && <Cta handleCta={handleCta} />}
      {/* //To ensure the button remains centered among the 8 boxes */}
    </>
  );
};

const MainContent = () => {
  const [boxes, setBoxes] = useState(4); //initial state
  const handleCta = () => (boxes === 4 ? setBoxes(8) : setBoxes(4)); //Add more boxes
  return (
    <section className="main-content">
      <h2>Section Title</h2>
      <div className="content-box">
        {[...Array(boxes)].map((v, i) => (
          <Box id={i} boxes={boxes} handleCta={handleCta} key={i} />
        ))}
      </div>
    </section>
  );
};

export default MainContent;
