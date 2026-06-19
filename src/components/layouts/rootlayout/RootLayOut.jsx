import { Outlet } from "react-router";
import NavBar from "../../navbar/NavBar";
import Footer from "../../footer/Footer";
import ScrollToTop from "../../common/ScrollToTop";
import PageLoader from "../../common/PageLoader";
import { RouteLoadingProvider, useRouteLoading } from "../../../context/RouteLoadingContext";

const RootLayoutContent = () => {
  const loading = useRouteLoading();

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <NavBar />
      {loading && <PageLoader />}
      <div
        className={`flex-1 transition-opacity duration-300 ${
          loading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const RootLayOut = () => (
  <RouteLoadingProvider>
    <RootLayoutContent />
  </RouteLoadingProvider>
);

export default RootLayOut;
