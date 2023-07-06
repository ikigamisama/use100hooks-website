import { useRenderInfo } from "use100hooks";

const RenderInfo = () => {
  const renderInfo = useRenderInfo("RenderInfo");

  return (
    <div>
      <h1>{renderInfo.name}</h1>
      <p>Render Count: {renderInfo.renderCount}</p>
      <p>Render Timestamp: {renderInfo.renderTimestamp}</p>
    </div>
  );
};
export default RenderInfo;
