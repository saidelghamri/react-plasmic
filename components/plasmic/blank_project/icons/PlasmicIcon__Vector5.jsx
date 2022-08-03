// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector5Icon(props) {
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
          "M4.5 3.602a.9.9 0 100 1.8.9.9 0 000-1.8zm13.239 5.204L9.207.288A.9.9 0 008.55 0h-5.4a.9.9 0 00-.639.261L.261 2.503a.9.9 0 00-.261.64v5.402a.946.946 0 00.261.64l8.541 8.554c.172.164.4.258.639.261a.898.898 0 00.639-.261l7.659-7.663a.9.9 0 00.261-.64.946.946 0 00-.261-.63zM9.441 15.84L1.8 8.185V3.512L3.51 1.8h4.662l7.65 7.645-6.381 6.393z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
