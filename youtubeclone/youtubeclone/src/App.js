import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import PageContainer from "./containers/PageContainer";




function App() {
  return (
    <div className="App" >
       <BrowserRouter>
       <Navbar/>
       <PageContainer> 
       <SideBar/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="videos/:id" element={<Detail/>} />
        <Route path="search/:keyword" element={<Search/>} />
       </Routes>
       </PageContainer>
       </BrowserRouter>
    </div>
  );
}

export default App;
