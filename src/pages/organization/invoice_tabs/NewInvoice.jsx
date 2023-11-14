import React from 'react';
import Frame from "../../../assets/icons/Frame.svg"

const NewInvoice = () => {
    return (
        <div className='p-6 bg-white rounded-sm'>
            <div className='flex items-center gap-6'>
                <button className='text-[12px] text-primary-blue py-1 px-2 border border-primary-blue' >Upload invoice</button>
                <button className='text-[12px] text-primary-blue py-1 px-2 border border-primary-blue' >Clear uploads</button>
            </div>

            <div className="flex items-center justify-center w-full mt-4">
                <label htmlFor='dropzone-file' className="flex flex-col items-center justify-center w-full h-64 border border-primary-blue border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <img src={Frame} alt="" />
                        <p className="mb-2 text-base font-bold text-primary-black dark:text-gray-400">
                            Drop your invoices here
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Accepted file formats include PNG JPG PDF</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                </label>
            </div>

            <button className='text-[12px] bg-purple-300 text-white py-1 px-2  mt-4' >View emission report</button>
        </div>
    )
}

export default NewInvoice