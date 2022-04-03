import React from "react";

import { View } from "@react-pdf/renderer";

interface Props {
  style?: object;
  color?: string;
  borderWidth?: number;
}

export const SeparatorPDF: React.FC<Props> = ({ style, color, borderWidth }) => {
  const originalStyles = {
    borderBottomColor: color || "#e7e7e7",
    borderBottomWidth: borderWidth || 4,
  };

  const combinedStyles = { ...style, ...originalStyles };

  return <View style={combinedStyles} />;
};
