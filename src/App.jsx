import './App.css'
import data from "./IMG/data.json";
import img from "./IMG/logo2jpg.jpeg"
import Section from "./Components/Section";

console.log(data);

function App() {


  return (
    <>
      <header>
        <img src={img} alt={img} />
      </header>
      {data.map((item) => {
        return (
          <Section
            key={item.category}
            category={item.category}
            images={item.images}
          />
        )
      })}
    </>
  )
}

export default App
