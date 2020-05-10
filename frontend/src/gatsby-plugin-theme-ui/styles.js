const heading = {
  color: "heading",
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
  marginBottom: 0
}

export const styles = {
  root: {
    fontFamily: "body",
    lineHeight: "body",
    fontWeight: "body",
    fontSize: [2, 3],
    margin: 0,
    fontSmoothing: "antialiased",
    fontKerning: "normal",
    fontFeatureSettings: `"kern", "liga", "clig", "calt"`,
  },
  h1: {
    ...heading,
    fontSize: [5, 6],
    lineHeight: '1.425',
  },
  h2: {
    ...heading,
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
    fontSize: 1,
  },
  h6: {
    ...heading,
    fontSize: 0,
  },
  hr: {
    color: "primary",
    borderWidth: '2px',
    borderStyle: 'dashed'
  },
  p: {
    color: "text",
    fontFamily: "body",
    fontWeight: "body",
    lineHeight: "body",
  },
  span: {
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
