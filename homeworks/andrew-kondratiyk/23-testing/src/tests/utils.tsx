import {render} from '@testing-library/react';
import {ReactElement} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

export function renderWithClient(ui: ReactElement) {
  const testQueryClient = queryClient;
  const {rerender, ...result} = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>,
  );
  return {
    ...result,
    rerender: (rerenderUi: ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>,
      ),
  };
}

export function createWrapper() {
  const testQueryClient = queryClient;
  return ({children}: {children: ReactElement}) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
}
