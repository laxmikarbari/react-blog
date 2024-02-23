import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlelistPage from "./pages/ArticleslistPage";
import HomePage from "./pages/HomePage";
import NotfoundPage from "./pages/NotfoundPage";
import NavBar from "./NavBar"

function App(){
  return(
  
    <BrowserRouter>
    <div className="App">
      <h1> first react App</h1>
      <NavBar></NavBar>
      <div id="Page-body">
        
      <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/About" element={<AboutPage/>}></Route>
      <Route path="/Article" element={<ArticlePage/>}></Route>
      <Route path="/Articles" element={<ArticlelistPage/>}></Route>
      <Route path="/Notfound" element={<NotfoundPage/>}></Route>

    </Routes>

      </div>

    </div>
    </BrowserRouter>
    
  );
}
export default App;