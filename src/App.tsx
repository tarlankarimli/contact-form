import { Routes, Route } from "react-router-dom";
import { ContactUsPage } from "views/ContactUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
    </div>
  );
}

export default App;
