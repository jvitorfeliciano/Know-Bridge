import useAsync from "../useAsync";
import * as trailsApi from "../../services/trailsApi";
import useToken from "../useToken";

export default function useReadTrailById(trailId) {
    const token = useToken();

    const { loading: trailLoading, error: trailError } = useAsync(() => trailsApi.getTrailById(token, trailId), true);

    return { trailLoading, trailError };
}
