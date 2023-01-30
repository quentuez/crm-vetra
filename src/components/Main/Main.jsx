import React from "react";

//Assets
import more from "../../assets/Icon/more.png"; // https://www.flaticon.com/free-icon/more_512142
import question from "../../assets/Icon/question.png"; // https://www.flaticon.com/free-icon/question_471664

// Components
import Button from "../Button/Button";
import ContentWrap from "../ContentWrap/ContentWrap";
import DoughnutChart from "../Chart/DoughnutChart/DoughnutChart";
import Icon from "../Icon/Icon";
import LineChart from "../Chart/LineChart/LineChart";
import Subtitle from "../Subtitle/Subtitle";

export default function Main() {
  return (
    <main>
      <div className="flex p-6">
        <ContentWrap>
          <div className="flex">
            <Subtitle>Sales Chart</Subtitle>
            <Button>
              <Icon alt="Question" src={question} />
            </Button>
            <Button>
              <Icon alt="More" src={more} />
            </Button>
          </div>
          <LineChart />
        </ContentWrap>

        <ContentWrap>
          <div className="flex">
            <Subtitle>Channels</Subtitle>
            <Button>
              <Icon alt="Question" src={question} />
            </Button>
            <Button>
              <Icon alt="More" src={more} />
            </Button>
          </div>
          <DoughnutChart />
        </ContentWrap>
      </div>
    </main>
  );
}
