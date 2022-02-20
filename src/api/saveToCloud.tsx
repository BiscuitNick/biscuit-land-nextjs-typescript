import axios from "axios";
const APIPATH = process.env.APIPATH;
const APITOKEN = process.env.APITOKEN;

const CLOUDAPIPATH = process.env.CLOUDAPIPATH;
const CLOUDAPITOKEN = process.env.CLOUDAPITOKEN;

interface saveProps {
  contentIDs: string[];
  contentObject: any;
  biscuitID: string;
}

const SaveToCloud = (props: saveProps) => {
  const { contentIDs, contentObject, biscuitID } = props;

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

  const body = { contentIDs, contentArray, biscuitID };

  console.log(contentArray);

  async function saveContent() {
    fetch(`${CLOUDAPIPATH}/biscuits/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CLOUDAPITOKEN}`,
      },
      body: JSON.stringify({ data: body }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  return <button onClick={saveContent}>Save To Cloud</button>;
};

export default SaveToCloud;
