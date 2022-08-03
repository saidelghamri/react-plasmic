// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 5"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.99 4.998a.965.965 0 01-.547-.164L.309 1.264A.688.688 0 01.004.78.639.639 0 01.198.258a.92.92 0 01.58-.255.976.976 0 01.626.162l4.587 3.198L10.577.28a.925.925 0 01.296-.13 1.019 1.019 0 01.654.058.838.838 0 01.256.18.692.692 0 01.175.252.604.604 0 01-.066.569.77.77 0 01-.228.22L6.53 4.878a.986.986 0 01-.54.121z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
