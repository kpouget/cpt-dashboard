import { Toolbar, ToolbarGroup, ToolbarItem } from "@patternfly/react-core";
import React, { useEffect, useState } from "react";
import { Text4 } from "../PatternflyComponents/Text/Text";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ToolBar = () => {
  const [active, setActive] = useState("/home");

  useEffect(() => {
    const path = window.location.href.split("/");
    let pathName = path[path.length - 1];
    if (pathName === "") pathName = "/home";
    setActive(pathName);
  }, []);

  const linkStyle = (value) => {
    const styles = {};
    if (active === value) {
      styles["color"] = "white";
      styles["borderBottom"] = "2px solid red";
    }
    return styles;
  };

  // Selectors for both ocpJobs / quayJobs / rhoaiNotebooksPerfJobs
  const ocpJobResults = useSelector((state) => state.ocpJobs);
  const quayJobResults = useSelector((state) => state.quayJobs);
  const rhoaiNotebooksPerfJobResults = useSelector((state) => state.rhoaiNotebooksPerfJobs);

  const NavItems = (
    <>
      <ToolbarItem>
        <Link
          to="/home"
          children={"Home"}
          style={linkStyle("/home")}
          onClick={() => setActive("/home")}
        />
      </ToolbarItem>
      <ToolbarItem>
        <Link
          to="/ocp"
          children={"OCP"}
          style={linkStyle("/ocp")}
          onClick={() => setActive("/ocp")}
        />
      </ToolbarItem>
      {/* New Quay ToolbarItem */}
      <ToolbarItem>
        <Link
          to="/quay"
          children={"Quay"}
          style={linkStyle("/quay")}
          onClick={() => setActive("/quay")}
        />
      </ToolbarItem>
      {/* New RHOAI Notebooks Performance ToolbarItem */}
      <ToolbarItem>
        <Link
          to="/rhoai_notebooks_performance"
          children={"RHOAI Notebooks Performance"}
          style={linkStyle("/rhoai_notebooks_performance")}
          onClick={() => setActive("/rhoai_notebooks_performance")}
        />
      </ToolbarItem>
    </>
  );

  return (
    <>
      <Toolbar id="toolbar" isFullHeight={true} isStatic={true}>
        <ToolbarGroup>
          <ToolbarItem>
            <Text4 style={{ color: "#FFFFFF" }} value="CPT-Dashboard" />
          </ToolbarItem>
          {NavItems}
          <ToolbarItem align={{ default: "alignRight" }}>
            {/* Displaying the updated time for OCP or Quay based on the active path */}
            <Text4
              style={{ color: "#FFFFFF" }}
              value={`Last Updated Time | ${
                active === "/ocp" ? ocpJobResults.updatedTime : (active === "/quay" ? quayJobResults.updatedTime : "rhoaiNotebooksPerfJobResults.updatedTime")
              }`}
            />
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    </>
  );
};
