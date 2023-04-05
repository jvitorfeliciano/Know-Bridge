import useAsync from "../useAsync";
import * as questionsApi from "../../services/questionsApi";

export default function usePostQuestionAnswer() {
    const {
        loading: questionAnswerLoading,
        error: questionAnswerdError,
        data: questionAnswer,
        act: postQuestionAnswer
    } = useAsync(questionsApi.postAnswer, false);

    return { questionAnswerLoading, questionAnswerdError, questionAnswer, postQuestionAnswer };
}
