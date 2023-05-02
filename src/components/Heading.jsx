import "./Heading.css";

const Heading = (props) => {
  return (
    <div className="Heading">
      <h1 className="text">{props.title}</h1>
    </div>
  );
};

export default Heading;
