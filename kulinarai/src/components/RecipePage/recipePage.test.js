/* eslint-disable testing-library/prefer-query-by-disappearance */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecipePage from './recipePage';
import 'whatwg-fetch';

describe('RecipePage', () => {
  it('renders a loading message when the meal data has not loaded yet', () => {
    const { getByText } = render(<RecipePage />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('renders an error message when the meal data is not found', async () => {
    const { getByText } = render(<RecipePage id="invalid-id" />);
    await waitForElementToBeRemoved(() => getByText('Loading...'));
    expect(getByText('Meal not found')).toBeInTheDocument();
  });

  it('renders the meal data correctly when it is found', async () => {
    const mockMeal = {
      meals: [
        {
          idMeal: '123',
          strMeal: 'Chicken Curry',
          strMealThumb: 'https://www.themealdb.com/images/media/meals/abc123.jpg',
          strInstructions: 'Cook the chicken with the curry sauce and serve with rice.',
          strCategory: 'Curry',
          strArea: 'Indian',
        },
      ],
    };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockMeal),
      })
    );

    const { getByText } = render(<RecipePage id="123" />);
    await waitForElementToBeRemoved(() => getByText('Loading...'));

    expect(getByText('Chicken Curry')).toBeInTheDocument();
    expect(getByText('Curry')).toBeInTheDocument();
    expect(getByText('Indian')).toBeInTheDocument();
    expect(getByText('Cook the chicken with the curry sauce and serve with rice.')).toBeInTheDocument();
  });
});
