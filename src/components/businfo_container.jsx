import { connect } from 'react-redux';
import { signup, processBusInfo } from '../actions/session_actions';
import BusInfo from './BusInfo';

const mapStateToProps = ({session}) => {
  return {
    session: session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processBusInfo: busInfoDetails => dispatch(processBusInfo(busInfoDetails))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusInfo);
