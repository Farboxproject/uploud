import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content={`Homes L2 - Farcaster Frames`} />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content={`${config.hostURL}/homesl2.png`} />
        <meta property="og:image" content={`${config.hostURL}/homesl2.png`} />
        <meta property="fc:frame:post_url" content={`${config.hostURL}/api/mint`} />
        <meta property="fc:frame:button:1" content="Mint Homes L2" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
