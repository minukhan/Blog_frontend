import React from "react";

function LoadingSpinner({
  width = "30px",
  height = "30px",
  color = "currentColor",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="2" r="0" fill={color}>
        <animate
          attributeName="r"
          begin="0"
          calcMode="spline"
          dur="3s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        />
      </circle>
      {Array.from({ length: 7 }).map((_, index) => (
        <circle
          key={index}
          cx="12"
          cy="2"
          r="0"
          fill={color}
          transform={`rotate(${45 * (index + 1)} 12 12)`}
        >
          <animate
            attributeName="r"
            begin={`${(index + 1) * 0.375}s`}
            calcMode="spline"
            dur="3s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            repeatCount="indefinite"
            values="0;2;0;0"
          />
        </circle>
      ))}
    </svg>
  );
}

export default LoadingSpinner;
