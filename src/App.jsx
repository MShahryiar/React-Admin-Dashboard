import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"
import MonthlyRevenue from "./Components/Stats/MonthlyRevenue"
import MonthlySales from "./Components/Stats/MonthlySales"
import data from "./data"
function App() {

  return (
    <div className="bg-gray-950 min-h-screen w-screen">
      <Navbar/>
      <Banner/>
      {/* Stats */}
      <div className="p-10 h-fit flex md:flex-row flex-col gap-10">
        <MonthlyRevenue/>
        <MonthlySales/>
      </div>
    </div>
  )
}

export default App
