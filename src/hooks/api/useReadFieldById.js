import useAsync from "../useAsync";
import * as trailsApi from "../../services/trailsApi";
import useToken from "../useToken";

export default function useReadFieldById(fieldId) {
    const token = useToken();

    const {
        loading: fieldLoading,
        error: fieldError,
        data: field,
    } = useAsync(() => trailsApi.getTrailById(token, fieldId), true);

    return { fieldLoading, fieldError, field };
}
