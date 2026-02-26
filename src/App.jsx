import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import WeatherApp from './api/WeatherApp'
import EcommerceApp from './api/EcommerceApp'
import ProductDetail from './api/ProductDetail'
import RecipeApp from './api/RecipeApp'
import NewsApp from './api/NewsApp'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
<Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weather" element={<WeatherApp />} />
            <Route path="/ecommerce" element={<EcommerceApp />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/recipes" element={<RecipeApp />} />
            <Route path="/news" element={<NewsApp />} />
            <Route path="/about" element={<Home />} />
            <Route path="/contact" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
