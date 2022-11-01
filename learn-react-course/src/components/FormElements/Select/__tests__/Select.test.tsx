import React from 'react';
import { render, screen } from '@testing-library/react';
import { Select } from '../index';

const options = [
  {
    value: 'test value',
    title: 'test title',
  },
];

describe('Select component tests:', () => {
  it('select  component is mounted', () => {
    render(<Select />);
    expect(screen.getByTestId('select')).toBeInTheDocument();
  });

  it('select component has a title', () => {
    render(<Select title="Test title" />);
    expect(screen.getByText(/^Test title$/i)).toBeInTheDocument();
  });

  it('select component has a helper text', () => {
    render(<Select helperText="test helper text" />);
    expect(screen.getByText(/^test helper text$/i)).toBeInTheDocument();
  });

  it('select component has option value', () => {
    render(<Select options={options} />);
    expect(screen.getByText(/^test title$/i)).toBeInTheDocument();
  });
});
