import helpCircleGray from "../../assets/icons/helpCircleGray.svg";
import notify from "../../assets/icons/notify.svg";

const Topbar = () => {
    return (
        <section className='hidden md:block w-full px-8'>
            <div className='flex items-center justify-between'>
                <div>
                    <h3 className='text-primary-black font-medium text-lg'>Good Afternoon David</h3>
                </div>
                <div className='flex items-center gap-4 py-4'>
                    <div className='flex items-center gap-2 py-4'>
                        <img src={notify} alt="" width={20} height={20} />
                        <span className=' text-primary-black font-medium text-sm'>Activity Log</span>

                    </div>
                    <div className='flex items-center gap-2 py-4'>
                        <img src={helpCircleGray} alt="" width={20} height={20} />
                        <span className=' text-primary-black font-medium text-sm'>Help and Feedback</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Topbar