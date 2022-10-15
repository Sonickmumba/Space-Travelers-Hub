import { render } from '@testing-library/react';
// import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Profile from '../components/profile/Profile';

describe('Test for  Profile component', () => {
  it('App Component renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
