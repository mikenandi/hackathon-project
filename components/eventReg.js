const EventReg = () => {
	return (
		<div className=''>
			<form action='flex flex-col items-center justify-center'>
				<div className='mt-3 h-40 w-96 flex flex-col'>
					<label
						htmlFor='title'
						className='capitalize text-gray-700 font-semibold'>
						your event title
					</label>
					<input
						type='text'
						className='h-12 w-full font-semibold mt-3'
						placeholder='enter the title of your event here'
					/>
				</div>
				<div className='mt-3 h-40 w-96 flex flex-col'>
					<p className='font-semibold py-1 border-b-2 border-green-400'>
						category of your event
					</p>
					<select
						name='event-category'
						id='event-category'
						className='capitalize text-gray-700 font-semibold w-40 px-2 py-2 mt-3'>
						<option value='eventcat' className='text-gray-900 font-semibold '>
							Event Category
						</option>
						<option value='eventcat' className='text-gray-900 font-semibold '>
							Event Category
						</option>
						<option value='eventcat' className='text-gray-900 font-semibold '>
							Event Category
						</option>
						<option value='eventcat' className='text-gray-900 font-semibold '>
							Event Category
						</option>
						<option value='eventcat' className='text-gray-900 font-semibold '>
							Event Category
						</option>
					</select>
				</div>
				<div className='mt-3 h-40 w-96 flex flex-col'>
					<p className='font-semibold py-1 border-b-2 border-green-400'>
						enter your poster for the event
					</p>
					<input
						type='file'
						className='mt-3'
						placeholder='choose the file from your device'
					/>
				</div>
				<button
					onClick='/feedback'
					className='hover:bg-green-600 h-12 w-24 px-3 py-2 bg-green-400 text-white mt-3 font-semibold'
					type='submit'>
					submit
				</button>
			</form>
		</div>
	)
}
export default EventReg
