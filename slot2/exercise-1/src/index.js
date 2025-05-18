import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NamePerson from "./NamePerson";
import PersonDetail from "./PersonDetail";
import PeopleList from "./PeopleList";
import PeopleTable from "./PeopleTable";
import FirstTeenager from "./FirstTeenager";
import AreAllTeenagers from "./AreAllTeenagers";
import SortPeople from "./SortPeople";
import GroupByOccupation from "./GroupByOccupation";
import AverageAgeByOccupation from "./AverageAgeByOccupation";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <NamePerson />
    <PersonDetail />
    <PeopleList />
    <PeopleTable />
    <FirstTeenager />
    <AreAllTeenagers />
    <SortPeople />
    <GroupByOccupation />
    <AverageAgeByOccupation />
  </React.StrictMode>
);

reportWebVitals();
