// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SocialIconsIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 148 21"}
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
          "M137.186 0c-2.853 0-3.209.013-4.329.063-1.118.053-1.88.228-2.549.488a5.139 5.139 0 00-1.86 1.211 5.12 5.12 0 00-1.211 1.86c-.26.67-.437 1.431-.488 2.55-.053 1.12-.063 1.476-.063 4.328 0 2.852.013 3.209.063 4.329.052 1.117.228 1.88.488 2.549a5.154 5.154 0 001.211 1.86 5.132 5.132 0 001.86 1.21c.67.26 1.432.437 2.549.489 1.12.052 1.476.063 4.329.063 2.852 0 3.208-.013 4.328-.063 1.118-.053 1.88-.23 2.549-.488a5.152 5.152 0 001.86-1.211 5.127 5.127 0 001.211-1.86c.259-.67.437-1.432.489-2.55.052-1.12.063-1.476.063-4.328 0-2.853-.014-3.209-.063-4.329-.053-1.117-.23-1.88-.489-2.549a5.14 5.14 0 00-1.211-1.86 5.11 5.11 0 00-1.86-1.21c-.669-.26-1.431-.437-2.549-.489-1.12-.052-1.476-.063-4.328-.063zm0 1.89c2.802 0 3.136.014 4.243.062 1.024.048 1.58.218 1.949.363.492.19.84.418 1.209.784.367.368.594.717.784 1.209.144.369.315.925.362 1.948.049 1.108.061 1.44.061 4.244 0 2.803-.013 3.137-.065 4.244-.053 1.024-.224 1.58-.368 1.948-.196.492-.419.84-.787 1.21a3.282 3.282 0 01-1.207.784c-.368.143-.932.315-1.956.361-1.115.05-1.443.061-4.252.061-2.809 0-3.137-.013-4.251-.064-1.025-.054-1.589-.224-1.957-.369a3.243 3.243 0 01-1.206-.787 3.185 3.185 0 01-.788-1.207c-.144-.367-.314-.932-.367-1.956-.04-1.102-.054-1.442-.054-4.238 0-2.797.014-3.138.054-4.253.053-1.024.223-1.588.367-1.955a3.11 3.11 0 01.788-1.209 3.098 3.098 0 011.206-.785c.368-.146.92-.316 1.944-.369 1.115-.04 1.443-.052 4.251-.052l.04.026zm0 3.218a5.391 5.391 0 100 10.784 5.391 5.391 0 005.391-5.392 5.391 5.391 0 00-5.391-5.392zm0 8.892a3.499 3.499 0 01-3.5-3.5 3.5 3.5 0 113.5 3.5zm6.865-9.104a1.26 1.26 0 01-2.52 0 1.26 1.26 0 012.52 0zm-42.135-1.114a8.745 8.745 0 01-2.472.678 4.337 4.337 0 001.893-2.382 8.892 8.892 0 01-2.736 1.036 4.305 4.305 0 00-7.336 3.922A12.193 12.193 0 0182.39 2.55a4.22 4.22 0 00-.582 2.166c0 1.496.761 2.811 1.914 3.584a4.292 4.292 0 01-1.95-.54v.054a4.308 4.308 0 003.454 4.224 4.373 4.373 0 01-1.936.074 4.32 4.32 0 004.029 2.99 8.635 8.635 0 01-5.34 1.842 9.01 9.01 0 01-1.023-.059 12.246 12.246 0 006.612 1.933c7.922 0 12.249-6.559 12.249-12.238 0-.182 0-.367-.013-.55a8.68 8.68 0 002.152-2.23l-.041-.018zM53.12 17.895h-3.11v-4.872c0-1.162-.024-2.658-1.62-2.658-1.622 0-1.87 1.265-1.87 2.572v4.958h-3.11V7.875h2.988v1.366h.04c.417-.788 1.432-1.619 2.949-1.619 3.15 0 3.733 2.074 3.733 4.773v5.5zM39.897 6.504a1.804 1.804 0 01-1.805-1.807 1.806 1.806 0 111.805 1.807zm1.56 11.391h-3.12V7.875h3.12v10.02zM54.674 0H36.778c-.857 0-1.55.677-1.55 1.513v17.974c0 .837.693 1.513 1.55 1.513h17.895c.855 0 1.555-.676 1.555-1.513V1.513c0-.836-.7-1.513-1.556-1.513h.003zM6.815 20.995v-9.577h3.096l.463-3.732H6.815V5.303c0-1.08.29-1.817 1.782-1.817l1.903-.001V.147C10.17.102 9.04 0 7.727 0 4.982 0 3.104 1.74 3.104 4.933v2.753H0v3.732h3.104v9.577h3.711z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SocialIconsIcon;
/* prettier-ignore-end */