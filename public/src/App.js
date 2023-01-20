import "./App.css";
import React, { useState } from "react";
import { multiSearch } from "./controllers/api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";
import { HomePage } from "./pages/home/HomePage";
import { Upload } from "./pages/upload/Upload";
import { ErrorPage } from "./pages/error/ErrorPage";
import { MoviePage } from "./pages/movie/MoviePage";
import { TvPage } from "./pages/tv/TvPage";
import { PersonPage } from "./pages/person/PersonPage";
import { Login } from "./pages/login-signup/Login";
import { SignUp } from "./pages/login-signup/SignUp";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  //search results
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await multiSearch(searchTerm);
    setSearchResults(results);
    setSearchTerm("");
  };
  //console.log(searchResults);

  return (
    <Router>
      <ErrorBoundary>
        <Navigation
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />
        <Routes>
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/tv/:id" element={<TvPage />} />
          <Route path="/people/:id" element={<PersonPage />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/upload" element={<Upload />} />
          <Route
            path="/"
            element={<HomePage searchResults={searchResults} />}
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
