import { useState } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <h1>My Cookbook</h1>
          <Link to="/">Home</Link>
          <Link to="/create">Add New Recipe</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
