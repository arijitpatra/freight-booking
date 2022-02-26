import PropTypes from "prop-types";
import "./RouteDetails.scss";
import { Cargo } from "../Cargo";
import { LocationMarker } from "../LocationMarker";
import { Fixed } from "../Fixed";
import { SemiFlexible } from "../SemiFlexible";
import { Flexible } from "../Flexible";
import { DestinationDetails } from "../DestinationDetails";

export const RouteDetails = ({ stops, schedulingStrategy, canAddCargo }) => {
  return (
    <>
      {stops.map((item, i) => {
        return (
          <div className="row">
            <div className="routes">
              <LocationMarker
                key={item}
                index={i}
                lastIndex={stops.length - 1}
              />

              <DestinationDetails destination={item} />

              <div className="right">
                {schedulingStrategy === "fixed" && <Fixed index={i} />}

                {schedulingStrategy === "semiFlexible" && (
                  <SemiFlexible index={i} />
                )}

                {schedulingStrategy === "flexible" && <Flexible />}

                <h4 className="text-orange m-t-1r cursor-not-allowed">
                  + <span className="underline">Gate Reference</span>
                </h4>
              </div>
            </div>
            <div>{canAddCargo && <Cargo />}</div>
          </div>
        );
      })}
    </>
  );
};

RouteDetails.propTypes = {
  stops: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.string.isRequired,
      company: PropTypes.string,
      openingHours: PropTypes.shape({
        from: PropTypes.number.isRequired,
        to: PropTypes.number.isRequired,
      }),
      schedule: PropTypes.shape({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
  schedulingStrategy: PropTypes.oneOf(["fixed", "semiFlexible", "flexible"])
    .isRequired,
  canAddCargo: PropTypes.bool.isRequired,
};
