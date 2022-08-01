/** Customize react-select select input */
export const selectInputStyle = (error: boolean) => ({
  control: (styles: {}) => ({
    ...styles,
    backgroundColor: "#A6D0D8",
    border: `${error ? "1px solid red" : "none"}`,
    boxShadow: "none",
    borderBottom: `1px solid ${error ? "red" : "#000"}`,
    borderRadius: "none",
    marginRight: "10%",
    "&:hover": {
      borderBottom: "1px solid #000",
    },
    height: "4.8rem",
    span: {
      display: "none",
    },
  }),
  menuList: (styles: {}) => ({
    ...styles,
    background: "#A6D0D8",
    border: "1px solid #000",
  }),
  option: (styles: {}) => ({
    ...styles,
    backgroundColor: "#A6D0D8",
    color: "#000",
    "&:hover": {
      backgroundColor: "#00000042",
    },
  }),
  dropdownIndicator: (styles: {}) => ({
    ...styles,
    color: "#0000042",
  }),
  "&:hover": {
    backgroundColor: "#0000042",
  },
  placeholder: (styles: {}) => ({
    ...styles,
    opacity: "0.5",
    color: "#000",
  }),
});
