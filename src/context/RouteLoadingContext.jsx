import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { ROUTE_LOAD_DELAY } from "../constants/loading";

const RouteLoadingContext = createContext(false);

export const RouteLoadingProvider = ({ children }) => {
  const { pathname, search } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), ROUTE_LOAD_DELAY);
    return () => clearTimeout(timer);
  }, [pathname, search]);

  return (
    <RouteLoadingContext.Provider value={loading}>{children}</RouteLoadingContext.Provider>
  );
};

export const useRouteLoading = () => useContext(RouteLoadingContext);
