import { useEffect, useState } from "react";
import Days from "./Days";
import Months from "./Months";
import "./GraphStyles.css";
import RenderContributions from "./RenderContributions";
import DateInfo from "./DateInfo";

const API = "https://dpg.gg/test/calendar.json";

const MyContributionGraph = () => {
    const [data, setData] = useState({});

    const fetchData = async () => {
        try {
            const response = await fetch(API);
            const responseData = await response.json();
            setData(responseData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="main_container">
            <Months />
            <div className="container">
                <Days />
                <div className="contribution-graph">
                    <RenderContributions data={data} />
                </div>
            </div>
            <DateInfo />
        </div>
    );
};

export default MyContributionGraph;
