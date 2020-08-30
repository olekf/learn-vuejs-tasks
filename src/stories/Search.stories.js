import Search from "../components/Search";
import { action } from "@storybook/addon-actions";

export default {
  title: "Example/Search",
  component: Search
};

export const search = () => ({
  components: { Search },
  template: '<search value="search text" @onSearchSubmit="doSearchSubmit" />',
  methods: { doSearchSubmit: action("search submitted") }
});
