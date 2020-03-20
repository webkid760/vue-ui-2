import { addParameters } from '@storybook/vue';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

addParameters({
  docs: {
    inlineStories: true,
    container: DocsContainer,
    page: DocsPage,
  },
});
