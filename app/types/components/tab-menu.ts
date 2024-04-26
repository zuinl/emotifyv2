export type TabMenuProps = {
  activeTab: TabOptions;
  onTabPress: (pressedTab: TabOptions) => void;
};

export type TabOptions = "now" | "playlists" | "artists";

export type TabProps = {
  onPress: () => void;
  active?: boolean;
  text: string;
};
