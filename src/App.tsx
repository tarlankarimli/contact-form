import { Routes, Route } from "react-router-dom";

import ContactUs from "views/ContactUs/Page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
