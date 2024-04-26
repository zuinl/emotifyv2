import { useState } from "react";
import { TabOptions } from "../types/components/tab-menu";

export const useHomePage = () => {
  const [tab, setTab] = useState<TabOptions>("now");

  const onTabChange = (newTab: TabOptions) => setTab(newTab);

  return {
    tab,
    onTabChange,
  };
};
