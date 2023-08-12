import { fetchBackendPOST } from '@/utils/backendFetch';
import React, { useEffect } from 'react'

const index = () => {

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await fetchBackendPOST('/add', "heyyo");

        if (response.status === 200) {
          const data = await response.json();

          console.log(data)
        } else {

          console.log("error server:", response.statusText);
        }
      } catch (error) {

        console.log("error:", error);
      }
    }
    fetch();
  }, [])
  return (
    <div>index</div>
  )
}

export default index