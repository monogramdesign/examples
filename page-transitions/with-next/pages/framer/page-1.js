import { useState, useEffect } from 'react'
import { AnimatePresence, usePresence } from 'framer-motion'
import Link from 'next/link'

const UALTest = () => {
	const [rendered, setRendered] = useState(true)

	return (
		<div>
			<button
				style={{
					cursor: 'pointer',
					background: 'grey',
					color: 'white',
					padding: '0.5rem',
					marginBottom: '10px',
					borderRadius: '6px'
				}}
				onClick={() => setRendered(!rendered)}>
				toggle
			</button>

			<AnimatePresence>{rendered ? <TestComponent /> : null}</AnimatePresence>

			<Link href="/framer/page-2">
				<a>Page 2</a>
			</Link>
		</div>
	)
}

const delay = 500
const TestComponent = () => {
	// beginning of lifecycle
	const [isVisible, setIsVisible] = useState(false)
	useEffect(() => setTimeout(() => setIsVisible(true), delay), [])

	// end of lifecycle
	const [isPresent, safeToRemove] = usePresence()
	useEffect(() => {
		!isPresent && setTimeout(safeToRemove, delay)
	}, [isPresent, safeToRemove])

	const showComponent = isPresent && isVisible

	return (
		<p
			style={{
				opacity: showComponent ? 1 : 0,
				transition: `${delay}ms`,
				transitionTimingFunction: 'ease'
			}}>
			hi
		</p>
	)
}

export default UALTest
