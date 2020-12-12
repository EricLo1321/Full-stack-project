import { connect } from "react-redux";
import { createQuestion } from "../../actions/question_actions";
import CreateQuestionForm from "./create_question";

const mapStateToProps = (state) => ({
  question: {
      title: '',
      body: '',
      views: 0
  },
  formType: "Edit"
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateQuestion: (question) => dispatch(updateQuestion(question)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestionForm);