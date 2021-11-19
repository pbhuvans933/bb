export class T_shirt{
    color:string;
    material:string;
    design:string;
    size:string;
    constructor(data?:any){
        this.color=data.color || 'black';
        this.material=data.material || 'cotton';
        this.design=data.proprice || 'polo';
        this.size=data.size || 's';
    }
}