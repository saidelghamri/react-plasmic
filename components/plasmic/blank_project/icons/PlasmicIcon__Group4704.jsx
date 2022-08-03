// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group4704Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 20"}
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
          "M8 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M7.42 19.814a.998.998 0 001.16 0C8.884 19.599 16.03 14.44 16 8c0-4.411-3.589-8-8-8-4.41 0-8 3.589-8 7.995-.029 6.445 7.116 11.604 7.42 11.819zM8 2c3.31 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73C6.39 16.427 1.98 12.441 2 8c0-3.309 2.691-6 6-6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group4704Icon;
/* prettier-ignore-end */
