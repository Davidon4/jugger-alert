import React from "react";
import { Text } from "react-native";

export default function TextStyle(props) {
  const {
    color = "#414959",
    margin = 0,
    padding = 0,
    title,
    large,
    medium,
    small,
    tiny,
    light,
    semi,
    bold,
    heavy,
    center,
    right,
    children,
  } = props;

  const fontSize =
    title
      ? 32
      : large
      ? 24
      : medium
      ? 16
      : small
      ? 13
      : tiny
      ? 11
      : 14;

  const fontWeight =
    light
      ? "200"
      : semi
      ? "300"
      : bold
      ? "600"
      : heavy
      ? "700"
      : "400";

  const textAlign =
    center
      ? "center"
      : right
      ? "right"
      : "left";

  const textStyle = {
    color: color,
    margin: margin,
    padding: padding,
    fontSize: fontSize,
    fontWeight: fontWeight,
    textAlign: textAlign,
  };

  return <Text style={textStyle}>{children}</Text>;
}

<Text
title
center
light
style={{ color: "#fff", paddingTop: 50, paddingBottom: 20 }}
>
Trending Links
</Text>