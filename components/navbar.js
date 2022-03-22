const Navbar = () => {
	return (
		<div className=''>
			<nav className='flex flex-row justify-between p-4 border-b border-gray-300 w-screen'>
				<div className='text-3xl capitalize font-extrabold'>smartData.</div>
				<form className=''>
					<input
						type='search'
						className='rounded-full border font-semibold h-10 w-48 px-2 py-1'
						placeholder='search...'
					/>
				</form>
			</nav>
		</div>
	)
}
export default Navbar
