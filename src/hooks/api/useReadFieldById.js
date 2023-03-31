import useAsync from "../useAsync";
import * as fieldsApi from "../../services/fieldsApi";
import useToken from "../useToken";

export default function useReadFieldById(fieldId) {
    const token = useToken();

    const {
        loading: fieldLoading,
        error: fieldError,
        data: field,
    } = useAsync(() => fieldsApi.getFieldById(token, fieldId), true);

    return { fieldLoading, fieldError, field };
}
