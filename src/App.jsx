import {Routes, Route} from 'react-router'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Landing from './routes/home/Landing'
import About from './routes/about/About'
import Task from './routes/task/Task'
import NotFound from './Components/NotFound'
function App() {
  return (
   <>
   <main className="w-full min-h-screen flex flex-col">
        <NavBar/>
      

      <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/task" element={<Task/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>


        <Footer/>
      </main>
   </>
  )
}

export default App
