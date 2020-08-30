import ResultsCount from "../components/ResultsCount";

export default {
  title: "Example/ResultsCount",
  component: ResultsCount
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ResultsCount },
  template: '<resultsCount :value="value"/>'
});

export const resultsCount = Template.bind({});
resultsCount.args = {
  value: 7
};
