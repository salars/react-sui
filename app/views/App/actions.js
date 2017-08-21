export const startLoading = ()=>{
   return {type:"SET_LOADING",param:{loading:true}};
};

export const stopLoading = ()=>{
    return {type:"SET_LOADING",param:{loading:false}};
};
