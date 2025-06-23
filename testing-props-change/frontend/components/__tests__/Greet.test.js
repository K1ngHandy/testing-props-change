import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/';
import Greet from '../Greet';

describe('Greet Component', () => {
	test('Greet renders with correct names if provided', () => {
		const { rerender } = render(<Greet name="Josh" />);
		screen.getByText('Hello, Josh!');
		rerender(<Greet name="Maria" />);
		screen.getByText('Hello, Maria!');
		rerender(<Greet />);
		screen.getByText('Sorry, I do not know you!');
	});
});
