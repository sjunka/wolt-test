import React from 'react';
import {render} from '@testing-library/react-native';
import homeScreenStr from '../src/constants/homeScreenStr';
import OpenDay from '../src/components/OpenDay';

const {HOME} = homeScreenStr;

describe('Open Day', () => {
  test('Should render OpenDay on a Monday correctly', async () => {
    const component = render(<OpenDay day={'Monday'} />);
    expect(component).toBeDefined();
    expect(component.getByText('Monday')).toBeDefined();
  });

  test('Should render OpenDay and Monday correctly', async () => {
    const component = render(<OpenDay isToday={true} />);
    expect(component).toBeDefined();
    expect(component.getByText(HOME.TODAY)).toBeDefined();
  });

  test('Should render OpenDay, Today, Wenesday opening hours correctly', async () => {
    const component = render(
      <OpenDay isToday={true} day={'Wenesday'} openingHours={'10 AM - 6pm'} />,
    );
    expect(component).toBeDefined();
    expect(component.getByText('Wenesday')).toBeDefined();
    expect(component.getByText(HOME.TODAY)).toBeDefined();
    expect(component.getByText('10 AM - 6pm')).toBeDefined();
  });
});
