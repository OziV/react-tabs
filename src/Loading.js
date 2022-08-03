import React from "react";
import { Oval } from "react-loader-spinner";

function Loading() {
  return (
    <section className="section loading">
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        strokeWidthSecondary={1}
        color="green"
        secondaryColor="white"
      />
    </section>
  );
}

export default Loading;
