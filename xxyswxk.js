var obj = JSON.parse($response.body); 
// 可以合并一句带过
obj = {
  "retcode" : 0,
  "errmsg" : "",
  "data" : {
  
  }
}

// 有需要全部替换的情况，只需让用户在这里如此操作即可

$done({body:JSON.stringify(obj)});
// 也一句带过
