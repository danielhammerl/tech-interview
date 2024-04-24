import React from "react";
import "./navigation.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

type NavigationItemProps = {
  title: string;
  id: string;
};

export function NavigationItem({ title, id }: NavigationItemProps) {
  let resolved = useResolvedPath(`/${id}`);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={`/${id}`} className="navigation-item">
      <h4
        style={{
          textDecoration: match ? "underline" : "none",
          color: match ? "#ee7900" : "black",
        }}
      >
        - {title}
      </h4>
    </Link>
  );
}
