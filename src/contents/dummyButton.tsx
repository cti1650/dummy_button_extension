import cssText from "data-text:./dummyButton.css"
import { extSettings } from "../config/settings.js"
import type { PlasmoContentScript } from "plasmo"
import { useEffect, useState } from "react"
import { Button } from "~components/ui/Button/Button"
import imgApproval from "url:~assets/ic_goto_approval_40.png"
import imgMail from "url:~assets/ic_goto_mail_40.png"
import imgSchedule from "url:~assets/ic_goto_schedule_40.png"
import imgTodo from "url:~assets/ic_goto_todo_40.png"
import { useOviceHeaderPosition } from "~hooks/useOviceHeaderPositon"
import { useStatus } from "~hooks/useStatus"

export const config: PlasmoContentScript = {
  matches: ["https://*.ovice.in/*"]
}

// export const getRootContainer = () => {
//   console.log("root")
//   return document.querySelector("#mount-point")
// }

// export const getInlineAnchor: PlasmoGetInlineAnchor = await () => document.querySelector("#mount-point")
// export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () =>
//   document.querySelector<HTMLElement>(".MuiToolbar-root.uiToolbar-gutters.MuiToolbar-regular")

export const getMountPoint = async () => {
  console.log("MountPoint")
  return document.querySelector(".MuiToolbar-root.uiToolbar-gutters.MuiToolbar-regular")
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

// // Use this to optimize unmount lookups
// export const getShadowHostId = () => "plasmo-inline-example-unique-id"

const ButtonTypeList = {
  approval: {
    image: imgApproval
  },
  mail: {
    image: imgMail
  },
  schedule: {
    image: imgSchedule
  },
  todo: {
    image: imgTodo
  }
}

const PlasmoPricingExtra = () => {
  const { widthSize } = useOviceHeaderPosition()
  const { status } = useStatus()
  console.log("widthSize", widthSize)
  if(!widthSize){
    return null
  }
  return (
    <div
      className="text-red-500"
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        zIndex: 1201,
        height: "100%",
        right: widthSize
      }}>
        {Object.keys(ButtonTypeList).map(key=>{
          const item = ButtonTypeList[key]
          if(!item){
            return null
          }
          return <Button src={item?.image} onClick={()=>{alert(key)}} badge={status[key]?.count} />
        })}
    </div>
  )
}

export default PlasmoPricingExtra