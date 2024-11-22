export interface ThemeInterface{
    background: any;
   
}

export const Theme = (theme: boolean) =>{
    if(theme){
        return {
            background:  'rgb(17, 238, 57)'
        }
    }else{
        return{
            background:  'rgb(234, 6, 32)'
        }
    }

}