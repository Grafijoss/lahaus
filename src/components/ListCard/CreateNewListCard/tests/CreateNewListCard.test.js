import { render } from '@testing-library/react';
import CreateNewListCard from '../CreateNewListCard';

test('renders learn react link', () => {
  const { queryByTestId } = render(<CreateNewListCard />);
  const title = queryByTestId('title');
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('Crear una nueva lista');
});
