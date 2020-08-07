import React from "react";
import PropTypes from "prop-types";

import { buildUrl } from "../../../core/utils/url";

const Anchor = ({
  children,
  to,
  className,
  handleLinkClick,
  target,
  ...others
}) => (
  <a
    {...others}
    href={buildUrl(to)}
    className={className}
    onClick={handleLinkClick}
    target={target}
  >
    {children}
  </a>
);

Anchor.defaultProps = {
  className: "",
  target: "_self",
  handleLinkClick: () => {},
  to: "",
};

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  handleLinkClick: PropTypes.func,
  to: PropTypes.any,
  target: PropTypes.oneOf(["", "_self", "_blank", "_parent", "_top"]),
};

export default Anchor;
