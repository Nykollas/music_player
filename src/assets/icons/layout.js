import React from "react";

export default function layout(props) {
  const { style } = props;
  return (
    <svg
      width={style.width}
      height={style.height}
      viewBox="0 0 512 512"
      
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M208 0H16C7.163 0 0 7.163 0 16V208C0 216.837 7.163 224 16 224H208C216.837 224 224 216.837 224 208V16C224 7.163 216.837 0 208 0ZM192 192H32V32H192V192Z"
        fill={style.fill}
      />
      <path
        d="M496 0H304C295.163 0 288 7.163 288 16V208C288 216.837 295.163 224 304 224H496C504.837 224 512 216.837 512 208V16C512 7.163 504.837 0 496 0ZM480 192H320V32H480V192Z"
        fill={style.fill}
      />
      <path
        d="M208 288H16C7.163 288 0 295.163 0 304V496C0 504.837 7.163 512 16 512H208C216.837 512 224 504.837 224 496V304C224 295.163 216.837 288 208 288ZM192 480H32V320H192V480Z"
        fill={style.fill}
      />
      <path
        d="M496 288H304C295.163 288 288 295.163 288 304V496C288 504.837 295.163 512 304 512H496C504.837 512 512 504.837 512 496V304C512 295.163 504.837 288 496 288ZM480 480H320V320H480V480Z"
        fill={style.fill}
      />
    </svg>
  );
}
