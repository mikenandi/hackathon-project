import Head from "next/head"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import EventReg from "../components/eventReg"

const Events = () => {
	return (
		<div>
			<Head>
				<title>Rate the event</title>
			</Head>
			<div className='flex flex-col justify-center items-center h-auto'>
				<Navbar />
				<main className='w-full flex flex-col'>
					{/* for the heding of the web */}
					<div className='flex flex-col justify-center items-center'>
						<div className='mt-3 h-auto w-96 shadow-xl px-6 py-2 border border-gray-200 text-xl text-black font-semibold'>
							post event to get feedbacks.
						</div>
					</div>
					{/*categories*/}
					<div className='h-auto flex justify-center items-center'>
						<EventReg />
					</div>
				</main>
				<Footer />
			</div>
		</div>
	)
}
export default Events
