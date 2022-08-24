import React from 'react'
import Table from '../overview/table/table'

function Bids() {
  return (
    <div>
    <div className='text-foreground-primary text-shadow text-xl font-semibold pb-6'>
        Latest Bids
    </div>
    <div><Table/></div>
</div>
  )
}

export default Bids