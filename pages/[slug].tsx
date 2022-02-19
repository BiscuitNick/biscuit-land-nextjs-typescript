import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { applyDefaults } from "@biscuitnick/biscuit-library";
import axios from "axios";
import BiscuitBoard from "../src/components/Konva/Boards/BiscuitBoard";
const qs = require("qs");

const APITOKEN = process.env.APITOKEN;

interface Props {
  contentIDs: string[];
  contentObject: any;
}

const BiscuitIndex: NextPage<Props> = ({
  contentIDs = [],
  contentObject = {},
}) => {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return isReady ? (
    <>
      <BiscuitBoard contentIDs={contentIDs} contentObject={contentObject} />
    </>
  ) : (
    <div>Waiting for Client...</div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // ...

  return { paths: [], fallback: "blocking" };
};

// const query = qs.stringify(
//   {
//     populate: "*",
//   },
//   {
//     encodeValuesOnly: true,
//   }
// );

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;

  const query = qs.stringify(
    {
      // sort: ["title:asc"],
      filters: {
        biscuitID: {
          $eq: slug,
        },
      },
      populate: "*",
      // fields: ["title"],
      // pagination: {
      //   pageSize: 10,
      //   page: 1,
      // },
      publicationState: "live",
    },
    {
      encodeValuesOnly: true, // prettify url
    }
  );
  if (slug) {
    try {
      const response = await axios.get(
        `http://localhost:1337/api/biscuits?${query}`,
        {
          headers: {
            Authorization: `Bearer ${APITOKEN}`,
          },
        }
      );

      const {
        data: { data },
      } = response;

      const { contentIDs, contentArray } = data[0].attributes;

      const contentObject: any = {};
      contentArray.forEach((item: any) => {
        const { contentID } = item;
        Object.keys(item).forEach((key) => {
          if (item[key] === null) {
            delete item[key];
          }
        });
        const mergeDefaults = applyDefaults(item);
        contentObject[contentID] = { ...mergeDefaults, contentID };
      });

      console.log(136, contentIDs, contentArray);

      return {
        props: {
          slug,
          contentObject,
          contentIDs,
        },
      };
    } catch (error) {}
  }
  return {
    notFound: true,
  };
};

export default BiscuitIndex;
