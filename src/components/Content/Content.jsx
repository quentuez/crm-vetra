import React from "react";

// Components
import Button from "../Button/Button";
import Chart from "../Chart/Chart";
import Icon from "../Icon/Icon";

export default function Content({ className }) {
  return (
    <div className={className}>
      <h3>Sales Chart</h3>
      <Button>
        <Icon />
      </Button>
      <Button>
        <Icon />
      </Button>
      <Chart />
    </div>
  );
}
