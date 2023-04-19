function App() {
  const get = async() => {
    const resp = await fetch('http://localhost:8000');
    console.log(resp);
  };

  get();
  return <div>welcome to frontend</div>;
}

export default App;
