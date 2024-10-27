// Components
import Icon from '../../components/Icons/Icon';
import { render } from '@testing-library/react';

const clickMock = jest.fn();
// Tests
describe('Tests for <Icon /> component', () => {
  it('Renders with default props', () => {
    const { container } = render(<Icon name="password" />);
    // Create the snapshot test
    expect(container).toMatchSnapshot();
  });
});
