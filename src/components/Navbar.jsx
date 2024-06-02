import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const linkClass = ({ isActive }) =>
        isActive
            ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
            : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

    return (
        <nav className='bg-blue-700 border-b border-indigo-500'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='flex h-20 items-center justify-between'>
                    <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
                        <div className='flex flex-shrink-0 items-center mr-4' to='/'>
                            <img width="64" height="64" src="https://img.icons8.com/external-nawicon-mixed-nawicon/512/external-Job-Search-recruitment-nawicon-mixed-nawicon.png" alt="external-Job-Search-recruitment-nawicon-mixed-nawicon" />                            <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                                Jobsearch
                            </span>
                        </div>
                        <div className='md:ml-auto'>
                            <div className='flex space-x-2'>
                                <div to='/' className='bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'>
                                    Home
                                </div>
                                <div to='/jobs' className='text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'>
                                    Jobs
                                </div>
                                <div to='/add-job' className='text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'>
                                    Add Job
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar