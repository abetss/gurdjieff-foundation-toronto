export const variants = {
  links: {
    nav: {
      pr: 4,
      py: 1,
      textTransform: "uppercase",
      fontWeight: ['bold', 500],
      letterSpacing: "0.1em",
      color: "accent",
      whiteSpace: "nowrap",
      textDecoration: "none",
      "&:hover": {
        color: "accent",
        opacity: 0.9,
      },
      "&:active, &:focus": {
        color: "accent",
      },
    },
  },
  container: {
    padding: {
      px: ["10vw", "15vw", "20vw"],
      maxWidth: "100vw",
    },
    margin: {
      mx: `auto`,
      maxWidth: [`90vw`, "85vw", "80vw"],
    },
    containerTop: {
      pt: [3, 4, 5],
    },
  },
  text: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
  }
}
