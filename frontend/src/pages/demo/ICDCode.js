import React from "react";
import PropTypes from "prop-types";

class ICDCode extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      ICD_CODE: PropTypes.string,
      PROB: PropTypes.string,
      SHORT_TITLE: PropTypes.string,
      LONG_TITLE: PropTypes.string,
    }),
    index: PropTypes.string,
  };
  render() {
    const { ICD_CODE, PROB, SHORT_TITLE, LONG_TITLE } = this.props.details;
    return (
      <div className="table-row">
        <div className="table-data text">{ICD_CODE}</div>
        <div className="table-data text">{SHORT_TITLE}</div>
        <div className="table-data number">
          {Math.round(PROB * 1000) / 1000}
        </div>
      </div>
    );
  }
}

export default ICDCode;
