import { addons } from "@storybook/addons";
import { create, themes } from "@storybook/theming";

import { version } from "../package.json";
addons.setConfig({
  sidebar: {
    showRoots: false,
  },
  theme: create({
    base: themes.light,
    brandTitle: `AVENGERS v.${version}`,
  }),
});
