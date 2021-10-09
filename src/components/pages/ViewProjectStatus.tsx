import React from "react";

export default function ViewProjectStatus(props: {
  data:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return <div>{props.data}</div>;
}
