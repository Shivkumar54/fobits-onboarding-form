import "./App.css"
import Header from "./Common/Header"
import MobileStatusBar from "./Common/MobileStatusBar"
import Main from "./components/Main"
import { BrowserRouter } from "react-router-dom"
function App() {
  return (
    <div className="h-dvh ">
      <div className="container mx-auto ">
        <BrowserRouter>
          <MobileStatusBar />
          <Header />
          <Main />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
