import React, { useReducer } from 'react';
import { Modal, Header, Body, Footer } from '../src';
// import { Button } from '@westpac/button';

export default () => {
	const initialState = { default: { open: false }, small: { open: false }, large: { open: false } };

	const modalReducer = (state, action) => {
		switch (action.type) {
			case 'default':
				return { ...state, default: { open: action.payload.open } };
			case 'small':
				return { ...state, small: { open: action.payload.open } };
			case 'large':
				return { ...state, large: { open: action.payload.open } };
			default:
				throw new Error();
		}
	};

	const [state, dispatch] = useReducer(modalReducer, initialState);

	const updateModal = (type, open) => dispatch({ type, payload: { open } });

	return (
		<>
			<p>
				<button onClick={() => updateModal('default', true)}>Open default modal</button>
			</p>
			<Modal isOpen={state.default.open} onClose={() => updateModal('default', false)}>
				<Header>Modal Title</Header>
				<Body>
					‘It was much pleasanter at home’, thought poor Alice, ‘when one wasn’t always growing
					larger and smaller, and being ordered about by mice and rabbits. I almost wish I hadn’t
					gone down that rabbit-hole — and yet — and yet — it’s rather curious, you know, this sort
					of life! I do wonder what can have happened to me! When I used to read fairy-tales, I
					fancied that kind of thing never happened, and now here I am in the middle of one! There
					ought to be a book written about me, that there ought!’
				</Body>
				<Footer>
					<button appearance="faint" onClick={() => updateModal('default', false)}>
						Close
					</button>
				</Footer>
			</Modal>

			<p>
				<button onClick={() => updateModal('small', true)}>Open small modal</button>
			</p>
			<Modal isOpen={state.small.open} onClose={() => updateModal('small', false)} size="small">
				<Header>Modal Title Modal Title Modal Title Modal Title Modal Title Modal Title</Header>
				<Body>
					‘It was much pleasanter at home’, thought poor Alice, ‘when one wasn’t always growing
					larger and smaller, and being ordered about by mice and rabbits. I almost wish I hadn’t
					gone down that rabbit-hole — and yet — and yet — it’s rather curious, you know, this sort
					of life! I do wonder what can have happened to me! When I used to read fairy-tales, I
					fancied that kind of thing never happened, and now here I am in the middle of one! There
					ought to be a book written about me, that there ought!’ ‘It was much pleasanter at home’,
					thought poor Alice, ‘when one wasn’t always growing larger and smaller, and being ordered
					about by mice and rabbits. I almost wish I hadn’t gone down that rabbit-hole — and yet —
					and yet — it’s rather curious, you know, this sort of life! I do wonder what can have
					happened to me! When I used to read fairy-tales, I fancied that kind of thing never
					happened, and now here I am in the middle of one! There ought to be a book written about
					me, that there ought!’ ‘It was much pleasanter at home’, thought poor Alice, ‘when one
					wasn’t always growing larger and smaller, and being ordered about by mice and rabbits. I
					almost wish I hadn’t gone down that rabbit-hole — and yet — and yet — it’s rather curious,
					you know, this sort of life! I do wonder what can have happened to me! When I used to read
					fairy-tales, I fancied that kind of thing never happened, and now here I am in the middle
					of one! There ought to be a book written about me, that there ought!’
				</Body>
				<Footer>
					<button appearance="faint" onClick={() => updateModal('small', false)}>
						Close
					</button>
				</Footer>
			</Modal>

			<p>
				<button onClick={() => updateModal('large', true)}>Open large modal</button>
			</p>
			<Modal isOpen={state.large.open} onClose={() => updateModal('large', false)} size="large">
				<Header>Modal Title</Header>
				<Body>
					‘It was much pleasanter at home’, thought poor Alice, ‘when one wasn’t always growing
					larger and smaller, and being ordered about by mice and rabbits. I almost wish I hadn’t
					gone down that rabbit-hole — and yet — and yet — it’s rather curious, you know, this sort
					of life! I do wonder what can have happened to me! When I used to read fairy-tales, I
					fancied that kind of thing never happened, and now here I am in the middle of one! There
					ought to be a book written about me, that there ought!’
				</Body>
				<Footer>
					<button appearance="faint" onClick={() => updateModal('large', false)}>
						Close
					</button>
				</Footer>
			</Modal>
		</>
	);
};
