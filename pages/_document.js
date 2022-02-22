import Document, { Html, Head, Main, NextScript } from "next/document";

const PROJECT = process.env.PROJECT;
const favicon = `/${PROJECT}/favicon.ico`;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={"true"}
          />
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Arima+Madurai:wght@400;700&family=Audiowide&family=Baloo+2:wght@400;700&family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Bangers&family=Barrio&family=Bebas+Neue&family=Black+Ops+One&family=Bubblegum+Sans&family=Bungee+Inline&family=Bungee+Shade&family=Cabin+Sketch:wght@400;700&family=Chewy&family=Codystar:wght@300;400&family=Comfortaa:wght@400;700&family=Concert+One&family=Creepster&family=Fredericka+the+Great&family=Fredoka+One&family=Gruppo&family=Kavoon&family=Kranky&family=Lobster&family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&family=Love+Ya+Like+A+Sister&family=Luckiest+Guy&family=Megrim&family=Modak&family=Monoton&family=New+Rocker&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playball&family=Poiret+One&family=Righteous&family=Roboto+Condensed:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Rubik:ital,wght@0,400;0,700;1,400;1,700&family=Sarina&family=Sigmar+One&family=Staatliches&family=Tourney:wght@400;700&family=Ubuntu:ital,wght@0,400;0,700;1,400;1,700&family=Unkempt:wght@400;700&family=Wallpoet&display=swap"
            rel="stylesheet"
          /> */}
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
