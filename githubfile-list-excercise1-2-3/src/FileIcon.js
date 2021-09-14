import React, { props } from "react";
import PropTypes from "prop-types";

const FileIcon = ({ file }) => {
  var icon = "fa-file-text-o";
  if (file.type === "folder") {
    icon = "fa-folder";
  }
  return (
    <td className="file-icon">
      <i className={`fa ${icon}`} />
    </td>
  );
};
FileIcon.propTypes = {
  file: PropTypes.object.isRequired,
};

export default FileIcon;
