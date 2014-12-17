// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function toggleList(divClass) {
	$("div#" + divClass + " ul").slideToggle();
}

function caldelta(delta) {
	if (delta == 0 || delta <= 1 && delta >= -1) {
		return delta;
	}
	var neg = false;
	if (delta < 0) {
		neg = true;
		delta = -delta;
	}
	delta *= 0.1;
	if (delta < 1) {
		delta = 1;
	}
	if (neg) {
		delta = -delta;
	}
	return delta;
}
function scroll(){
	var t = 500;
	var offset = $("div#" + "rss").offset();
	var margin = parseFloat($("div#" + "rss").css("margin-top"));
	var d = document.documentElement.scrollTop || document.body.scrollTop;
	var delta = caldelta(d - offset.top);
	margin += delta;
	if (margin < 30) {
		margin = 30;
	}
	if (delta != 0 && margin != 30) {
		t = 10;
	}
	$("div#" + "rss").css("margin-top", margin + "px");
	$("div#" + "index").css("margin-top", margin + "px");
	setTimeout(arguments.callee, t);
}

function showPreview() {
	$("#preview .paragraph").empty();
	var date = $("input[name='post[date]']").val();
	date = date.replace(/-/g, ".");
	var pre = $("textarea[name='post[pre]']").val();
	var content = $("textarea[name='post[content]']").val();
	$("#preview .paragraph").append(pre);
	$("#preview .paragraph").append('<h2 class="date">' + date + "</h2>");
	$("#preview .paragraph").append(content);
}

function addContent(toAdd) {
	var content = $("textarea[name='post[content]']").val();
	var textarea = document.getElementById("post_content");
	var start = textarea.selectionStart, end = textarea.selectionEnd;
	var newContent = content.substring(0, start) + toAdd + content.substring(end, content.length);
	$("textarea[name='post[content]']").val(newContent);
	textarea.setSelectionRange(start + toAdd.length, start + toAdd.length);
	textarea.focus();
}

function getSelectedText() {
	var content = $("textarea[name='post[content]']").val();
	var textarea = document.getElementById("post_content");
	var start = textarea.selectionStart, end = textarea.selectionEnd;
	return content.substring(start, end);
}
			
function addTag(obj) {
	var tag = obj.value;
	var openTag = tag, closeTag = tag;
	if (tag == "a") {
		openTag = 'a href=""';
	}
	var addString = "<" + openTag + ">" + getSelectedText() + "</" + closeTag + ">";
	addContent(addString);
}
