const LogIn = () => {
	return (
		<div className='h-screen flex justify-center items-center'>
			<div className='w-96 h-96 flex flex-col justify-center items-center'>
				<p className='text-3xl text-extrabold text-black '>Otapp</p>
				<input
					type='text'
					className='capitalize mt-6 py-2 px-5 bg-gray-100 focus:bg-white text-gray-900 focus:text-black rounded-sm'
					placeholder='enter your full name'
				/>
				<input
					type='text'
					className='capitalize mt-6 py-2 px-5 bg-gray-100 focus:bg-white text-gray-900 focus:text-black rounded-sm'
					placeholder='enter your email'
				/>
				<input
					type='password'
					className='capitalize mt-4 py-2 px-5 bg-gray-100 focus:bg-white text-gray-900 focus:text-black rounded-sm'
					placeholder='enter your password'
				/>
				<div className=''>
					<input
						type='checkbox'
						id='remember-me'
						name='remeber-me'
						className='mr-1 mt-3'
					/>
					<label htmlFor='Remember-me' className=''>
						remember me
					</label>
				</div>

				<button
					type='submit'
					className='mt-4 bg-blue-700 rounded-md px-3 py-1 h-10 w-24 hover:bg-blue-900 text-white'>
					sign up
				</button>
			</div>
		</div>
	)
}
export default LogIn
