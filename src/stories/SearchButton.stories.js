import SearchButton from "../components/SearchButton";
import { action } from "@storybook/addon-actions";

export default {
  title: "Example/SearchButton",
  component: SearchButton
};

export const searchButton = () => ({
  components: { SearchButton },
  template: '<searchButton @onSearchSubmit="doSearchSubmit" />',
  methods: { doSearchSubmit: action("search submitted") }
});
