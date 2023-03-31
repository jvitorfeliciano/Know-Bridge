import useAsync from "../useAsync";
import * as trailsApi from "../../services/trailsApi";

export default function useDeleteEnrollmentOnTrail() {
    const {
        loading: deleteEnrollmentLoading,
        act: deleteEnrollmentOnTrail,
        error: deleteEnrollmentError,
    } = useAsync(trailsApi.deleteEnrollment, false);

    return { deleteEnrollmentLoading, deleteEnrollmentOnTrail, deleteEnrollmentError };
}
