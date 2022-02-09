import { atom } from "recoil";

export interface contentObject {
  contentIDs?: string[];
  contentObject: any; //TODO update TYPE
}

export const contentObjectAtom = atom({
  key: "contentObjectAtom",
  default: {} as any,
});

export interface selectedContentID {
  contentID: string;
}

export const selectedContentIDAtom = atom({
  key: "selectedContentIDAtom",
  default: "",
});

//
export const biscuitIDsAtom = atom({
  key: "biscuitIDsAtom",
  default: [],
});

export const biscuitObjectAtom = atom({
  key: "biscuitObjectAtom",
  default: {},
});
