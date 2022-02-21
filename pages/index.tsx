import type { GetStaticProps, NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
// import { applyDefaults } from "@biscuitnick/biscuit-library";
import BiscuitBoard from "../src/components/Konva/Boards/BiscuitBoard";
import applyDefaults from "../src/lib/defaults/applyDefaults";

import axios from "axios";
import useSWR from "swr";
import Header from "../src/components/Meta/Header";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const path = "/";

interface Props {
  contentIDs: string[];
  contentObject: any;
}

const BiscuitIndex: NextPage<Props> = ({
  contentIDs = [],
  contentObject = {},
}) => {
  const [isReady, setReady] = useState(false);
  const { data, error } = useSWR(`api/revalidate?path=${path}`, fetcher);

  console.log(contentObject);

  useEffect(() => {
    setReady(true);
  }, []);

  return isReady ? (
    <>
      <Header title={"BiscuitLand"} description={"Hello World"} />
      <BiscuitBoard contentIDs={contentIDs} contentObject={contentObject} />
    </>
  ) : (
    <div>Waiting for Client...</div>
  );
};

const qs = require("qs");
const query = qs.stringify(
  {
    populate: "*",
  },
  {
    encodeValuesOnly: true,
  }
);

export async function getStaticProps<GetStaticProps>() {
  const APIPATH = process.env.APIPATH;
  const APITOKEN = process.env.APITOKEN;

  const response = await axios.get(`${APIPATH}/biscuits?${query}`, {
    headers: {
      Authorization: `Bearer ${APITOKEN}`,
    },
  });

  const {
    data: { data },
  } = response;

  var contentIDs = [];
  var contentArray = [];

  if (data.length) {
    const attributes = data[0].attributes;
    contentIDs = attributes.contentIDs;
    contentArray = attributes.contentArray;
  }
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

  return {
    props: {
      contentObject,
      contentIDs,
    },
  };
}

export default BiscuitIndex;
