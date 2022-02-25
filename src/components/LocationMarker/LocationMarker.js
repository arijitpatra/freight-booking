import "./LocationMarker.scss";

export const LocationMarker = ({ index, lastIndex }) => {
  return (
    <div className="locationMarker">
      <span className="locationMarker-text">
        {index !== lastIndex ? index + 1 : "X"}
      </span>
    </div>
  );
};
