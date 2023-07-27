import { Route } from "react-router-dom";
import CrewRoute from "../Components/Crew/CrewRoute";
import Planet from "../Components/Destination/Planet";
import TechRoute from "../Components/Technology/TechRoute";
import { crewData, planetsData, techData } from "../Data/Data";


export function renderPlanetsRoutes() {
  return planetsData.map((obj, i) => {
    let path = obj.planetName.replace(" ", "-").toLowerCase();
    if (!i) path = "";

    return <Route key={obj.id} path={path} element={<Planet data={obj} />} />;
  });
}


export function renderCrewRoutes() {
  return crewData.map((obj, i) => {
    let path = obj.name.replace(" ", "-").toLowerCase();
    if (!i) path = "";

    return (
      <Route key={obj.id} path={path} element={<CrewRoute data={obj} />} />
    );
  });
}


export function renderTechRoutes() {
  return techData.map((obj, i) => {
    let path = obj.routePath.replace(" ", "-").toLowerCase();
    if (!i) path = "";

    return (
      <Route key={obj.id} path={path} element={<TechRoute data={obj} />} />
    );
  });
}
