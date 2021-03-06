import React from 'react';
import { Routes, Route } from "react-router-dom";

import HomePage from 'app/pages/Home/HomePage';
import PrivacyPolicyPage from 'app/pages/PrivacyPolicy/PrivacyPolicyPage';
import GettingStartedPage from 'app/pages/Docs/Fundamentals/1_GettingStarted/GettingStartedPage';
import AddingSitesPage from 'app/pages/Docs/Guides/2_AddingSites/AddingSites';
import NottificationsPage from 'app/pages/Docs/Fundamentals/2_Notifications/NottificationsPage';
import PermissionsPage from 'app/pages/Docs/Fundamentals/3_Permissions/PermissionsPage';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />

            <Route path="/docs_fundamentals_gettingstarted" element={<GettingStartedPage />} />
            <Route path="/docs_fundamentals_notifications" element={<NottificationsPage />} />
            <Route path="/docs_fundamentals_permissions" element={<PermissionsPage />} />
            <Route path="/docs_guides_addingsites" element={<AddingSitesPage />} />
        </Routes>
    );
}

export default AppRoutes;