import { useLocation } from "react-router-dom";
import SitesGridView from "../SitesGridView/SitesGridView";
import SitesMapOverview from "../SitesMapOverview/SitesMapOverview";

const Overview = () => {
    const location = useLocation();

    //Parse query params
    const queryParams = new URLSearchParams(location.search);
    const viewType = queryParams.get("type");
    
    return viewType === "map" ? <SitesMapOverview /> : <SitesGridView />;
}

export default Overview;