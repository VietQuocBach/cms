import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

function LoggedIn(props: Props) {
  return <>{props.children}</>;
}

export default LoggedIn;
