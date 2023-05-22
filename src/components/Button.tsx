import React from "react";

export function Button(
  props: React.PropsWithChildren<{ color?: string; onClick?: () => void }>
) {
  const { color, children, onClick } = props;
  const style = {
    backgroundColor: color,
    border: "none",
    padding: "4px 6px",
    color: "white",
    cursor: "pointer"
  };

  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}
