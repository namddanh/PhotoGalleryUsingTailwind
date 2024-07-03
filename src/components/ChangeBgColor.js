import React, { useState } from 'react'

const ChangeBgColor = ({ getColor }) => {
	const [activeColor, setActiveColor] = useState('');

	const handleChange = (e) => {
		const { value } = e.target;
		setActiveColor(value);
		getColor(value);
	};

	return (
		<React.Fragment>
			<div className="max-w-sm rounded overflow-hidden my-10 mx-auto ">
				<form action="" className="w-full max-w-sm bg-gray-200">
					<div className="flex items-center border-b-2 border-teal-500 py-2">
						<input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Change Background Colour..." onChange={handleChange} value={activeColor} />
						<button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
							Change
						</button>
					</div>
				</form>
			</div>
		</React.Fragment>
	)
}

export default ChangeBgColor