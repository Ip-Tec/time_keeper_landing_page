import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-black mx-auto w-full relative text-center text-3xl font-bold mt-4">
      <img src="./bg2.jpeg" alt="Clock" className="w-screen h-1/2 mr-2" />
      <span className="absolute top-1/2 left-1/2 bg-gray-600 text-white rounded-md p-4 bg-opacity-50 ">
        {" "}
        {time.toLocaleTimeString()}
      </span>
    </div>
  );
};

export default Clock;
