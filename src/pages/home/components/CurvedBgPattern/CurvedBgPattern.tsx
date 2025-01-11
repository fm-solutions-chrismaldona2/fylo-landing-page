import { SvgProps } from "@shared/types";
import styles from "./CurvedBgPattern.module.css";
import clsx from "clsx";

const CurvedBgPattern = ({ className, fill = "#181F2B" }: SvgProps) => {
  return (
    <>
      <svg
        width="1440"
        height="449"
        viewBox="0 0 1440 449"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={clsx(styles["svg--desktop"], className)}
        aria-label="presentation"
        preserveAspectRatio="none"
      >
        <g transform="translate(-14)" fill="none" fillRule="evenodd">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <path
            d="M14 413.954c90.836-5.359 176.206-50.375 256.111-135.046C389.968 151.9 364.01 105.164 563.005 148.686 762 192.207 745.05 163.699 873 63.13c127.95-100.57 211-77.554 289 44.667 78 122.222 151 162.895 284 207.778 88.667 29.921 92.03 848.285 10.091 2455.09H14V413.956z"
            fill={fill}
          />
        </g>
      </svg>

      <svg
        width="375"
        height="141"
        viewBox="0 0 375 141"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={clsx(styles["svg--mobile"], className)}
        aria-label="presentation"
        preserveAspectRatio="none"
      >
        <g fill="none" fillRule="evenodd">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <path
            d="M0 128.937c22.708-1.669 44.049-15.69 64.024-42.063 29.962-39.56 23.473-54.118 73.218-40.562 49.746 13.556 45.508 4.677 77.494-26.648 31.985-31.325 52.746-24.157 72.245 13.912 19.499 38.07 55.147 47.264 88.395 61.244 22.165 9.32 22.165 1296.047 0 3860.18H0V128.937z"
            fill={fill}
            mask="url(#b)"
          />
        </g>
      </svg>
    </>
  );
};

export default CurvedBgPattern;
