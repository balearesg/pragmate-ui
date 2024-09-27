export const animations = {
	slideDown: {
		initial: { y: '-50%', opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { duration: 0.3 } },
		exit: { y: '50%', opacity: 0, transition: { duration: 0.3 } },
	},

	default: {
		initial: { opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { duration: 0.3 } },
		exit: { y: '50%', opacity: 0, transition: { duration: 0.3 } },
	},
	fadeInUpfadeOutLeft: {
		initial: { y: '-90%', opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { duration: 0.3 } },
		exit: { x: '50%', opacity: 0, transition: { duration: 0.3 } },
	},
};
