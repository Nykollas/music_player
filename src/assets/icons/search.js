import React from "react";

export default function search(props) {

  const { style  } = props;

  return (
    <svg
      width={style.width}
      height={style.height}
      viewBox={style.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M979.71 881.999L768.38 670.641C819.743 599.198 847.983 513.826 847.983 423.96C847.983 310.763 803.912 204.307 723.756 124.222C643.773 44.1725 537.243 0 423.974 0C310.739 0 204.244 44.0689 124.192 124.222C44.1391 204.238 0.0341797 310.729 0.0341797 423.96C0.0341797 537.191 44.1046 643.647 124.192 723.766C204.244 803.816 310.704 847.988 423.974 847.988C513.808 847.988 599.115 819.888 670.63 768.388L881.96 979.746C895.51 993.26 913.138 1000 930.835 1000C948.567 1000 966.23 993.26 979.71 979.746C1006.71 952.717 1006.71 908.993 979.71 881.999ZM221.976 625.985C167.986 571.996 138.294 500.207 138.294 423.925C138.294 347.643 167.986 275.923 221.976 221.934C275.932 167.946 347.654 138.221 423.974 138.221C500.293 138.221 572.05 167.946 626.006 221.934C679.997 275.923 709.723 347.677 709.723 423.96C709.723 500.242 680.031 571.996 626.006 626.02C572.016 680.008 500.328 709.664 423.974 709.664C347.62 709.664 275.863 679.939 221.976 625.985Z"
        fill={style.fill}
      />
    </svg>
  );
}
