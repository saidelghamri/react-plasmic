// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
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
          "M13.288 3.799c.69 0 1.249-.555 1.249-1.246V1.249a1.247 1.247 0 10-2.497 0v1.304c0 .69.558 1.246 1.248 1.246z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M17.724 2.16H15.21v.634a1.901 1.901 0 01-3.8 0V2.16H6.338v.634a1.904 1.904 0 01-1.901 1.902c-1.05 0-1.9-.853-1.9-1.902V2.16L0 2.128V18h16.476l1.267-.004-.02-15.836zm-1.249 14.576H1.268V6.596h15.208v10.14z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M4.417 3.799c.69 0 1.25-.555 1.25-1.246V1.249a1.247 1.247 0 10-2.497 0v1.304c0 .69.557 1.246 1.247 1.246zm3.922 4.158H6.342V9.72h1.997V7.957zm3.231 0h-2V9.72h2V7.957zm2.993 0h-1.997V9.72h1.997V7.957zm-6.224 2.927H6.342v1.762h1.997v-1.762zm3.231 0h-2v1.762h2v-1.762zm2.993 0h-1.997v1.762h1.997v-1.762zM8.339 13.87H6.342v1.761h1.997V13.87zm-3.173-2.986H3.17v1.762h1.996v-1.762zm0 2.986H3.17v1.761h1.996V13.87zm6.404 0h-2v1.761h2V13.87zm2.993 0h-1.997v1.761h1.997V13.87z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
