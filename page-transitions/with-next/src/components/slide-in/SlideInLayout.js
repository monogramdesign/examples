// Derived from https://dev.to/anxinyang/page-transition-effect-in-nextjs-9ch

import { useState, useEffect } from 'react'

import styles from './SlideIn.module.css'

const TransitionLayout = ({ children }) => {
	const [displayChildren, setDisplayChildren] = useState(children)
	const [isTransitioning, setIsTransitioning] = useState(false)

	useEffect(() => {
		if (children !== displayChildren) {
			setIsTransitioning(true)
		}
	}, [children, displayChildren, setDisplayChildren])

	return (
		<>
			<main
				className={`${styles['content']} ${isTransitioning ? styles['transitioning'] : ''}`}
				{...(isTransitioning ? { 'aria-hidden': 'true' } : {})}>
				{displayChildren}
			</main>

			{isTransitioning ? (
				<main
					onAnimationEnd={() => {
						setDisplayChildren(children)
						setIsTransitioning(false)
					}}
					className={`${styles['content']} ${isTransitioning ? styles['slide-in'] : ''}`}>
					{children}
				</main>
			) : null}
		</>
	)
}

export default TransitionLayout
