$(function(){
	$('#username').focus().blur(checkName);
	$('#password').blur(checkPassword);
                $('#usernum').focus().blur(checkNum);
});

function checkName(){
	var name = $('#username').val();
	if(name == null || name == ""){
		//提示错误
		$('#count-msg').html("姓名不能为空");
		return false;
	}
	var reg = /^[\u4e00-\u9fa5a-zA-Z]*$/;
	if(!reg.test(name)){
		$('#count-msg').html("姓名格式错误");
		return false;
	}
	$('#count-msg').empty();
	return true;
}

function checkPassword(){
	var password = $('#password').val();
	if(password == null || password == ""){
		//提示错误
		$('#password-msg').html("密码不能为空");
		return false;
	}
	var reg = /^\w{3,10}$/;
	if(!reg.test(password)){
		$('#password-msg').html("输入3-10个字母或数字或下划线");
		return false;
	}
	$('#password-msg').empty();
	return true;
}

function checkNum(){
	var usernum = $('#usernum').val();
	if(usernum == null || usernum == ""){
		//提示错误
		$('#usernum-msg').html("学号不能为空");
		return false;
	}
	var reg = /^\d{10}$/;
	if(!reg.test(usernum)){
		$('#usernum-msg').html("学号格式错误");
		return false;
	}
	$('#usernum-msg').empty();
	return true;
}