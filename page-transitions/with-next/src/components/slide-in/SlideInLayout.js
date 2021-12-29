// Derived from https://dev.to/anxinyang/page-transition-effect-in-nextjs-9ch

import { useState, useEffect } from 'react'

import styles from './SlideIn.module.css'

// TODO: make so element doesn't require position: absolute after transitioning in

const TransitionLayout = ({ children }) => {
	const [displayChildren, setDisplayChildren] = useState(children)
	const [transitionStage, setTransitionStage] = useState('initial')

	useEffect(() => {
		if (children !== displayChildren) {
			setTransitionStage('out')
		}
	}, [children, displayChildren, setDisplayChildren])

	return (
		<>
			<main
				className={`${styles['content']} ${
					children !== displayChildren ? styles['transitioning'] : ''
				}`}
				{...(transitionStage === 'out' ? { 'aria-hidden': 'true' } : {})}>
				{displayChildren}
			</main>

			{children !== displayChildren ? (
				<main
					onTransitionEnd={() => {
						if (transitionStage === 'out') {
							setTransitionStage('in')
							setDisplayChildren(children)
						}
					}}
					className={`${styles['content']} ${styles[transitionStage]}`}>
					{children}
				</main>
			) : null}
		</>
	)
}

export default TransitionLayout
