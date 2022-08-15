import ButtonTest from './ButtonTest.vue';


export default {
  title: 'Components/Button',
  component: ButtonTest,
};

const Template = (args) => ({
  components: { ButtonTest },
  setup() {
    return { args };
  },
  template: '<button-test v-bind="args" />',
});

export const Primary = Template.bind({});
