import Grid from "../components/Grid";

export default {
  title: "Example/Grid",
  component: Grid
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Grid },
  template: '<grid :items="items"/>'
});

export const grid = Template.bind({});
grid.args = {
  items: [
    {
      movieName: "movieName1",
      imageUrl: "imageUrl",
      gengre: "gengre",
      year: 2006
    },
    {
      movieName: "movieName2",
      imageUrl: "imageUrl",
      gengre: "gengre",
      year: 2006
    },
    {
      movieName: "movieName3",
      imageUrl: "imageUrl",
      gengre: "gengre",
      year: 2006
    },
    {
      movieName: "movieName4",
      imageUrl: "imageUrl",
      gengre: "gengre",
      year: 2006
    }
  ]
};
