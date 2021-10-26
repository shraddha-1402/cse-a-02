import { useState } from "react";

export default function UserAvatar(params: any) {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav-item">
      <button className="dropdown-trigger" onClick={() => setOpen(!open)}>
        <span>SN</span>
      </button>
      {open && params.children}
      {/* {params.children} */}
    </div>
  );
}
