import React, { useEffect } from "react";

const SquareAppointments = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="square-appointments-widget"></div>;
};

export default SquareAppointments;
