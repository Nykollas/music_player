import React from "react";

export default function localfiles(props) {
    const { style } = props;
    return (
<svg width={style.width} height={style.height}
      viewBox="0 0 512 512"
      
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M391.352 70.795V0H118.638L49.8521 68.787V441.205H120.647V512H462.148V70.795H391.352ZM128.586 32.479V78.734H82.3311L128.586 32.479ZM79.852 108.734H158.586V30H361.352V411.205H79.852V108.734ZM432.148 482H150.647V441.205H391.352V100.795H432.148V482Z"
        fill={style.fill}
      />
      <path
        d="M123.019 138.734H318.185V168.734H123.019V138.734Z"
        fill={style.fill}
      />
      <path
        d="M123.019 198.734H318.185V228.734H123.019V198.734Z"
        fill={style.fill}
      />
      <path
        d="M123.019 258.734H318.185V288.734H123.019V258.734Z"
        fill={style.fill}
      />
    </svg>
  );
}
