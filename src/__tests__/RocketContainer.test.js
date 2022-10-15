import { render } from '@testing-library/react';
// import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketContainer from '../components/rockets/RocketContainer';

describe('Test for  App component', () => {
  it('App Component renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <RocketContainer />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
