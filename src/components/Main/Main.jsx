import React from "react";

//Assets
import download from "../../assets/Icon/download.png"; // https://www.flaticon.com/free-icon/download_2989976
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
        <ContentWrap className="m-4 w-3/5 rounded-lg bg-white p-4">
          <div className="flex">
            <Subtitle className="text-xl">Sales Chart</Subtitle>
            <Button className="ml-1">
              <Icon alt="Question Icon" src={question} size="16" />
            </Button>
            <Button className="ml-auto px-2">
              <Icon alt="More Icon" src={more} />
            </Button>
          </div>
          <LineChart />
        </ContentWrap>

        <ContentWrap className="m-4 w-2/5 rounded-lg bg-white p-4">
          <div className="flex">
            <Subtitle className="text-xl">Channels</Subtitle>
            <Button className="ml-1">
              <Icon alt="Question" src={question} size="16" />
            </Button>
            <Button className="ml-auto px-2">
              <Icon alt="More Icon" src={more} />
            </Button>
          </div>
          <DoughnutChart />

          <div className="flex justify-center">
            <Button className="flex items-center rounded-lg bg-orange-500 px-5 py-3 text-white hover:bg-orange-600">
              <Icon alt="Download Icon" className="mr-2" src={download} />
              Download Report
            </Button>
          </div>
        </ContentWrap>
      </div>
    </main>
  );
}
