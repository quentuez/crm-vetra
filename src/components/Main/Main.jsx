import React from "react";

//Assets
import question from "../../assets/Icon/question.png"; // https://www.flaticon.com/free-icon/question_471664
import more from "../../assets/Icon/more.png"; // https://www.flaticon.com/free-icon/more_512142

// Components
import Button from "../Button/Button";
import Content from "../Content/Content";
import ContentWrap from "../ContentWrap/ContentWrap";
import DoughnutChart from "../Chart/DoughnutChart/DoughnutChart";
import Icon from "../Icon/Icon";
import LineChart from "../Chart/LineChart/LineChart";
import Subtitle from "../Subtitle/Subtitle";

export default function Main() {
  return (
    <main>
      <div className="flex p-[24px]">
        <ContentWrap className="m-[15px] flex w-2/3 items-center rounded-lg bg-white p-[15px]">
          <Content className="w-full">
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
          </Content>
        </ContentWrap>

        <ContentWrap className="m-[15px] flex w-1/3 items-center rounded-lg bg-white p-[15px]">
          <Content className="w-full">
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
          </Content>
        </ContentWrap>
      </div>

      <div className="flex p-[24px]">
        <ContentWrap className="m-[15px] flex w-1/3 items-center rounded-lg bg-white p-[15px]">
          <Content className="w-full">
            <div className="flex">
              <Icon alt="Question" src={question} />
              <Button>
                <Icon alt="More" src={more} />
              </Button>
            </div>
            <div className="flex">
              <Subtitle>Orders</Subtitle>
            </div>
            <div className="flex">
              <p>310</p>
            </div>
            <div className="flex">
              <p>Over last month 1.4%</p>
            </div>
          </Content>
        </ContentWrap>

        <ContentWrap className="m-[15px] flex w-1/3 items-center rounded-lg bg-white p-[15px]">
          <Content className="w-full">
            <div className="flex">
              <Icon alt="Question" src={question} />
              <Button>
                <Icon alt="More" src={more} />
              </Button>
            </div>
            <div className="flex">
              <Subtitle>Sales</Subtitle>
            </div>
            <div className="flex">
              <p>$3.759,00</p>
            </div>
            <div className="flex">
              <p>Over last month 2.4%</p>
            </div>
          </Content>
        </ContentWrap>

        <ContentWrap className="m-[15px] flex w-1/3 items-center rounded-lg bg-white p-[15px]">
          <Content className="w-full">
            <div className="flex">
              <Subtitle>Recent Reviews</Subtitle>
              <Button>View All</Button>
            </div>
            <div className="flex">
              <Content>s</Content>
            </div>
          </Content>
        </ContentWrap>
      </div>
    </main>
  );
}
