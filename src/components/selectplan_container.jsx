import { connect } from 'react-redux';
import { processPlan } from '../actions/session_actions';
import SelectPlan from './SelectPlan';

const mapStateToProps = ({session}) => {
  return {
    session: session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processPlan: planDetails => dispatch(processPlan(planDetails))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectPlan);
