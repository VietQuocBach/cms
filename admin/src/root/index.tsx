import { Routes, Route } from "react-router-dom"

import AdminLayout from "../layout/admin"

function Root() {
    return <Routes>
        <Route path="/" element={<AdminLayout />} />
        <Route path="/login" element={<div>login</div>} />
    </Routes>
}

export default Root