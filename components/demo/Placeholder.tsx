import { usePlaceholder } from "use100hooks";

const Placeholder = () => {
  const options = {
    width: 300,
    height: 300,
    bgColor: "#f2f2f2",
    textColor: "#333",
    text: "300 x 300",
  };

  const { dataUrlImg } = usePlaceholder(options);

  return (
    <div>
      <h1>Placeholder Example</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={dataUrlImg} alt="Placeholder" />
      </div>
    </div>
  );
};

export default Placeholder;
