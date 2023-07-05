import { IconType } from "react-icons";

declare global {
  interface Window {
    example: string;
  }
}

export type SortToolList = {
  selectSortType: string;
  setSelectSortType: (sortType: string) => void;
};

export type ParametersData = {
  name: string;
  type: string;
  description: string;
};

export type ToolsData = {
  icon: IconType;
  classIcon: string;
  title: string;
  install?: string;
  description: {
    short: string;
    long: string;
  };
  shortDescription?: string;
  url: string;
  parameters?: ParametersData[];
  return?: ParametersData[];
  demo?: () => JSX.Element;
  example?: string;
};

export type TerminalProps = {
  text: string | undefined;
};

export interface ToolsContentListProps {
  toolKeyInfo: string[];
}
