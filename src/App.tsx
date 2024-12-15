import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { AppRoutes } from './routes';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
          <Navbar />
          <main className="pt-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto py-6">
              <AppRoutes />
            </div>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;