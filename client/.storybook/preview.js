import GlobalStyle from '../src/GlobalStyle'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { MemoryRouter } from "react-router";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
}

export const decorators =[
  Story => (
    <>
      <MemoryRouter initialEntries={['/']}>
        <GlobalStyle />
        <Story />
      </MemoryRouter>
    </>
  ),
]