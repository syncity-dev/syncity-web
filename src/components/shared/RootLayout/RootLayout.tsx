import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Main } from "@/components/core/Main/Main";
import { Footer } from "@/components/shared/Footer/Footer";
import { Toaster } from "@/components/shared/Toaster/Toaster";
import { ToastProvider } from "@/components/core/Toast/Toast.context";

export const RootLayout = () => {
  return (
    <html lang="en" data-color-mode="light">
      <head>
        <HeadContent />
      </head>
      <body>
        <ToastProvider>
          <Main>
            <Outlet />
            <Footer />
          </Main>
          <Toaster />
        </ToastProvider>
        <Scripts />
      </body>
    </html>
  );
};
