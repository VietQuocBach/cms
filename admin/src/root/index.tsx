import { Routes, Route } from "react-router-dom"

import AdminLayout from "../layout/admin"
import DashboardPage from "../pages/dashboard"
import SettingsPage from "../pages/settings"
import UsersPage from "../pages/users"

function Root() {
    return <Routes>
        <Route path="*" element={<AdminLayout />} >

            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="settings" element={<SettingsPage />} />

        </Route>
        <Route path="/login" element={<div>login</div>} />
    </Routes>
}

export default Root