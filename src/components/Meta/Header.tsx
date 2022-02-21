import Head from "next/head";
// import { optimizedUrl } from "../../lib/optimizedUrl";
// const project = process.env.PROJECT;
// const favicon =
//   project === "biscuitland"
//     ? "/biscuitland/favicon.ico"
//     : project === "magaland"
//     ? "magaland.ico"
//     : "favicon.ico";
// const href = `/${project}/apple-touch-icon.png`;
// const manifest = `/${project}-manifest.json`;

interface Header {
  title: string;
  description: string;
}

const Header = (props: Header) => {
  const { title, description } = props;

  //   const optimalUrl = optimizedUrl({ url, type: "meta" });

  return (
    <Head>
      <title>{title}</title>

      <meta
        property="og:title"
        content={description} // + description}
        key="ogtitle"
      />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image:type" content="image/jpeg" /> */}
      {/* <meta property="og:image" content={optimalUrl} /> */}
      {/* <meta property="og:image:secure_url" content={optimalUrl} /> */}
      {/* <link rel="manifest" href={manifest} />
      <link rel="apple-touch-icon" sizes="152x152" href={href} />
      <link rel="shortcut icon" href={favicon} /> */}
    </Head>
  );
};

export default Header;
