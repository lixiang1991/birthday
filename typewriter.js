//wallace 2015 7 14
Element.prototype.typewriter=function(a){
			var d = this,
				c = d.innerHTML,
				b = 0;
			d.innerHTML="";
			var e = setInterval(function() {
				var f = c.substr(b, 1);
				if (f == "<") {
					b = c.indexOf(">", b) + 1
				} else {
					b++
				}
				d.innerHTML=c.substring(0, b) + (b & 1 ? "_" : "");
				if (b >= c.length) {
					clearInterval(e)
					 showMsg()
				}
			}, 75)
		return this
	
	}
	function showMsg(){
	  layer.msg('你喜欢这个礼物吗？', {
  time: 0 //不自动关闭
  ,btn: ['喜欢', '不喜欢']
  ,yes: function(index){
    layer.close(index);
    layer.msg('雅蠛蝶 O.o', {
      icon: 6
      ,btn: ['嗷','嗷','嗷']
    });
  }
});
	}