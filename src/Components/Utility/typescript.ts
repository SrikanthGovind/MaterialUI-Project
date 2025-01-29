export interface Listitem  {
    img: string;
    title: string;
    date: string;
  };

  export interface cards{
    img:string,
    title:string,
    description:string,
    date:string,
    ratings:number
  }
  export interface rowdata{
     order:string,
     customer:string,
     date:string,
     status:string
  }
  export interface customerrowdata{
	  Name: string
	  Email: string;
    Location: string;
    Phone:string,
    Signedup:string
    img:string
  }

  export interface piedata{
       value: number,
       label:string,
       color:string
  }

  export type barchart ={
      london:number|null,
      paris:number|null,
      month:string|null,
  } 