import { useEffect } from "react";

export default function LoginSignup() {
  useEffect(() => {
    window.location.replace("/LogIn");
  }, []);
  return <div></div>;
}
