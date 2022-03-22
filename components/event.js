const Event = () => {
	return (
		<div className=''>
			<div className=' m-4   flex flex-col justify-center items-center font-semibold h-auto border rounded border-gray-200 shadow-lg'>
				<img src='bg2.jpg' alt='image here' class='h-44 w-full' />
				<p className='capitalize px-2 py-2 text-lg text-gray-500 font-semibold'>
					event title title title tittle event title title title tittle event
					title title title tittleevent title title title tittle
				</p>
				<a
					href='/feedback'
					className='px-2 py-2 m-2 h-auto w-32 bg-green-500 text-white hover:bg-green-700 rounded font-semibold '>
					Rate our event
				</a>
			</div>
		</div>
	)
}
export default Event
