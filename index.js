function stringify(list) {
  // Write your code here
  if(list===null) return "null"
  
  let result = "";
  let pointer = list;
//   console.log(list===null);
//   console.log(list.data)
  
  result += list.data 
  
  while(pointer!==null){
    
    pointer = pointer.next;
    if(pointer!==null){
      result += ` -> ${pointer.data}`
    }
    else{
      result += ` -> null`
    }
  }
  
  return result;
  
}

 //given a linked list
  //return a string representation of that list

//examples:
//0 -> 1 -> 2 -> 3 -> 4 -> null