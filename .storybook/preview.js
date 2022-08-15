import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme';

export const decorators = [cssVariablesTheme];

const createStyleTags = (url) => {
  return {
    styleTag: null,
    innerStyles: '',
    use: async function () {
      if (!this.styleTag) {
        this.styleTag = document.createElement('style');
        this.styleTag.type = 'text/css';
        this.innerStyles = (await import(url)).default;
        this.styleTag.innerHTML = this.innerStyles;
        document.body.appendChild(this.styleTag);
        return;
      }
      this.styleTag.innerHTML = this.innerStyles;
    },
    unuse: function() {
      if (this.styleTag) {
        this.styleTag.innerHTML = '';
      }
    }
  }
}
const theme1 = createStyleTags('../src/assets/themes/theme1.scss?inline');
const theme2 = createStyleTags('../src/assets/themes/theme2.scss?inline');

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  cssVariables: {
    files: {
      'Theme ONE': theme1,
      'Theme TWO': theme2,
    },
  },
};
