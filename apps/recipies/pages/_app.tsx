import type { AppProps } from "next/app";

const RecipesClient = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default RecipesClient;
