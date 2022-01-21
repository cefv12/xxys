var obj = JSON.parse($response.body); 
// 可以合并一句带过




obj = {"code":200,"type":"","title":"","part":"","player":"","url":"","head":{"user-agent":"Mozilla\/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit\/604.1.38 (KHTML, like Gecko) Version\/11.0 Mobile\/15A372 Safari\/604.1"},"spare":[{"code":200,"success":"","time":"2022-01-21 15:33:13","type":"","mark":"","title":" ","part":"","url":"","head":{"user-agent":"Mozilla\/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit\/604.1.38 (KHTML, like Gecko) Version\/11.0 Mobile\/15A372 Safari\/604.1"}},{"code":200,"url":"","type":"","mark":"","title":"","time":"2022-01-21 15:33:14 ","head":{"user-agent":"Mozilla\/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit\/604.1.38 (KHTML, like Gecko) Version\/11.0 Mobile\/15A372 Safari\/604.1"}},{"code":200,"success":"","time":"2022-01-21 15:33:14","type":"","title":"","part":,"url":"","head":{"user-agent":"Mozilla\/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit\/604.1.38 (KHTML, like Gecko) Version\/11.0 Mobile\/15A372 Safari\/604.1"}}]}

$done({body:JSON.stringify(obj)});
// 也一句带过
