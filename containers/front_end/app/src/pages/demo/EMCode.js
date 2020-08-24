import React from "react";
import PropTypes from "prop-types";

class EMCode extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      initial: PropTypes.bool,
      cc: PropTypes.number,
      exam: PropTypes.number,
      hpi: PropTypes.number,
      ros: PropTypes.number,
      mdm: PropTypes.number,
      pfsh: PropTypes.number,
    }),
    index: PropTypes.string,
  };
  render() {
    const { initial, cc, exam, hpi, ros, mdm, pfsh } = this.props.details;

    var calculatedCode = 99220;

    // Initial Visit
    if (initial) {
      if (cc > 0 && hpi > 0 && exam > 0) {
        if (mdm >= 4 && pfsh === 3 && ros >= 11) {
          calculatedCode = 99223;
        } else if (mdm >= 3 && pfsh === 3 && ros >= 11) {
          calculatedCode = 99222;
        } else if (mdm >= 1 && pfsh >= 1 && ros >= 3) {
          calculatedCode = 99221;
        }
      }
    } else {
      if (cc > 0 && hpi > 0 && exam > 0) {
        if (mdm >= 4 && pfsh >= 1 && ros >= 3) {
          calculatedCode = 99223;
        } else if (mdm >= 3 && pfsh >= 0 && ros >= 1) {
          calculatedCode = 99222;
        } else if (mdm >= 1 && pfsh >= 0) {
          calculatedCode = 99221;
        }
      }
    }

    return <h4 className="code-name">EM Code: {calculatedCode}</h4>;
  }
}

export default EMCode;
