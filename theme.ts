import { createTheme, Modal, NavLink } from "@mantine/core";

export const theme = createTheme({
  /* Put your mantine theme override here */
  black: "#444444",
  primaryColor: "dark",
  defaultRadius: "md",
  components: {
    NavLink: NavLink.extend({
      classNames: {
        root: "second-layer-hover",
        body: "second-layer-hover",
      },
    }),
    Modal: Modal.extend({
      styles: (theme) => ({
        title: {
          fontSize: theme.fontSizes.xl,
          fontWeight: 700,
        },
      }),
    }),
  },
});
