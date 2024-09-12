import './App.css'
import { Button } from './componets/Button/Button'
import { Navbar } from './componets/Navbar/Navbar'


const App = () => {


  return (
    <>
      <Navbar />
      <Button
        title={"Rimuovi"}
        style={"filled"}
      />

      <Button
        title={"Aggiungi"}
        style={"outlined"}
      />

      <Button
        title={"Aggiungi"}
        style={"outlined"}
      />
    </>
  )
}

export default App
