import React from 'react';
import { Routes, Route } from "react-router-dom";

import HomePage from 'app/pages/Home/HomePage';
import DocsPage from 'app/pages/Docs/DocsPage';
import PrivacyPolicyPage from 'app/pages/PrivacyPolicy/PrivacyPolicyPage';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
        </Routes>
    );
}

export default AppRoutes;