import { createPortal } from "react-dom";
import { useState } from "react";
import React from "react";

//Assets
import download from "../../assets/Icon/download.png"; // https://www.flaticon.com/free-icon/download_2989976
import more from "../../assets/Icon/more.png"; // https://www.flaticon.com/free-icon/more_512142
import orders from "../../assets/Icon/orders.png"; // https://www.flaticon.com/free-icon/clipboard_839860
import question from "../../assets/Icon/question.png"; // https://www.flaticon.com/free-icon/question_471664
import sales from "../../assets/Icon/sales.png"; // https://www.flaticon.com/free-icon/sales_1389079
import salesChart from "../../assets/Icon/salesChart.png"; // https://www.flaticon.com/free-icon/shopping-bag_9791012

// Components
import Button from "../../components/Button/Button";
import ContentWrap from "../../components/ContentWrap/ContentWrap";
import DoughnutChart from "../../components/Chart/DoughnutChart/DoughnutChart";
import Icon from "../../components/Icon/Icon";
import LineChart from "../../components/Chart/LineChart/LineChart";
import MoreModalContent from "../../components/MoreModalContent/MoreModalContent";
import Option from "../../components/Option/Option";
import SmallLineChart from "../../components/Chart/SmallLineChart/SmallLineChart";
import Subtitle from "../../components/Subtitle/Subtitle";
import SummaryData from "../../components/SummaryData/SummaryData";
import SummaryDataEvaluation from "../../components/SummaryDataEvaluation/SummaryDataEvaluation";

export default function Main() {
  const [showModal, setShowModal] = useState(false);
  return (
    <main className="flex flex-col">
      <div className="flex p-6">
        <ContentWrap className="m-4 w-3/5 rounded-lg bg-white p-4">
          <div className="flex">
            <Subtitle className="text-xl">Sales Chart</Subtitle>
            <Button className="ml-1">
              <Icon alt="Question Icon" src={question} size="16" />
            </Button>
            <Button className="ml-auto px-2">
              <a
                className="hover: flex cursor-pointer items-center"
                onClick={() => setShowModal(true)}
              >
                <Icon alt="More Icon" src={more} />
              </a>
              {showModal &&
                createPortal(
                  <MoreModalContent onClose={() => setShowModal(false)} />,
                  document.body
                )}
            </Button>
          </div>

          <div className="my-4 flex items-center">
            <Icon
              alt="Sales Chart Icon"
              className="mr-3 h-[36px]"
              src={salesChart}
              size="36"
            />
            <SummaryData className="mr-3 text-3xl">$10.552,40</SummaryData>
            <SummaryDataEvaluation className="flex items-center text-sm text-green-600">
              ↑ 8.30%
            </SummaryDataEvaluation>
            <Option />
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
              <a
                className="hover: flex cursor-pointer items-center"
                onClick={() => setShowModal(true)}
              >
                <Icon alt="More Icon" src={more} />
              </a>
              {showModal &&
                createPortal(
                  <MoreModalContent onClose={() => setShowModal(false)} />,
                  document.body
                )}
            </Button>
          </div>
          <DoughnutChart />

          <div className="flex flex-col">
            <div className="mt-6 mb-12 flex justify-around">
              <div className="flex flex-col justify-center">
                <SummaryData className="flex items-center justify-center text-3xl">
                  48%
                </SummaryData>
                <SummaryDataEvaluation className="text-sm text-green-600">
                  ↑ 30.50%
                </SummaryDataEvaluation>
              </div>
              <div className="flex flex-col justify-center">
                <SummaryData className="text-3xl">30%</SummaryData>
                <SummaryDataEvaluation className="flex justify-center text-sm text-red-600">
                  ↓ 15.20%
                </SummaryDataEvaluation>
              </div>
              <div className="flex flex-col justify-center">
                <SummaryData className="text-3xl">22%</SummaryData>
                <SummaryDataEvaluation className="flex justify-center text-sm text-green-600">
                  ↑ 1.80%
                </SummaryDataEvaluation>
              </div>
            </div>
            <div className="flex justify-center">
              <Button className="flex h-[45px] w-[185px] items-center rounded-lg bg-orange-500 px-5 py-3 text-white hover:bg-orange-600">
                <Icon alt="Download Icon" className="mr-2" src={download} />
                Download Report
              </Button>
            </div>
          </div>
        </ContentWrap>
      </div>

      <div className="flex p-6">
        <ContentWrap className="m-4 w-1/3 rounded-lg bg-white p-4">
          <div className="mb-4 flex">
            <Icon
              alt="Orders Icon"
              className="mr-3 h-[36px]"
              src={orders}
              size="36"
            />
            <Button className="ml-auto px-2">
              <a
                className="hover: flex cursor-pointer items-center"
                onClick={() => setShowModal(true)}
              >
                <Icon alt="More Icon" src={more} />
              </a>
              {showModal &&
                createPortal(
                  <MoreModalContent onClose={() => setShowModal(false)} />,
                  document.body
                )}
            </Button>
          </div>
          <div className="mb-4 flex">
            <Subtitle className="text-xl">Orders</Subtitle>
          </div>
          <div className="mb-4 flex">
            <SummaryData className="text-3xl">310</SummaryData>
            <div className="ml-auto px-2">
              <SmallLineChart />
            </div>
          </div>
          <div>
            <SummaryDataEvaluation className="flex text-sm text-green-600">
              ↑ Over last month 1.4%
            </SummaryDataEvaluation>
          </div>
        </ContentWrap>
        <ContentWrap className="m-4 w-1/3 rounded-lg bg-white p-4">
          <div className="mb-4 flex">
            <Icon
              alt="Sales Icon"
              className="mr-3 h-[36px]"
              src={sales}
              size="36"
            />
            <Button className="ml-auto px-2">
              <a
                className="hover: flex cursor-pointer items-center"
                onClick={() => setShowModal(true)}
              >
                <Icon alt="More Icon" src={more} />
              </a>
              {showModal &&
                createPortal(
                  <MoreModalContent onClose={() => setShowModal(false)} />,
                  document.body
                )}
            </Button>
          </div>
          <div className="mb-4 flex">
            <Subtitle className="text-xl">Sales</Subtitle>
          </div>
          <div className="mb-4 flex">
            <SummaryData className="text-3xl">$3.759,00</SummaryData>
            <div className="ml-auto px-2">
              <SmallLineChart />
            </div>
          </div>
          <div>
            <SummaryDataEvaluation className="flex text-sm text-red-600">
              ↓ Over last month 2.4%
            </SummaryDataEvaluation>
          </div>
        </ContentWrap>
        <ContentWrap className="m-4 w-1/3 rounded-lg bg-white p-4"></ContentWrap>
      </div>
    </main>
  );
}
