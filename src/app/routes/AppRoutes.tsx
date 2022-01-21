import React from 'react';
import { Routes, Route } from "react-router-dom";

import HomePage from 'app/pages/Home/HomePage';
import DocsPage from 'app/pages/Docs/DocsPage';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/docs" element={<DocsPage />} />
        </Routes>
    );
}

export default AppRoutes;