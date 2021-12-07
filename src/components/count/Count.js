import React from "react";
import { connect } from "react-redux";
import { getCountAction } from "../../action/countAction";

function Count(props) {
  return (
    <div>
      <button onClick={() => props.getCountAction("MINUS", props.count)}>
        -
      </button>
      count:{props?.count}
      <button onClick={() => props.getCountAction("PLUS", props.count)}>
        +
      </button>
    </div>
  );
}

const mapStateToProps = ({ CountReducer }) => {
  const { count } = CountReducer;
  return {
    count,
  };
};

export default connect(mapStateToProps, { getCountAction })(Count);
