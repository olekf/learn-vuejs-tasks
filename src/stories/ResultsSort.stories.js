import ResultsSort from "../components/ResultsSort";

export default {
  title: "Example/ResultsSort",
  component: ResultsSort,
  argTypes: {
    value: { control: { type: "select", options: ["releaseDate", "rating"] } }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ResultsSort },
  template: '<resultsSort :value="value"/>'
});

export const resultsSort = Template.bind({});
resultsSort.args = {
  value: "rating"
};
