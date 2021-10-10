import React from "react";

export default function Tab(props: {
  setPageBody: (arg0: any) => void;
  tabName: string;
  pageBody: string;
}) {
  let className = "tab";
  if (props.pageBody === props.tabName) {
    className += " tab-active";
  }
  return (
    <button
      className={className}
      onClick={() => {
        props.setPageBody(props.tabName);
      }}
    >
      {props.tabName}
    </button>
  );
}
