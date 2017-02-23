import { connect } from 'react-redux';
import { signup, processSuccess } from '../actions/session_actions';
import Success from './Success';

const mapStateToProps = ({session}) => {
  return {
    session: session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processSuccess: confirmDetails => dispatch(processSuccess(confirmDetails))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Success);
