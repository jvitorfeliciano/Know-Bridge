import useAsync from "../useAsync";
import useToken from "../useToken";
import * as trailsApi from "../../services/trailsApi";

export default function useReadTrails() {
    const token = useToken();
    const {
        loading: trailsLoading,
        act: getTrails,
        error: trailsError,
        data: trails
    } = useAsync(() => trailsApi.getTrails(token), true);

    return { trailsLoading, getTrails, trailsError, trails };
}
