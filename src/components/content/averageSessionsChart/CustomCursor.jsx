import { Rectangle } from "recharts";

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

export default CustomCursor;