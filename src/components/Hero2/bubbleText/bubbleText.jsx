import "./styles/index.scss"
const BubbleText = ({text}) => {
    return (
      <h1 className="heading04">
        {text.split("").map((child, idx) => (
          <span className="hoverText" key={idx}>
            {child}
          </span>
        ))}
      </h1>
    );
  };

export default BubbleText