export interface Item {
    id: number;
    item: string;
    selected?: boolean | undefined;
  }
export interface List {
    id: number;
    title: string;
    open: boolean;
    content: string;
    items: Item[];
  }