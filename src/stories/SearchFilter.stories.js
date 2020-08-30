import SearchFilter from "../components/SearchFilter";

export default {
  title: "Example/SearchFilter",
  component: SearchFilter,
  argTypes: {
    value: { control: { type: "select", options: ["title", "gengre"] } }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SearchFilter },
  template: '<searchFilter :value="value"/>'
});

export const searchFilter = Template.bind({});
searchFilter.args = {
  value: "title"
};
