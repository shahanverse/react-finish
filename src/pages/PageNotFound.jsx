import {Link} from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='min-h-screen flex items-center  justify-center bg-gray-50 px-4 '>
      <div className='text-center max-w-md'>
        <h1 className='text-7xl font-extrabold text-blue-600 mb-4'> 404 </h1>

        <h2 className='text-2xl font-semibold text-gray-800 mb-2'>Page Not Found</h2>

        <p className='text-gray-600 mb-6'> sorry, the page you're looking for doesn't exist or has been moved.</p>

        <Link to="/" className='inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-normal'>Go Back Home</Link>
      </div>
    </div>
  )
}

export default PageNotFound;


