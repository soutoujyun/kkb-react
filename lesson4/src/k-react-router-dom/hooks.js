import {RouterContext} from "./Context";
import {useContext} from "react";
import matchPath from "./matchPath";

export function useHistory() {
  return useContext(RouterContext).history;
}

export function useLocation() {
  return useContext(RouterContext).location;
}

export function useRouteMatch() {
  return useContext(RouterContext).match;
}

export function useParams() {
  const location = useLocation();
  const match = useRouteMatch();
  return match ? match.params : {};
}
