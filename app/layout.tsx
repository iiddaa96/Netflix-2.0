import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Footer from "./components/Footer";
import { default as ResponsiveAppBar } from "./components/Header";
import { FavoriteMoviesProvider } from "./context/FavoriteMoviesContext";
import { LayoutProps } from "./types";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <FavoriteMoviesProvider>
            <ResponsiveAppBar />
            {children}
            <Footer />
          </FavoriteMoviesProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
