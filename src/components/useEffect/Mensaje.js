import React, { useEffect, useState } from "react";

const Mensaje = () => {
  const [cordenadas, setCordenadas] = useState({
    x: 0,
    y: 0,
  });
  const { x, y } = cordenadas;

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cord = { x: e.x, y: e.y };
      setCordenadas(cord)
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h3>Cordenas</h3>
      <p>X :{x}</p>
      <p>y :{y}</p>
    </div>
  );
};

export default Mensaje;
