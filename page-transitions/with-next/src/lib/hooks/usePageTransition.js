import { useState, useEffect, useCallback } from 'react'

const usePageTransition = (children) => {
	const [displayChildren, setDisplayChildren] = useState(children)
	const [transitionStage, setTransitionStage] = useState('initial')

	const endTransition = useCallback(() => {
		setDisplayChildren(children)
		setTransitionStage('in')
	}, [children])

	useEffect(() => {
		if (children !== displayChildren) {
			setTransitionStage('out')
		}
	}, [children, displayChildren, setDisplayChildren])

	return { displayChildren, transitionStage, endTransition }
}

export default usePageTransition
