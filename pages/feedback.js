import Head from "next/head"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Feedbackform from "../components/feedbackform"

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
							event title.
						</div>
						<div className='mt-3 h-auto w-auto px-4 py-2 text-lg text-gray-900 font-semibold border-b border-gray-300  '>
							rate event based on questions
						</div>
					</div>
					{/*categories*/}
					<div className='h-auto flex justify-center items-center'>
						<Feedbackform />
					</div>
				</main>
				<Footer />
			</div>
		</div>
	)
}
export default Events
