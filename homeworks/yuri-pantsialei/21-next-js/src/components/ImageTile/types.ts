export type PropsType = {
  imageId: number;
  index: number;
  imageUrl: string;
  fullname: string;
  refreshImage: (key: number, index: number) => void;
  isLoading: boolean;
  selectTile: (imageId: number, index: number) => void;
  isSelectMode: boolean;
  isSelected: boolean;
};
