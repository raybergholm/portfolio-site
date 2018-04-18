import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "./utils";

const Sticky = ({ id, style, stickyConfig, children, ...props }) => (
  <div id={id} style={style} data-sticky {...stickyConfig} className={generateClassName("sticky", props)}>
    {children}
  </div>
);

Sticky.propTypes = {
  children: PropTypes.oneOfType(
    PropTypes.object,
    PropTypes.array
  ),
  id: PropTypes.string,
  stickyConfig: PropTypes.object,
  style: PropTypes.object
};

export default Sticky;