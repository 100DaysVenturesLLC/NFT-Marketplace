import React from 'react'
import Table from './table/table'

function Overview() {
    return (
        <div>
            <div className='text-foreground-primary text-shadow text-xl font-semibold pb-6'>
                Rank
            </div>
            <div><Table/></div>
        </div>
    )
}

export default Overview