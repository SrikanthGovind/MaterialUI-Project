export interface ListItem  {
    img: string;
    title: string;
    date: string;
  };

  export interface Cards{
    img:string,
    title:string,
    description:string,
    date:string,
    ratings:number
  }
  export interface RowData{
    order:string,
    customer:string,
    date:string,
    status:string
  }
  export interface CustomerRowData{
	Name: string
	Email: string;
    Location: string;
    Phone:string,
    Signedup:string
    img:string
  }

  export interface PieData{
    value: number,
    label:string,
    color:string
  }

  export type BarChart ={
    london:number|null,
    paris:number|null,
    month:string|null,
  } 