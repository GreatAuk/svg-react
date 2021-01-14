import React, { FC, useMemo } from "react";

interface RoomProps {
  coords: { x: number; y: number }[];
}

const Room: FC<RoomProps> = ({ coords }) => {
  const walls = useMemo(
    () =>
      coords.map((_, i) => {
        const a = coords[i];
        const b = coords[(i + 1) % coords.length];
        return [a, b];
      }),
    [coords]
  );
  return (
    // {
    //   walls.map(() => (

    //   ))
    // }
    <g>
      {walls.map(([a, b], index) => (
        <line
          key={index}
          stroke="#ffffff"
          strokeWidth={80}
          x1={a.x}
          y1={a.y}
          x2={b.x}
          y2={b.y}
        />
      ))}
    </g>
  );
};

export default Room;
