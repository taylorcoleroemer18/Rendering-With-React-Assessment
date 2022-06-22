import React from "react";
import "./ActivityList.css";
import Activity from "./Activity";

function ActivityList({ activities }) {
  let list = activities.map((activity, index) => {
    return <Activity key={index} time={activity.time} description={activity.description} />;
  });
  let content = (
    <>
      <table>
        <tbody>
          {list}
        </tbody>
      </table>
    </>
  );
  return content;
}

export default ActivityList;
