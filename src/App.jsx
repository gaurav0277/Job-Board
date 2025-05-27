import './App.css'
import Homelayout from './pages/homelayout'
import HomePage from './components/Homepage.jsx'






function App() {
  


  return (
    <div>
      <h1>Welcome to the job-board</h1>
      <p>This is the begginning of my rect repo</p>
      <Homelayout/>
      <HomePage title="Tech Jobs" description="Find the latest tech job openings here." />
      <HomePage title="Marketing Jobs" description="Explore top marketing roles across industries." />
      <HomePage title="Design Jobs" description="Browse design job opportunities in various companies." />

    </div>
  )
}

export default App
