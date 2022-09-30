import { useEffect, useState } from "react"

export const useStatus = () => {
  const [status, setStatus] = useState(null)
  useEffect(()=>{
    setStatus({
      approval: {
        count: 0
      },
      mail: {
        count: 2000
      },
      schedule: {
        count: 1
      },
      todo: {
        count: 1000000
      }
    })
  },[])
  return {
    status
  }
}