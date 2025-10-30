import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import { CategoryProvider } from "./Contexts/useCategory.jsx";
import { ThemeProvider } from "./Contexts/useTheme.jsx";
import { SearchProvider } from "./Contexts/useSearch.jsx";
import Article from "./Pages/Article.jsx";
import Error from "./Components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CategoryProvider>
        <ThemeProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </ThemeProvider>
      </CategoryProvider>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "article/:id",
        element: <Article />,
        errorElement: (
          <>
            <div className="flex flex-col justify-center items-center h-screen">
              <div className="max-w-96 shadow-xl rounded-lg hover:shadow-2xl hover:rounded-br-2xl hover:rounded-tl-2xl p-3 bg-(--bg)">
                <h1 className="text-2xl font-semibold text-(--text) mb-4">
                404 - Page Not Found
              </h1>
              <p className="text-(--text)">
                This article page does not exist, you have arrived on a wrong
                url
              </p>
              </div>
            </div>
          </>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
