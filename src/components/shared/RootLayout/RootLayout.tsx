import { Outlet, HeadContent, Scripts } from "@tanstack/react-router";
import { Main } from "@/components/core/Main/Main";
import { Footer } from "@/components/shared/Footer/Footer";
import { Toaster } from "@/components/shared/Toaster/Toaster";
import { ToastProvider } from "@/components/core/Toast/Toast.context";
import { COLOR_MODE_INIT_SCRIPT } from "@/utils/colorMode";
import { ColorModeSwitcher } from "@/components/shared/ColorModeSwitcher/ColorModeSwitcher";
import { Box } from "@/styled-system/jsx";

export const RootLayout = () => {
  return (
    <html lang="en" data-color-mode="light" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: COLOR_MODE_INIT_SCRIPT }} />
      </head>
      <body>
        <ToastProvider>
          <Box position="absolute" top="4" right="4" zIndex="overlay">
            <ColorModeSwitcher />
          </Box>
          <Main display="flex" flexDir="column" minHeight="[100dvh]">
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
