import React from "react";

export default function engineering(props) {
  const { style } = props;
  return (
    <svg
      width={style.width}
      height={style.height}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M484.902 200.406L444.797 195.309C441.492 185.129 437.414 175.316 432.66 165.996L457.426 134.102C467.453 121.195 466.281 102.977 454.824 91.8828L421.223 58.2812C410.023 46.7188 391.805 45.5664 378.879 55.5742L347.027 80.3398C337.703 75.5859 327.891 71.5078 317.691 68.2031L312.594 28.1602C310.676 12.0977 297.043 0 280.895 0H233.105C216.957 0 203.324 12.0977 201.406 28.0977L196.309 68.2031C186.109 71.5078 176.297 75.5625 166.973 80.3398L135.102 55.5742C122.215 45.5664 103.996 46.7188 92.8828 58.1758L59.2812 91.7539C47.7188 102.977 46.5469 121.195 56.5742 134.121L81.3398 165.996C76.5625 175.316 72.5078 185.129 69.2031 195.309L29.1602 200.406C13.0977 202.324 1 215.957 1 232.105V279.895C1 296.043 13.0977 309.676 29.0977 311.594L69.2031 316.691C72.5078 326.871 76.5859 336.684 81.3398 346.004L56.5742 377.898C46.5469 390.805 47.7188 409.023 59.1758 420.117L92.7773 453.719C103.996 465.258 122.195 466.41 135.121 456.406L166.996 431.637C176.316 436.414 186.129 440.492 196.309 443.777L201.406 483.797C203.324 499.902 216.957 512 233.105 512H280.895C297.043 512 310.676 499.902 312.594 483.902L317.691 443.797C327.871 440.492 337.684 436.414 347.004 431.66L378.898 456.426C391.805 466.453 410.023 465.281 421.117 453.824L454.719 420.223C466.281 409.004 467.453 390.805 457.426 377.879L432.66 346.004C437.438 336.684 441.512 326.871 444.797 316.691L484.82 311.594C500.883 309.676 512.98 296.043 512.98 279.895V232.105C513 215.957 500.902 202.324 484.902 200.406V200.406ZM257 362.668C198.184 362.668 150.332 314.816 150.332 256C150.332 197.184 198.184 149.332 257 149.332C315.816 149.332 363.668 197.184 363.668 256C363.668 314.816 315.816 362.668 257 362.668Z"
          fill={style.fill}
        />
      </g>
    </svg>
  );
}
