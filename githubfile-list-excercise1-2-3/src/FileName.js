import React, { props } from "react";
import FileIcon from "./FileIcon";
import PropTypes from "prop-types";

const FileName = ({ file }) => (
  (<FileIcon file={file} />), (<span className="file-name">{file.name}</span>)
);

export default FileName;
