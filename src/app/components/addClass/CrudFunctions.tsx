import * as baseService from '@/services/baseService';

const addClass = (data: any) => {
    const res = baseService.post('class', data);
    res.then((response) => {
      if(response && response.status === 500){
        console.log('failed',data.response)
      } 
      else if(response && response.status === 200){
          console.log('added successfully')
      }
    })
    .catch((error) => {
        console.log('Error occurred:', error.message);
      });
}

const removeClass = (moduleName: string, id : string) => {
    baseService.delete_(moduleName,id);

}

const updateClass = (moduleName: string, id : string, data: any) => {
    baseService.put(moduleName, id, data);
    
}

export{addClass, removeClass, updateClass};