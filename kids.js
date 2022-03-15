var obj = JSON.parse($response.body); 
// 可以合并一句带过

obj ={
}
$done({body:JSON.stringify(obj)});
// 也一句带过
