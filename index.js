var express=require('express');//설치한 express module을 불러와서 변수(express)에 담음.
var app=express();  //express를 실행하여 app object를 초기화

app.use(express.static(__dirname + '/public'));

var port=3000; //사용할 포트 번호 port 변수

app.listen(port, function(){  //port 변수를 이용하여  3000번 포트에 node.js 서버 연결
  console.log('server on!!! http://localhost:'+port);
});
