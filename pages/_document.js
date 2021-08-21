import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#FFEEE5"></meta>

          <link
            rel="apple-touch-icon"
            href="/favicons/favicon-180x180.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicons/favicon-96x96.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/favicons/favicon-192x192.png"
          ></link>
          <link
            rel="icon"
            type="image/x-icon"
            href="/favicons/favicon.ico"
          ></link>

          <link
            href="https://fonts.googleapis.com/css2?family=Cabin:wght@600&family=Inter:wght@400;600&family=Space+Grotesk:wght@700&display=swap"
            rel="stylesheet"
          ></link>
          <link href="https://rsms.me/inter/inter.css" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
