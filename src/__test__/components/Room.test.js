import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Room from '../../components/Room';

describe('Login', () => {
  test('should rendered correctly', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Room />
        </Provider>
      </BrowserRouter>,
    );
    expect(screen).toMatchSnapshot();
  });
});
