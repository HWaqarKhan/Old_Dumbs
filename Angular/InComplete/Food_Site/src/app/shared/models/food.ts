export class Foods{
    public id!:string;
    public price!:number;
    public name!:string;
    public favorite:boolean = false;
    public rating:number =0;
    public tags?:string[];
    public imageUrl?:string;
    public description?:string;
    public origins?:string[];
}