import Header from './components/Header'
import Item from './components/Item'

function App() {

  return (
    <>
      <Header/>
      <section>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-8 mx-auto max-w-7xl px-10 py-4">
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </div>
      </section>
    </>
  )
}

export default App
