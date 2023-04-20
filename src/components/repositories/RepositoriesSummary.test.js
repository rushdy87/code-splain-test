import { render, screen } from '@testing-library/react';
import RepositoriesSummary from './RepositoriesSummary';

test('displays the primary language of the repository', () => {
  const repository = {
    stargazers_count: 30,
    open_issues: 1,
    forks: 50,
    language: 'Javascript',
  };

  render(<RepositoriesSummary repository={repository} />);

  const language = screen.getByText(/javascript/i);

  expect(language).toBeInTheDocument();
});
