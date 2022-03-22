import Head from "next/head"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import {useState, useEffect} from "react"

const url = "http://localhost:4000/api/v1/todos"

const Todo = () => {
	const [todos, settodos] = useState([])

	const fetchtodos = async () => {
		const res = await fetch(url)
		const todos = await res.json()
		settodos(todos)
	}

	useEffect(() => {
		fetchtodos()
	}, [])

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
							select the event category
						</div>
					</div>
					{/*categories*/}
					<div className='h-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 grid-flow-row gap-2 justify-center items-center'>
						{todos.map((todo) => {
							const {id, task, created_at} = todo
							return (
								<div
									key={id}
									className='h-auto w-96 p-4 flex flex-col items-center jusstify-center border-gray-400 shadow-lg rounded m-3'>
									<h1 className='text-xl font-semibold text-black'>{task}</h1>
									<p className='text-sm text-gray-700'>
										this was created on {created_at}
									</p>
								</div>
							)
						})}
					</div>
				</main>
				<Footer />
			</div>
		</div>
	)
}
export default Todo
