// src/App.tsx
import ThemeProvider  from "./ui/ThemeProvider";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import "./index.css";

import { DashboardPage } from "./pages/DashboardPage";
import { UploadPage } from "./pages/UploadPage";
import { ArchivePage } from "./pages/ArchivePage";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";

import AuthProvider from "./ui/AuthProvider"
import ProtectedRoute from "./ui/ProtectedRoute";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
    errorElement: <Navigate to="/404" replace />,
  },
  {
    path: "/upload",
    element: (
      <ProtectedRoute>
        <UploadPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/archive",
    element: (
      <ProtectedRoute>
        <ArchivePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />, // Login hanya dengan Google
  },
  {
    path: "/404",
    element: <NotFoundPage />,
  },
];

const router = createBrowserRouter(routes);

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
