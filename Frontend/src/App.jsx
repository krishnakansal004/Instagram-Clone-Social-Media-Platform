import React from "react";
import { RouterProvider } from "react-router";
import { router } from "./App.Routes";
import { AuthProvider } from "./Features/auth/authContext";
import "./Features/shared/global.scss";
import { PostContextProvider } from "./Features/posts/post.context";
// createPost Controller changed in backend
function App() {
  return (
    <AuthProvider>
      <PostContextProvider>
        <RouterProvider router={router} />
      </PostContextProvider>
    </AuthProvider>
  );
}

export default App;
