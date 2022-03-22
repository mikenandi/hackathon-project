const LogIn = () => {
	return (
		<div className='h-screen flex justify-center items-center'>
			<form className='w-96 h-96  flex flex-col justify-center items-center'>
				<p className='text-3xl text-extrabold text-black '>Otapp</p>
				<input
					type='text'
					className='capitalize mt-6 py-2 px-5 bg-gray-100 focus:bg-white text-gray-900 focus:text-black rounded-sm'
					placeholder='enter your username'
				/>
				<input
					type='password'
					className='capitalize mt-4 py-2 px-5 bg-gray-100 focus:bg-white text-gray-900 focus:text-black rounded-sm'
					placeholder='enter your password'
				/>

				<button
					type='submit'
					className='mt-3 bg-blue-700 rounded-md px-3 py-1 h-10 w-24 hover:bg-blue-900 text-white'>
					login
				</button>

				<div className='mt-8 border-t border-gray-500 flex flex-row '>
					<p className=''>don't have account?</p>
					<span className='text-lg font-semibold text-blue-700'>
						<a href='/signup' className=''>
							sign up
						</a>
					</span>
				</div>
			</form>
		</div>
	)
}
export default LogIn
