import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { useEffect, useState } from "react";
import { applyDefaults } from "@biscuitnick/biscuit-library";
import axios from "axios";
import BiscuitBoard from "../src/components/Konva/Boards/BiscuitBoard";
import useSWR from "swr";

const qs = require("qs");

const APITOKEN = process.env.APITOKEN;
const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Props {
  contentIDs: string[];
  contentObject: any;
  slug: string;
}

const BiscuitIndex: NextPage<Props> = ({
  contentIDs = [],
  contentObject = {},
  slug,
}) => {
  const [isReady, setReady] = useState(false);
  const { data, error } = useSWR(
    `api/revalidate?secret=${process.env.MY_SECRET_TOKEN}&path=${slug}`,
    fetcher
  );

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
  return { paths: [], fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const APIPATH = process.env.APIPATH;
  const APITOKEN = process.env.APITOKEN;

  const slug = params?.slug;

  const query = qs.stringify(
    {
      filters: {
        biscuitID: {
          $eq: slug,
        },
      },
      populate: "*",
      publicationState: "live",
    },
    {
      encodeValuesOnly: true,
    }
  );
  if (slug) {
    try {
      const response = await axios.get(`${APIPATH}/biscuits?${query}`, {
        headers: {
          Authorization: `Bearer ${APITOKEN}`,
        },
      });

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
