import React from 'react';
import {render} from '@testing-library/react-native';
import OpeningHeader from '../src/components/OpeningHeader';

import homeScreenStr from '../src/constants/homeScreenStr';

const {HOME} = homeScreenStr;

describe('Opening Header', () => {
  test('Should render Header correctly', async () => {
    const component = render(<OpeningHeader />);
    expect(component).toBeDefined();
    expect(component.getByText(HOME.OPENING_HOURS)).toBeDefined();
  });
});
