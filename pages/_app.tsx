import React from "react";
import { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  console.log("app rendered");
  return (
    <div>
      <h1>aaaa</h1>
      <Component {...pageProps} />
    </div>
  );
}
