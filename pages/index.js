import Head from "next/head"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import OverView from "../components/overview"

const Home = () => {
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
							Musics analytics driven by data science and AI.
						</div>
						<div className='mt-3 h-auto w-auto px-4 py-2 text-lg text-gray-900 font-semibold border-b border-gray-300  '>
							select the event category
						</div>
					</div>
					{/*categories*/}
					<div className='h-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-flow-row gap-2 justify-center items-center'>
						<OverView />
					</div>
				</main>
				<Footer />
			</div>
		</div>
	)
}
export default Home
