// src/SearchBar.jsx
import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [loading, setLoading] = useState(false); // Loading state for UI feedback
  const [error, setError] = useState(null);    // Error state for UI feedback

  // --- VERY IMPORTANT: Replace with your actual Gemini API Key ---
  // DO NOT expose your API key directly in client-side code in production.
  // Use a backend proxy for real applications.
  const API_KEY = "AIzaSyA8yiRHraMQimNehr4-JN4A_OM6qX5FMZw"; // <--- PASTE YOUR API KEY HERE!!!

  let genAI;
  let model;

  // --- FIX START ---
  // Is check ko simple karein. Ab 'YOUR_GEMINI_API_KEY_HERE' comparison ki zaroorat nahi hai.
  // Bas yeh check karein ki key hai aur uski length valid hai.
  if (API_KEY && API_KEY.length > 30) {
    try {
      genAI = new GoogleGenerativeAI(API_KEY);
      model = genAI.getGenerativeModel({ model: "gemini-pro" });
    } catch (initError) {
      console.error("Error initializing GoogleGenerativeAI outside handleSearch:", initError);
      setError("Failed to initialize AI model. Check console for details.");
    }
  } else {
    // Yeh warning tab dikhegi jab API_KEY khaali ho ya bahut choti ho
    console.warn("Gemini API Key is not set or is invalid. API calls will fail.");
    setError("API Key not configured correctly. Please check SearchBar.jsx.");
  }
  // --- FIX END ---


  const handleSearch = async () => {
    // 1. Input Validation
    if (!searchTerm.trim()) {
      setSearchResult("Please enter a query to search.");
      setError(null);
      return;
    }

    // 2. Reset States & Set Loading
    setSearchResult("");
    setError(null);
    setLoading(true);

    try {
      // 3. API Key Validation (runtime check) - Ab ismein bhi thoda badlav
      if (!API_KEY || API_KEY.length < 30) {
        throw new Error("API Key is missing or invalid. Please check your API key in SearchBar.jsx.");
      }
      if (!model) { // Check if model was successfully initialized
          throw new Error("AI model could not be initialized. Please check your API Key and internet connection.");
      }

      // 4. Construct Prompt
      const prompt = `Please answer the following question concisely using information from the internet if necessary: ${searchTerm}`;

      // 5. Make API Call
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      // 6. Update Result State
      if (text) {
        setSearchResult(text);
      } else {
        setSearchResult("No direct answer found or empty response from AI.");
      }

    } catch (err) {
      // 7. Handle Errors
      console.error("Detailed Error during search:", err);

      let errorMessage = "An unexpected error occurred. Please try again later.";

      if (err.message) {
        if (err.message.includes("API Key is missing or invalid")) {
          errorMessage = "Error: API Key is missing or invalid. Please check your API key in SearchBar.jsx.";
        } else if (err.message.includes("403") || err.message.includes("401") || err.message.includes("GoogleGenerativeAI Error")) {
          errorMessage = "Error: Invalid API key, unauthorized access, or API rate limit exceeded. Check your key and usage.";
        } else if (err.message.includes("network") || err.message.includes("Failed to fetch")) {
          errorMessage = "Error: Network issue. Please check your internet connection.";
        } else if (err.message.includes("could not be initialized")) {
            errorMessage = "Error: AI model initialization failed. Is your API key correct?";
        }
      }
      setError(errorMessage);
      setSearchResult("");
    } finally {
      // 8. Reset Loading State
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '500px', margin: '50px auto', textAlign: 'center' }}>
      <h2>AI-Powered Search Bar</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Ask anything from the internet..."
        disabled={loading}
        style={{ width: '80%', padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <button
        onClick={handleSearch}
        disabled={loading}
        style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Search
      </button>
      <p style={{ marginTop: '20px', padding: '10px', border: '1px dashed #eee', minHeight: '50px', backgroundColor: '#f9f9f9', borderRadius: '4px', textAlign: 'left' }}>
        {loading && "Searching for information, please wait..."}
        {error && <span style={{ color: 'red' }}>{error}</span>}
        {!loading && !error && searchResult}
      </p>
    </div>
  );
};

export default SearchBar;