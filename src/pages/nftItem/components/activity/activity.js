import React from 'react'
import ActivityTable from './activityTable/activityTable'
function Activity({nftData}) {
  return (
    <div><ActivityTable nftData={nftData}/></div>
  )
}

export default Activity