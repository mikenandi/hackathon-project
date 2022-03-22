const Feedbackform = () => {
	return (
		<div className=''>
			<div>
				<form className='flex flex-col justify-center items-center'>
					<div className='h-auto w-96 shadow-lg px-2 py-2 border border-gray-100 mt-3'>
						<p
							htmlFor='impresion'
							className='font-semibold py-1 border-b-2 border-green-400'>
							Does the event created a valuable impresion?
						</p>
						<div className='flex flex-items-center mt-3'>
							<input
								type='radio'
								id='no'
								name='impresion'
								value=''
								className='mr-1'
							/>
							<label
								htmlFor='no'
								className='capitalize text-gray-700 font-semibold mr-3'>
								no
							</label>
							<input
								type='radio'
								id='notSure'
								name='impresion'
								value='notSure'
								className='mr-1'
							/>
							<label
								htmlFor='notSure'
								className='text-gray-700 font-semibold mr-3'>
								Not sure
							</label>
							<input
								type='radio'
								id='yes'
								name='impresion'
								value='yes'
								className='mr-1'
							/>
							<label htmlFor='yes' className='text-gray-700 font-semibold mr-3'>
								Yes
							</label>
						</div>
					</div>
					<div className='h-auto w-96 shadow-lg px-2 py-2 border border-gray-100 mt-3'>
						<p className='font-semibold py-1 border-b-2 border-green-400'>
							Do you feel any session to be boring?
						</p>
						<div className='flex flex-row mt-3'>
							<input
								type='checkbox'
								id='ses1'
								name='ses1'
								value='ses1'
								className='mr-1'
							/>
							<label
								htmlFor='sess1'
								className='text-gray-700 font-semibold mr-3'>
								sesion 1.
							</label>
							<input
								type='checkbox'
								id='ses1'
								name='ses1'
								value='ses1'
								className=''
							/>
							<label
								htmlFor='sess1'
								className='text-gray-700 font-semibold mr-3'></label>
							<input
								type='checkbox'
								id='ses1'
								name='ses1'
								value='ses1'
								className='mr-1'
							/>
							<label
								htmlFor='sess1'
								className='text-gray-700 font-semibold mr-3'>
								session 2
							</label>
							<input
								type='checkbox'
								id='ses1'
								name='ses1'
								value='ses1'
								className='mr-1'
							/>
							<label
								htmlFor='sess1'
								className='text-gray-700 font-semibold mr-3'>
								session 3
							</label>
							<input
								type='checkbox'
								id='ses1'
								name='ses1'
								value='ses1'
								className='mr-1'
							/>
							<label htmlFor='sess1' className='text-gray-700 font-semibold'>
								session 3
							</label>
						</div>
					</div>
					<div className='h-auto w-96 shadow-lg px-2 py-2 border border-gray-100 mt-3'>
						<p className='font-semibold py-1 border-b-2 border-green-400'>
							which session touched you?
						</p>
						<div className='flex flex-row mt-3'>
							<input
								type='checkbox'
								id='ses1'
								name='ses1'
								value='ses1'
								className='mr-1'
							/>
							<label
								htmlFor='sess1'
								className='text-gray-700 font-semibold mr-3'>
								session 1
							</label>
							<input
								type='checkbox'
								id='ses1'
								name='ses1'
								value='ses1'
								className='mr-1'
							/>
							<label
								htmlFor='sess1'
								className='text-gray-700 font-semibold mr-3'>
								session 2
							</label>
							<input
								type='checkbox'
								id='ses1'
								name='ses1'
								value='ses1'
								className='mr-1'
							/>
							<label
								htmlFor='sess1'
								className='text-gray-700 font-semibold mr-3'>
								session 2
							</label>
						</div>
					</div>
					<div className='h-auto w-96 shadow-lg px-2 py-2 border border-gray-100 mt-3'>
						<div className='font-semibold py-1 border-b-2 border-green-400 '>
							what is the most usable succes you gained from this event?
						</div>
						<div className='flex flex-row mt-3'>
							<textarea
								type='text'
								name='comments'
								id='comments'
								placeholder='your answer'
								className='h-auto w-72 border-b-2 border-gray-300 px-2 py-3'
							/>
						</div>
					</div>
					<div className='h-auto w-96 shadow-lg px-2 py-2 border border-gray-100 mt-3'>
						<p className='font-semibold py-1 border-b-2 border-green-400'>
							would you reccomend this event?
						</p>
						<div className='flex flex-row mt-3'>
							<input
								type='radio'
								id='yes'
								name='recomend'
								value='yes'
								className='mr-1'
							/>
							<label htmlFor='yes' className='text-gray-700 font-semibold mr-3'>
								Yes
							</label>
							<input
								type='radio'
								id='no'
								name='recomend'
								value='no'
								className='mr-1'
							/>
							<label htmlFor='no' className='text-gray-700 font-semibold mr-3'>
								No
							</label>
						</div>
					</div>
					<div className='h-auto w-96 shadow-lg px-2 py-2 border border-gray-100 mt-3'>
						<p className='font-semibold py-1 border-b-2 border-green-400'>
							how would you rate this event out of 5?
						</p>
						<div className='flex flex-row mt-3'>
							<select
								name='rate'
								id='rate'
								className='h-8 w-12 text-gray-900 font-semibold border'>
								<option value='1' className='text-gray-900 font-semibold '>
									1
								</option>
								<option value='2' className='text-gray-900 font-semibold '>
									2
								</option>
								<option value='3' className='text-gray-900 font-semibold '>
									3
								</option>
								<option value='4' className='text-gray-900 font-semibold '>
									4
								</option>
								<option value='5' className='text-gray-900 font-semibold '>
									5
								</option>
							</select>
						</div>
					</div>
					<div className='h-auto w-96 shadow-lg px-2 py-2 border border-gray-100 mt-3'>
						<p className='font-semibold py-1 border-b-2 border-green-400'>
							Any other comments
						</p>
						<div className='flex flex-row mt-3'>
							<textarea
								type='text'
								name='comments'
								id='comments'
								placeholder='your comments'
								className='h-auto w-80 border-b-2 border-gray-300 px-2 py-3'
							/>
						</div>
					</div>
					<div className='h-auto w-96 shadow-lg px-2 py-2 border border-gray-100 mt-3'>
						<p className='text-blue-700 font-semibold p-2 '>
							Try our products, you can book anything
						</p>
						<div className='grid grid-cols-3 grid-flow-row gap-1'>
							<a
								href='www.otapp.com'
								className='capitalize text-sm rounded hover:bg-green-600 h-8 w-20 px-3 py-2 bg-green-400 text-white mt-3 font-semibold'>
								flights
							</a>
							<a
								href='www.otapp.com'
								className='capitalize text-sm rounded hover:bg-green-600 h-8 w-20 px-3 py-2 bg-green-400 text-white mt-3 font-semibold'>
								hotels
							</a>
							<a
								href='www.otapp.com'
								className='text-sm rounded hover:bg-green-600 h-8 w-20 px-3 py-2 bg-green-400 text-white mt-3 font-semibold'>
								ferry
							</a>
							<a
								href='www.otapp.com'
								className='capitalize text-sm rounded hover:bg-green-600 h-8 w-20 px-3 py-2 bg-green-400 text-white mt-3 font-semibold'>
								tours
							</a>
							<a
								href='www.otapp.com'
								className='capitalize text-sm rounded hover:bg-green-600 h-8 w-20 px-3 py-2 bg-green-400 text-white mt-3 font-semibold'>
								market place
							</a>
							<a
								href='www.otapp.com'
								className='capitalize text-sm rounded hover:bg-green-600 h-8 w-20 px-3 py-2 bg-green-400 text-white mt-3 font-semibold'>
								buss
							</a>
						</div>
					</div>
					<button
						className='rounded hover:bg-green-600 h-12 w-24 px-3 py-2 bg-green-400 text-white mt-3 font-semibold'
						type='submit'>
						submit
					</button>
				</form>
			</div>
		</div>
	)
}
export default Feedbackform
