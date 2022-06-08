export interface TaskFieldType {
    id: number;
    title: string;
    completed: boolean;
    parent_id: number;
    __typename: string;
  }
  
  export interface TaskType {
    id: number;
    title: string;
    completed: boolean;
    name: string;
    itemDatas: ItemData;
    description: string;
  }


  
  export interface RefType {
    __ref: string;
  }

  export type Item = {
    id: string;
    primary: string;
    secondary: string;

  };

  export type ItemData = {
    id: string;
    title: string;
    isDone: boolean;
    description: string;
  };

  export type List = {
    id: string;
    primary: string;
    secondary: string;
    name: string;
  };

  export type a = {
    id: string;
    primary: string;
    secondary: string;
    name: string;
  };

  export type allData = {
    id: string;
    primary: string;
    secondary: string;
    name: string;
  };

