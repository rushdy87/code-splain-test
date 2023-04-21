import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RepositoriesListItem from './RepositoriesListItem';

function renderComponent() {
  const repasitory = {
    full_name: 'facebook/react',
    language: 'javascript',
    description: 'The library for web and native user interfaces',
    owner: 'facebook',
    name: 'react',
    html_url: 'https://github.com/facebook/react',
  };
  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repasitory} />
    </MemoryRouter>
  );

  return { repasitory };
}

test('Shows a link to github homepage for this repasitory', async () => {
  const { repasitory } = renderComponent();

  await screen.findByRole('img', { name: /javascript/i });

  const link = screen.getByRole('link', { name: /github repasitory/i });
  expect(link).toHaveAttribute('href', repasitory.html_url);
});
