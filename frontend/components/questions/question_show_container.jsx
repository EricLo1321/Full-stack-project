import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import QuestionShowForm from './question_show';
import { fetchQuestion, deleteQuestion } from '../../actions/question_actions';

const mSTP = (state, ownProps) => {
    return {
    question: state.entities.questions[ownProps.match.params.questionId]
    // question: state.entities.questions
    }
};

const mDTP = (dispatch) => ({
    fetchQuestion: questionId => dispatch(fetchQuestion(questionId)),
    deleteQuestion: question => dispatch(deleteQuestion(question)),
});

export default connect(mSTP, mDTP)(QuestionShowForm);