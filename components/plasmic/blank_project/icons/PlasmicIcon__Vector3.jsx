// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 39 43"}
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
          "M37.975 0c-.223.004-.309.6-.334.708a44.167 44.167 0 01-8.92 21.03 43.16 43.16 0 01-16.358 12.7 43.494 43.494 0 01-8.444 2.779c.065-.041.143-.136.208-.176 1.25-1.053 2.463-2.174 3.75-3.157a2.3 2.3 0 00.576-1.493c.025-.106.013-1.232-.273-.963a239.616 239.616 0 00-5.598 4.855c-.552.472-1.065.989-1.532 1.545a1.275 1.275 0 00-.337.482c-.09.147-.193.347-.296.548-.372.867-.793 2.17.187 2.74a8.635 8.635 0 003.093.564 41.91 41.91 0 003.681.196c1.21.061 2.444.017 3.667.025a14.84 14.84 0 003.478-.357c.354-.084.617-1.429.273-1.62a5.973 5.973 0 01-.889-.716c-.13-.142-.258.388-.267.668-.829-.028-1.617.01-2.457.037-1.274-.021-2.537-.095-3.8-.168-1.196-.115-2.394-.229-3.63-.41a5.593 5.593 0 00-.816-.08 43.985 43.985 0 0017.39-7.91A44.9 44.9 0 0034.599 13.58 45.124 45.124 0 0038.019.515c.157-.186.18-.518-.044-.515z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
