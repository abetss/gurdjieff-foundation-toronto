const heading = {
  color: "text",
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
}

export default {
  root: {
    fontFamily: "body",
    lineHeight: "body",
    fontWeight: "body",
    margin: 0,
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    fontKerning: "normal",
    fontFeatureSettings: `"kern", "liga", "clig", "calt"`,
  },
  h1: {
    ...heading,
    color: 'red',
    fontSize: [5, 6],
  },
  h2: {
    ...heading,
    color: 'green',
    fontSize: [4, 5],
  },
  h3: {
    ...heading,
    fontSize: 3,
  },
  h4: {
    ...heading,
    fontSize: 2,
  },
  h5: {
    ...heading,
    fontSize: [1],
  },
  h6: {
    ...heading,
    fontSize: 0,
  },
  p: {
    color: "text",
    fontFamily: "body",
    fontWeight: "body",
    lineHeight: "body",
  },
  a: {
    color: "primary",
  },
  pre: {
    fontFamily: "monospace",
    overflowX: "auto",
    code: {
      color: "inherit",
    },
  },
  code: {
    fontFamily: "monospace",
    fontSize: "inherit",
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
  },
  th: {
    textAlign: "left",
    borderBottomStyle: "solid",
  },
  td: {
    textAlign: "left",
    borderBottomStyle: "solid",
  },
  img: {
    maxWidth: "100%",
  },
}
