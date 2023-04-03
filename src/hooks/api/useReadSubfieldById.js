import useAsync from "../useAsync";
import * as subfieldsApi from "../../services/subfieldsApi";
import useToken from "../useToken";

export default function useReadSubfieldById(subfieldId) {
    const token = useToken();

    const {
        loading: subfieldLoading,
        error: subfieldError,
        data: subfield,
    } = useAsync(() => subfieldsApi.getSubfieldById(token, subfieldId), true);

    return { subfieldLoading, subfieldError, subfield };
}
