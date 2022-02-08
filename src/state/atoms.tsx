import { atom } from "recoil";

export interface contentObject {
  contentIDs?: string[];
  contentObject: any; //TODO update TYPE
}

export const contentObjectAtom = atom({
  key: "contentObjectAtom",
  default: {} as contentObject,
});

export interface selectedContentID {
  contentID: string;
}

export const selectedContentIDAtom = atom({
  key: "selectedContentIDAtom",
  default: "",
});
