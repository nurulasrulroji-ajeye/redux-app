import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import ShowProduct from "./pages/ShowProduct";


function App() {
  return (
    <BrowserRouter>
      <div className="w-full mt-5">
        <Routes>
          <Route path="/" element={<ShowProduct />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="edit/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
