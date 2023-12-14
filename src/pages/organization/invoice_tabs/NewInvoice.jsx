import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ImageConfig } from '../../../components/config/ImageConfig';
import './drop-file-input.css';
import Frame from "../../../assets/icons/Frame.svg"


const NewInvoice = props => {

    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }

    return (
        <>
            <div className='flex items-center gap-6 mb-4'>
                <button className='text-[12px] text-primary-blue py-1 px-2 border border-primary-blue ' >Upload invoice</button>
                <button className='text-[12px] text-primary-blue py-1 px-2 border border-primary-blue hover:opacity-70' >Clear uploads</button>
            </div>
            <div
                ref={wrapperRef}
                className="drop-file-input relative w-full h-fit border-2 border-dashed border-primary-blue rounded-2xl flex items-center justify-center bg-white"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}

            >
                <div className="flex items-center flex-col text-var(--txt-second-color) font-semibold p-10">
                    <img src={Frame} alt="" className='' />
                    <p className="mb-2 text-base font-bold text-primary-black dark:text-gray-400">
                        Drop your invoices here
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Accepted file formats include PNG JPG PDF</p>
                </div>
                <input className='opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer' type="file" value="" onChange={onFileDrop} />
            </div>

            <button className='text-[12px] bg-purple-300 text-white py-1 px-2  mt-4' >View emission report</button>
            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">

                        {
                            fileList.map((item, index) => (
                                <div key={index} className="relative flex items-center gap-4 mb-2 bg-white p-2 rounded-2xl">
                                    <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
                                    <div className="flex flex-col justify-between ">
                                        <p>{item.name}</p>
                                        <p>{item.size}B</p>
                                    </div>
                                    <span className=" w-10 h-8 rounded-full flex items-center justify-center absolute right-4 top-1/2 transform -translate-y-1/2 shadow-md cursor-pointer  transition-opacity duration-300 ease-in-out" onClick={() => fileRemove(item)}>x</span>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </>
    );
}

NewInvoice.propTypes = {
    onFileChange: PropTypes.func
}

export default NewInvoice;