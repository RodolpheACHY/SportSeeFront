import { Rectangle } from "recharts";
import PropTypes from "prop-types";

const CustomCursor = ({ points, width, height }) => {
    if (!points || points.length === 0) return null;
    const { x } = points[0]

    return (
        <Rectangle
            x={x}
            y={0}
            width={width + 40}
            height={height + 140}
            fill="rgba(0, 0, 0, 0.2)"
        />
    );
};


CustomCursor.propTypes = {
    points: PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number,
      })
    ),
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
};
  

export default CustomCursor;