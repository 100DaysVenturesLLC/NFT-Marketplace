import React from 'react'

function PropertiesTable() {
    return (
        <div class="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr className='bg-transparent'>
                        {/* <th></th> */}
                        <th className='bg-transparent text-[#BFCBD9]'>Name</th>
                        <th className='bg-transparent'><span className='float-right pr-6 text-[#BFCBD9]'>Job</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-none'>
                        {/* <th></th> */}
                        <td className='bg-[#121a23] backdrop-blur-xl bg-opacity-30 border-none'>
                            <div className='flex'>
                                <div className='text-[#BFCBD9] text-sm pr-2'>Background</div>
                            </div>
                            <div className='text-base font-semibold text-foreground-primary'>Purple</div>
                        </td>
                        <td className='bg-[#121a23] backdrop-blur-xl bg-opacity-30 border-none'>
                            <div className='text-base font-semibold text-foreground-primary'><span className='float-right'>12.9%</span></div>
                        </td>
                    </tr>
                    <tr className='border-none'>
                        {/* <th></th> */}
                        <td className='bg-[#121a23] backdrop-blur-xl bg-opacity-30 border-none'>
                            <div className='flex'>
                                <div className='text-[#BFCBD9] text-sm pr-2'>Background</div>
                            </div>
                            <div className='text-base font-semibold text-foreground-primary'>Purple</div>
                        </td>
                        <td className='bg-[#121a23] backdrop-blur-xl bg-opacity-30 border-none'>
                            <div className='text-base font-semibold text-foreground-primary'><span className='float-right'>12.9%</span></div>
                        </td>
                    </tr>
                    <tr className='border-none'>
                        {/* <th></th> */}
                        <td className='bg-[#121a23] backdrop-blur-xl bg-opacity-30 border-none'>
                            <div className='flex'>
                                <div className='text-[#BFCBD9] text-sm pr-2'>Background</div>
                            </div>
                            <div className='text-base font-semibold text-foreground-primary'>Purple</div>
                        </td>
                        <td className='bg-[#121a23] backdrop-blur-xl bg-opacity-30 border-none'>
                            <div className='text-base font-semibold text-foreground-primary'><span className='float-right'>12.9%</span></div>
                        </td>
                    </tr>
                    <tr className='border-none'>
                        {/* <th></th> */}
                        <td className='bg-[#121a23] backdrop-blur-xl bg-opacity-30 border-none'>
                            <div className='flex'>
                                <div className='text-[#BFCBD9] text-sm pr-2'>Background</div>
                            </div>
                            <div className='text-base font-semibold text-foreground-primary'>Purple</div>
                        </td>
                        <td className='bg-[#121a23] backdrop-blur-xl bg-opacity-30 border-none'>
                            <div className='text-base font-semibold text-foreground-primary'><span className='float-right'>12.9%</span></div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default PropertiesTable