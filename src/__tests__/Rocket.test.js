import { render } from '@testing-library/react';
// import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rocket from '../components/rockets/Rocket';

describe('Test for  App component', () => {
  it('Rocket Component renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
