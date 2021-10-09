import React from "react";

export default function Tab(props: {
  setPageBody: (arg0: any) => void;
  tabName:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return (
    <button
      onClick={() => {
        props.setPageBody(props.tabName);
      }}
    >
      {props.tabName}
    </button>
  );
}
