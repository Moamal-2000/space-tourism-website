import React from "react";
import { Route } from "react-router-dom";

export function renderRoutes(data, element) {
  return data.map((obj, i) => {
    const clonedElement = React.cloneElement(element, { data: obj });
    let path = obj.name.replace(" ", "-").toLowerCase();
    if (!i) path = "";

    return <Route key={obj.id} path={path} element={clonedElement} />;
  });
}
