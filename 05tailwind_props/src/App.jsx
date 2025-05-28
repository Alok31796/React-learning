import Card from "./components/Card"

function App() {

  let myObj = {
    username:"Alok",
    age:21
  }

  let newArr = [1,2,3,4,5]

  return (
    <>
      <Card username="Alok Pandey" btnText="click me"/>
      <Card username="Aman codeer"/>
    </>
  )
}

export default App
