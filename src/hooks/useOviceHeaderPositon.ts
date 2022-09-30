import { useEffect, useState } from "react"

export const useOviceHeaderPosition = () => {
  const [widthSize, setWidthSize] = useState(null)
  useEffect(() => {
    let tick = setInterval(()=>{
      const ele = document.querySelector(
        "main header.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation2.MuiAppBar-root.MuiAppBar-colorPrimary.MuiAppBar-positionFixed.mui-fixed > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular > div.MuiBox-root:last-child"
      )
      if (ele?.clientWidth) {
        setWidthSize(`${ele?.clientWidth}px`)
      }
    },1000)
    return () => {
      clearInterval(tick)
    }
  }, [window])
  return {
    widthSize
  }
}