import Head from "next/head"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Event from "../components/event"

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
						<div className='mt-3 h-auto w-auto px-6 py-2 bg-green-500 rounded-bl-xl text-2xl text-white font-semibold'>
							Tell us your feedback.
						</div>
						<div className='mt-3 h-auto w-auto px-4 py-2 text-lg text-gray-900 font-semibold border-b border-gray-300  '>
							select your event
						</div>
					</div>
					{/*categories*/}
					<div className='h-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 grid-flow-row gap-2 justify-center items-center'>
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
					</div>
				</main>
				<Footer />
			</div>
		</div>
	)
}
export default Events
