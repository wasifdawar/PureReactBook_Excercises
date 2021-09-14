import React from "react";
import ReactDOM from "react-dom";
import Time from "./time";
import FileIcon from "./FileIcon";
import FileName from "./FileName";
import CommitMessage from "./CommitMessage";
import PropTypes from "prop-types";
import "./index.css";

const FileListItem = ({ file }) => (
  <tr className="filelist-item">
    <td>
      <FileIcon file={file} />
    </td>
    <td>
      <FileName file={file} />
    </td>
    <td>
      <CommitMessage commit={file.latestCommit} />
    </td>
    <td>
      <Time time={file.updated_at} />
    </td>
  </tr>
);
FileListItem.propTypes = {
  file: PropTypes.object.isRequired,
};

const FileList = ({ files }) => (
  <table className="filelist">
    <tbody>
      {files.map((file) => (
        <FileListItem key={file.id} file={file} />
      ))}
    </tbody>
  </table>
);

FileList.propTypes = {
  files: PropTypes.array,
};

const testFiles = [
  {
    id: 1,
    name: "src",
    type: "folder",
    updated_at: "2021-07-11 21:24:00",
    latestCommit: {
      message: "Initial commit",
    },
  },
  {
    id: 2,
    name: "tests",
    type: "folder",
    updated_at: "2021-08-11 21:24:00",
    latestCommit: {
      message: "Initial commit",
    },
  },
  {
    id: 3,
    name: "README",
    type: "file",
    updated_at: "2021-09-12 21:24:00",
    latestCommit: {
      message: "Added a readme",
    },
  },
];

ReactDOM.render(
  <FileList files={testFiles} />,
  document.getElementById("root")
);
