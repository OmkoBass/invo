import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider, AppShell } from "@mantine/core";

import { MyFooter } from "../components/Footer/Footer";

import MyHeader from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
      }}
    >
      <AppShell
        padding="md"
        header={<MyHeader height={78} p={"xs"} />}
        footer={<MyFooter height={120} />}
      >
        <Component {...pageProps} />
      </AppShell>
    </MantineProvider>
  );
}

export default MyApp;
