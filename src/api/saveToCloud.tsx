const APIPATH = process.env.APIPATH;
const APITOKEN = process.env.APITOKEN;

interface saveProps {
  contentIDs: string[];
  contentObject: any;
  biscuitID: string;
}

// const SaveToCloud = (props: saveProps) => {
//   return <button onClick={() => saveContent(body)}>Save To Cloud</button>;
// };

// export default SaveToCloud;

const contentObjectToContentArray = (contentObject: any) => {
  const contentArray = Object.keys(contentObject).map((contentID) => {
    let content = contentObject[contentID];
    delete content.id;

    Object.keys(content).forEach((key) => {
      if (content[key] === null || content[key] === undefined) {
        delete content[key];
      }
    });

    return content;
  });
  return contentArray;
};

async function saveToCloud(props: saveProps) {
  const { contentIDs, contentObject, biscuitID } = props;

  const contentArray = contentObjectToContentArray(contentObject);

  const body = { contentIDs, contentArray, biscuitID };

  fetch(`${APIPATH}/biscuits/`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${APITOKEN}`,
    },
    body: JSON.stringify({ data: body }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

export default saveToCloud;
