const OverView = () => {
	return (
		<div className=''>
			<div className=' m-4 hover:bg-green-100  flex flex-col justify-center items-center font-semibold h-auto border-2 rounded-b-lg border-green-500'>
				<a
					href='/events'
					className='capitalize px-2 py-2 text-lg text-gray-500 font-semibold'>
					platform Overview
				</a>
				<div className='border-b-2 border-gray-700 mt-2 p-2'>2m+ ARTISTS</div>
				<div className='border-b-2 border-gray-700 mt-4 p-2'>
					1.2m+ PLAYLISTS
				</div>
				<div className='border-b-2 border-gray-700 mt-4 p-2'>
					25+ Data sources
				</div>
				<div className='m-2'></div>
			</div>
		</div>
	)
}
export default OverView
