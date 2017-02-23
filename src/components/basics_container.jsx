import { connect } from 'react-redux';
import { signup, processBasics } from '../actions/session_actions';
import Basics from './Basics';

const mapStateToProps = ({ session }) => ({
  errors: session.errors
});

const mapDispatchToProps = dispatch => {
  return {
    processBasics: basicsDetails => dispatch(processBasics(basicsDetails))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basics);
