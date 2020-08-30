import GridItem from "../components/GridItem";

export default {
  title: "Example/GridItem",
  component: GridItem
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GridItem },
  template: '<gridItem :item="item"/>'
});

export const grid = Template.bind({});
grid.args = {
  item: { movieName: "movieName1" }
};
