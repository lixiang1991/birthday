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
					 startQue();
				}
			}, 75)
		return this
	
	}
	var dislike_count=0;
	function startQue(){
		var msgs='你喜欢这个礼物吗？';
		if(dislike_count==1){
			msgs='你喜欢我吗？';
		}
		if(dislike_count==2){
			msgs='你真的不喜欢我吗？';
		}
		if(dislike_count==3){
			msgs='我凌乱了，如果你假的不喜欢就不要选择yes';
		}
		if(dislike_count<2){
		  layer.msg(msgs, {
			  time: 0 
			  ,btn: ['喜欢', '不喜欢']
			  ,yes: function(index){
			    layer.close(index);
			    like();
			  }
			  ,btn2:function(index){
			 	layer.close(index);
			   	dislike();
			  }
			});
		}
		if(dislike_count==2){
		  layer.msg(msgs, {
			  time: 0 
			  ,btn: ['不喜欢', '喜欢']
			  ,yes: function(index){
			    layer.close(index);
			    dislike();
			  }
			  ,btn2:function(index){
			 	layer.close(index);
			   	like();
			  }
			});
		}
		if(dislike_count==3){
		  layer.msg(msgs, {
			  time: 0 
			  ,btn: ['yes', 'no']
			  ,yes: function(index){
			    layer.close(index);
			    like();
			  }
			  ,btn2:function(index){
			 	layer.close(index);
			   	like();
			  }
			});
		}
	}
	
	 function like(){
	 	var no_text='不好';
	 	if(dislike_count>0){
	 		no_text='想得美';
	 	}
	 	if(dislike_count==3){
	 		no_text='不要脸';
	 	}
	 	layer.msg('我也喜欢你，做我女票好吗 O.o', {
		      time: 0 //不自动关闭
		      ,btn: ['好呀',no_text]
		      ,yes: function(index){
			    layer.close(index);
			    gf();
			  }
			  ,btn2:function(index){
			 	layer.close(index);
			 	if(dislike_count==0)
			   		nogf();
			   	if(dislike_count>0 && dislike_count<3)
			   		think();
			   	if(dislike_count==3)
			   		noface();
			  }
		    });
	 }
	 function think(){
	 	var index = layer.open({
	 		closeBtn:0,
		  	content: $("#sleep"),
		  	title:'我能想到最美的事就是每天醒来第一眼就能见到你',
		  	btn:['重新选择'],
		  	yes:function(index,layero){
		  		layer.close(index);
		  		restart();
		  	}
		});
	 }
	 function restart(){
	 	 dislike_count=0;
	 	 startQue();
	 }
	 function dislike(){
	 	var msgs='看清楚再选呀-_-';
	 	if(dislike_count==1){
	 		msgs='出bug了';
	 	}
	 	if(dislike_count==2){
	 		msgs='程序要崩溃了';
	 	}
	 	dislike_count+=1;
		 layer.msg(msgs, {
			  icon: 2,
			  time: 1000 
			}, function(){
			  startQue();
			}); 
	 }
	 function nogf(){
	 	
	 	var msgs='看清楚再选呀-_-';
	 	if(dislike_count==1){
	 		msgs='出bug了';
	 	}
	 	if(dislike_count==2){
	 		msgs='程序要崩溃了';
	 	}
	 	dislike_count+=1;
		 layer.msg(msgs, {
			  icon: 2,
			  time: 1000 
			}, function(){
			  startQue();
			}); 
	 }
 	function gf(){
	 	layer.msg('么么哒，嫁给我好吗？', {
		      time: 0 //不自动关闭
		      ,btn: ['你是我的了','还早着呢']
		      ,yes: function(index){
			    layer.close(index);
			    love();
			  }
			  ,btn2:function(index){
			 	layer.close(index);
			   	early();
			  }
		    });
	 }