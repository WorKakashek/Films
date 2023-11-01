"use client";
import React, { useEffect } from "react";
interface IErorr {
  error: object;
  reset: Function;
}

function Error({ error, reset }: IErorr) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div>
      <h1>Somethin went wrong</h1>
      <button onClick={() => reset()}>retry</button>
    </div>
  );
}

export default Error;
