(function($) {
	var Lunbo = function(config) {
		var _config = {
			interval: 2000,
			step: $.noop
		}
		$.extend(_config, config)
		var
		ul = this.find('ul'),
		li = ul.find('li'),
		off = li.outerWidth(true),
		index = 1;
		var timeId=setInterval(move,_config.interval)
		function move() {
			ul.animate({
				'marginLeft': -index * off
			}, 600);
			_config.step(index); //			
			index += 1;
			if (index === li.length) {
				index = 0
			}
		}
		this.on('mouseenter.lunbo',function(){
			clearInterval(timeId)
		})
		this.on('mouseleave.lunbo',function(){
			timeId=setInterval(move,_config.interval)
		})
		return this
	}
	$.fn.extend({
		lunbo: Lunbo
	})
})(jQuery)