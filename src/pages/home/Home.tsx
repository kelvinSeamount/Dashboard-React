import ChartBox from "../../components/chartBox/ChartBox";
import TopBox from "../../components/topBox/TopBox";

import "./home.scss";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import GraphChartBox from "../../components/graphChartBox/GraphChartBox";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox id={0} username={""} email={""} img={""} amount={""} />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box7">
        <GraphChartBox />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
