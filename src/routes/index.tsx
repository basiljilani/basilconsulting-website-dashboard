import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Content } from '../pages/Content';
import { Users } from '../pages/Users';
import { Analytics } from '../pages/Analytics';
import { Newsletter } from '../pages/Newsletter';
import { Media } from '../pages/Media';
import { Settings } from '../pages/Settings';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/content" element={<Content />} />
      <Route path="/users" element={<Users />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/newsletter" element={<Newsletter />} />
      <Route path="/media" element={<Media />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}