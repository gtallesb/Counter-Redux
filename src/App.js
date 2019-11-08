import { connect } from 'react-redux';
import Counter from './Counter';


function mapStateToProps(state) {
  return {countValue: state.count}
};


var increaseCount= {type: 'increase'};
var decreaseCount= {type: 'decrease'};

function mapDispatchToProps(dispatch) {
  return {
    increaseValue: function() {
      return dispatch(increaseCount);
    },
    decreaseValue: function() {
      return dispatch(decreaseCount);
    }
  };
}

var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps)(Counter);

  export default connectedComponent;
