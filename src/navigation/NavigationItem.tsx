import React from "react";
import "./navigation.css";

type NavigationItemProps = {
  title: string;
};

export function NavigationItem({ title }: NavigationItemProps) {
  return (
    <div className="navigation-item">
      <h4>{title}</h4>
    </div>
  );
}
