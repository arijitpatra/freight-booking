import { formatTime } from "../../utils";

export const DestinationDetails = ({ destination }) => {
  return (
    <section key={destination.company} className="company">
      <div className="fw-800 fs-21">{destination.address}</div>
      <div>{destination.company}</div>
      <div>
        <span className="text-gray fw-600">Opening Hours: </span>{" "}
        <span className="fw-600">
          {formatTime(destination.openingHours.from)} -{" "}
          {formatTime(destination.openingHours.to)}
        </span>
      </div>
    </section>
  );
};
