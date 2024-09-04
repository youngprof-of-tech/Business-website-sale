import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Router } from "./routes";

function App() {
  const router = createBrowserRouter(Router);

  return <RouterProvider router={router} />;
}

export default App;
