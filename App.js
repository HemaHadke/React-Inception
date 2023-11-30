const heading1 = React.createElement(
    "h1",
    {
      id: "title",
    },
    "Heading 1"
  );

  const heading2 = React.createElement(
    "h1",
    {
      id: "title",
    },
    "Heading 2"
  );

  const container = React.createElement("div",{
    id:"container",
  },
  [heading1,heading2]
  )
//   console.log(heading);
  const root = ReactDOM.createRoot(document.getElementById("root"));

  //passing a react element inside the root
  //async defer
  root.render(container);