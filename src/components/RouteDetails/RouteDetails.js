import { lazy, Suspense } from "react";
import PropTypes from "prop-types";
import "./RouteDetails.scss";
import { LocationMarker } from "../LocationMarker";
import { DestinationDetails } from "../DestinationDetails";
import CircularProgress from "@mui/material/CircularProgress";

// dynamic import for lazy loading
const Cargo = lazy(() => import("../Cargo"));
const Fixed = lazy(() => import("../Fixed"));
const SemiFlexible = lazy(() => import("../SemiFlexible"));
const Flexible = lazy(() => import("../Flexible"));

export const RouteDetails = ({ stops, schedulingStrategy, canAddCargo }) => {
  return (
    <div className="RouteDetails">
      {stops.map((item, i) => {
        return (
          <div className="row" key={item.company + "row"}>
            <div className="location">
              <LocationMarker
                key={`lm-${item.company}`}
                index={i}
                lastIndex={stops.length - 1}
              />

              <DestinationDetails destination={item} />

              <div className="date-time">
                <Suspense fallback={<CircularProgress color="inherit" />}>
                  <section>
                    {schedulingStrategy === "fixed" && <Fixed index={i} />}

                    {schedulingStrategy === "semiFlexible" && (
                      <SemiFlexible index={i} />
                    )}

                    {schedulingStrategy === "flexible" && <Flexible />}
                  </section>
                </Suspense>

                <h4 className="text-orange m-t-1r cursor-not-allowed">
                  + <span className="underline">Gate Reference</span>
                </h4>
              </div>
            </div>
            <div>
              <Suspense
                fallback={
                  <CircularProgress color="inherit" className="m-l-65" />
                }
              >
                {canAddCargo && <Cargo />}
              </Suspense>
            </div>
          </div>
        );
      })}
    </div>
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
