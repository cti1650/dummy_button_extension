import type { FC } from "react"

const convertUnit = (num) => {
  if ((num / (10 ** 12)) >= 1) {
    return `${Math.round(num / (10 ** 12))}T`
  } else if ((num / (10 ** 9)) >= 1) {
    return `${Math.round(num / (10 ** 9))}B`
  } else if ((num / (10 ** 6)) >= 1) {
    return `${Math.round(num / (10 ** 6))}M`
  } else if ((num / (10 ** 3)) >= 1) {
    return `${Math.round(num / (10 ** 3))}K`
  } else {
    return `${num}`
  }
}

type ButtonProps = {
  src: string;
  onClick: () => void;
  badge: number;
}

export const Button: FC<ButtonProps> = ({ src, onClick, badge }) => {
  return (
    <button className="ext-dummy-btn" onClick={onClick}>
      {!!badge && (<div className="ext-dummy-btn-badge">{convertUnit(badge)}</div>)}
      <img src={src} alt="img" />
    </button>
  )
}