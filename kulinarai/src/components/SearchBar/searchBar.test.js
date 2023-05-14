import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from './searchBar';
import 'whatwg-fetch';

describe('SearchBar', () => {
    beforeEach(() => {
        jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
            json: () => Promise.resolve({
                meals: [
                    { idMeal: '1', strMeal: 'Spaghetti Carbonara', strMealThumb: 'https://www.themealdb.com/images/media/meals/xxxyyyzzz.jpg', strCategory: 'Pasta', strArea: 'Italian' },
                ],
            }),
        }));
    });

    afterEach(() => {
        global.fetch.mockRestore();
    });

    test('should render search bar', () => {
        render(<SearchBar />);
        const searchInput = screen.getByPlaceholderText('Search here');
        const searchButton = screen.getByText('Search');
        expect(searchInput).toBeInTheDocument();
        expect(searchButton).toBeInTheDocument();
    });

    test('should load and display search results', async () => {
        render(<SearchBar />);
        const searchInput = screen.getByPlaceholderText('Search here');
        const searchButton = screen.getByText('Search');
        fireEvent.change(searchInput, { target: { value: 'spaghetti' } });
        fireEvent.click(searchButton);
        const spaghettiCard = await screen.findByText('Spaghetti Carbonara');
        const chickenCard = screen.queryByText('Chicken Teriyaki');
        expect(spaghettiCard).toBeInTheDocument();
        expect(chickenCard).not.toBeInTheDocument();
    });

    test('should display an error message if no results found', async () => {
        window.fetch.mockImplementationOnce(() => Promise.resolve({
            json: () => Promise.resolve({
                meals: null
            })
        }));
        render(<SearchBar />);
        const searchInput = screen.getByPlaceholderText('Search here');
        const searchButton = screen.getByText('Search');
        fireEvent.change(searchInput, { target: { value: 'foobar' } });
        fireEvent.click(searchButton);
        const errorMessage = await screen.findByText('No results match your search criteria');
        expect(errorMessage).toBeInTheDocument();
    });
});
