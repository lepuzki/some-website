import './App.css';
import Nav from './components/nav';
import Footer from './components/footer';
import Card from './components/card';

function App() {
  return (
    <div className="App"> 
      <Nav />
      <div className="content">
        <Card title="Hello" description="World"/>
        <Card title="Hello" description="World"/>
        <Card title="Hello" description="World"/>
        <Card title="Hello" description="World"/>
        <Card title="Hello" description="World"/>
        <Card title="Hello" description="World"/>
        <Card title="Hello" description="World"/>
        <Card title="Hello" description="World"/>
        <Card title="Hello" description="World"/>
      </div>
      <Footer />
    </div>
  );
}

export default App;