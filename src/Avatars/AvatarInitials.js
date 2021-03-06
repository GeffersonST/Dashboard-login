import React, { Component } from "react";

export default class AvatarInitials extends Component {
  static defaultProps = {
    name: "",
    className: "",
    bgColor: "#000",
    fgColor: "#fff",
    rounded: true,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { name, className, bgColor, fgColor, rounded } = this.props;
    const userName = name.split(" ");

    const avatarInitials = {
      display: "table",
      height: 10,
      width: 10,

      backgroundColor: bgColor,
      color: fgColor,
      borderRadius: rounded ? "50%" : "none",
    };

    const avatarSpan = {
      display: "table-cell",
      verticalAlign: "middle",
      textAlign: "center",
    };

    const avatarTitle = {
      margin: 1,
      padding: 1,
      fontFamily: "Lato",
      fontWeight: `400`,
      letterSpacing: 0,
      textTransform: "uppercase",
    };

    return (
      <div
        className={className}
        style={avatarInitials}
        title={name.toUpperCase()}
      >
        <span style={avatarSpan}>
          <h1 style={avatarTitle}>
            {`${
              userName.length >= 2
                ? `${userName[0].charAt(0)}${userName[1].charAt(0)}`
                : userName[0].charAt(0)
            }`}
          </h1>
        </span>
      </div>
    );
  }
}
