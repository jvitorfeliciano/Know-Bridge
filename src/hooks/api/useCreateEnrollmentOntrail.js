import useAsync from "../useAsync";
import * as trailsApi from "../../services/trailsApi";

export default function useCreateEnrollmentOnTrail() {
    const {
        loading: createEnrollmentLoading,
        act: createEnrollmentOnTrail,
        error: createEnrollmentError,
    } = useAsync(trailsApi.createEnrollment, false);

    return { createEnrollmentLoading, createEnrollmentOnTrail, createEnrollmentError };
}
