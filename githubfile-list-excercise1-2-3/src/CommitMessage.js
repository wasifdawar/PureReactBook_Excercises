import React, { props } from "react";
import PropTypes from "prop-types";

const CommitMessage = ({ commit }) => (
  <span className="commitmessage">{commit.message}</span>
);

CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired,
};

export default CommitMessage;
