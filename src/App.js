import CreateForm from "./components/CreateForm/index";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#E0E0E0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CreateForm />
    </div>
  );
};

export default App;
