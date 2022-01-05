// Derived from https://dev.to/anxinyang/page-transition-effect-in-nextjs-9ch

import { useState, useEffect } from 'react'

import styles from './Fade.module.css'

const TransitionLayout = ({ children }) => {
	const [displayChildren, setDisplayChildren] = useState(children)
	const [transitionStage, setTransitionStage] = useState('initial')

	useEffect(() => {
		if (children !== displayChildren) {
			setTransitionStage('out')
		}
	}, [children, displayChildren, setDisplayChildren])

	return (
		<main
			onTransitionEnd={() => {
				if (transitionStage === 'out') {
					setDisplayChildren(children)
					setTransitionStage('in')
				}
			}}
			className={`${styles['content']} ${styles[transitionStage]}`}>
			{displayChildren}
		</main>
	)
}

export default TransitionLayout
