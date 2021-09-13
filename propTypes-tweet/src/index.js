import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import PropTypes from "proptypes";
import "./index.css";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="contetnt">
        <NameWithHandle author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

//.....
var testTweet = {
  message: "Something about cats",
  gravatar: "xyz",
  author: {
    handle: "cat",
    name: "Cat Person",
  },
  likes: 2,
  retweets: 0,
  timestamp: "2016-07-30 21:24:37",
};

function Avatar({ hash }) {
  var url = `https://www.gravatar.com/avatar/${hash}`;

  return <img src={url} className="avatar" alt="avatar" />;
}

function Message({ text }) {
  return <div className="message">{text}</div>;
}

function NameWithHandle({ author }) {
  const { name, handle } = author;
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}
NameWithHandle.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
  }).isRequired,
};

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

function Count({ count }) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>;
  } else {
    return null;
  }
}

const RetweetButton = ({ count }) => (
  <span className="retweetbutton">
    <i className="fa fa-retweet retweet-button" />
    {Count(count)}
  </span>
);

const LikeButton = ({ count }) => (
  <span className="likebutton">
    <i className="fa fa-heart like-button" />
    {count > 0 && <span className="like-count">{count}</span>}
  </span>
);

LikeButton.prototype = {
  count: PropTypes.number,
};

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

function Dave() {
  const firstName = "Wasif  ";
  const lastName = "Dawar";
  return React.createElement(
    "Person",
    {
      age: 24,
      name: firstName + "" + lastName,
      className: "person",
    },
    null
  );
}
function getRetweetCount(count) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>;
  } else {
    return null;
  }
}

function Comment({ author, message, likes }) {
  return (
    <div>
      <div className="author">{author}</div>
      <div className="message">{message}</div>
      <div className="likes"></div>
      {likes > 0 ? likes : "No"}likes
    </div>
  );
}

Comment.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  likes: PropTypes.number,
};
function customValidator(props, propName, componentName) {
  if (props[propName].length !== 3) {
    return new Error(
      "Invalid prop `" +
        propName +
        "`supplied to" +
        "`" +
        componentName +
        "`. Lengthis not 3"
    );
  }
}

const CustomTest = ({ myCustomProp }) => <span>{myCustomProp}</span>;
CustomTest.propTypes = {
  myCustomProp: customValidator,
};

ReactDOM.render(
  <Tweet tweet={testTweet} />,
  //<CustomTest myCustomProp={1,2,3} />,
  document.querySelector("#root")
);
