import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import SignUp from '../../components/SignUp';

describe('SignUp', () => {
  test('should rendered correctly', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SignUp />
        </Provider>
      </BrowserRouter>,
    );
    expect(screen).toMatchSnapshot();
  });
});
