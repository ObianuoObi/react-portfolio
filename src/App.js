import Header from './components/Header';
import About from './components/About';

function App() {
  const title = "Welcome to my profile";
  return (
    <>
      <Header />
      <About title={title} />
    </>

  )
}

export default App;
