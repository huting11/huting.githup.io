// JavaScript Document
//登录状态
var person = {
	name:['admin'],
	psd:['123456']
	}
 function fnLogina() {
 var oUname = document.getElementById("username")
 var oUpass = document.getElementById("userpass")
 var oError = document.getElementById("error_box")
 var isError = true;
 if (oUname.value!==person.name || oUname.value===person.psd) {
  oError.innerHTML = "用户名错误";
  isError = false;
  return;
// }else if((oUname.value.charCodeAt(0)>=48) && (oUname.value.charCodeAt(0)<=57)){
//  oError.innerHTML = "首字符必须为字母";
//  return;
// }else for(var i=0;i<oUname.value.charCodeAt(i);i++){
//  if((oUname.value.charCodeAt(i)<48)||(oUname.value.charCodeAt(i)>57) && (oUname.value.charCodeAt(i)<97)||(oUname.value.charCodeAt(i)>122)){
//   oError.innerHTML = "必须为字母跟数字组成";
//   return;
//  }
 }
 
 if (oUpass.value===person.name || oUname.value!==person.psd){
  oError.innerHTML = "密码错误"
  isError = false;
  return;
 }
 window.alert("登录成功")
}
