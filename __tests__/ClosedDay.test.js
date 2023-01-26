import React from 'react';
import {render} from '@testing-library/react-native';
import ClosedDay from '../src/components/ClosedDay';

describe('Closed Day', () => {
  test('Should render Closed correctly', async () => {
    const component = render(<ClosedDay />);
    expect(component).toBeDefined();
    expect(component.getByText('Closed')).toBeDefined();
  });

  test('Should render Closed and Today correctly', async () => {
    const component = render(<ClosedDay isToday={true} />);
    expect(component).toBeDefined();
    expect(component.getByText('TODAY')).toBeDefined();
    expect(component.getByText('Closed')).toBeDefined();
  });
});
