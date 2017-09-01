$(function(){
	$('.has-submenu').on('mouseenter mouseleave',function(){
		$(this).find('.submenu').toggleClass('active');
	});
	$('#fullpage').fullpage({
		slidesNavigation:true,
		navigation:true,
	});
	$('#fullpage').fullpage({
	    fixedElements:'.nav',
	    anchors:['a','b','c','d','e','f'],
	    animateAnchor:true,
	    navigation:true,
	    navigationTooltips:['about','me','technology','experience','works','connect'],
	});
	



	$(function(){
	    var ble=true;
	    var menuTime=["50","100","150","200","250","300","350"];
	    var menuTimes=["10","20","30","40","50","60","70"];
	    $(".sq_menu").on("click",function(){
	        var navLength=$(".sq_meun_nav .sq_nav_1").length;
	        if(ble){
	            $(".sq_meun_back").animate({"left":"0"},500);
	            for(var i=0;i<navLength;i++){
	                $(".nav"+i).delay(menuTime[i]).animate({"marginLeft":"0"},"slow");
	            }
	            ble=false;
	        }else{
	            $(".sq_meun_back").delay(100).animate({"left":"-50%"},500);
	            for(var ii=0;ii<navLength;ii++){
	                $(".nav"+ii).delay(menuTimes[ii]).animate({marginLeft:"-155%"},100);
	            }
	            ble=true;
	        }
	    });

	    var nav=$(".sq_meun_nav").find(".sq_nav_1");
	    nav.hover(function() {
	        $(this).children(".sq_nav_park").css("opacity","1");
	    },function(){
	        $(this).children(".sq_nav_park").css("opacity","0");
	    });
	});




if( navigator.userAgent.match( /firefox/gi ) ) {
	[].slice.call( document.querySelectorAll( '.thumb img' ) ).forEach(function( el ) { el.style.boxShadow = 'none'; });
}

/*!
 * kort 0.1
 * http://lab.hakim.se/kort
 * MIT licensed
 *
 * Copyright (C) 2011 Hakim El Hattab (http://hakim.se, @hakimel)
 */
var Kort = (function(){

	var OFFSET_MARGIN = 2;

	var supports3DTransforms =  'WebkitPerspective' in document.body.style ||
								'MozPerspective' in document.body.style ||
								'msPerspective' in document.body.style ||
								'OPerspective' in document.body.style ||
								'perspective' in document.body.style;

	/**
	 * Binds events for all elements with the class 'kort'.
	 */
	function bind() {

		// Properties that are read from the DOM when the user hovers
		// and then cached to avoid needless DOM interaction
		var elementLeft = 0,
			elementWidth = 0,
			elementChildren = [];

		// Gotta have 3D transform support
		if( supports3DTransforms ) {

			[].slice.call( document.querySelectorAll( '.kort' ) ).forEach( function( element, i ) {

				// Make sure we don't bind to the same element twice
				if( element.classList.contains( 'kort-activated' ) === false ) {
					element.classList.add( 'kort-activated' );

					function onMouseOver( event ) {
						updateState();
						addMargin();
					}

					function onMouseMove( event ) {
						update( event.clientX );
					}

					function onMouseOut( event ) {
						removeMargin();
					}

					function onTouchStart( event ) {
						updateState();
						addMargin();

						update( event.touches[0].clientX );

						element.classList.add( 'touching' );

						document.addEventListener( 'touchmove', onTouchMove, false );
						document.addEventListener( 'touchend', onTouchEnd, false );
					}

					function onTouchMove( event ) {
						update( event.touches[0].clientX );

						event.preventDefault();
					}

					function onTouchEnd( event ) {
						removeMargin();

						element.classList.remove( 'touching' );

						document.removeEventListener( 'touchmove', onTouchMove, false );
						document.removeEventListener( 'touchend', onTouchEnd, false );
					}

					function updateState() {
						elementLeft = element.offsetLeft;
						elementWidth = element.offsetWidth;
						elementChildren = [].slice.call( element.children );
					}

					function update( x ) {
						// Find the present element based on the x position
						var present = Math.floor( ( x - elementLeft ) / elementWidth * elementChildren.length );

						// Cap to 0 - number_of_elements
						present = Math.max( Math.min( present, elementChildren.length - 1 ), 0 );

						elementChildren.forEach( function( child, i ) {

							if( i === present ) {
								child.classList.add( 'present' );
							}
							else {
								child.classList.remove( 'present' );
							}

						} );
					}

					function addMargin() {
						elementChildren.forEach( function( child, i ) {

							child.style.marginLeft = ( i * OFFSET_MARGIN ) + 'px';

						} );
					}

					function removeMargin() {
						elementChildren.forEach( function( child, i ) {

							child.style.marginLeft = 0;

						} );
					}

					if( 'ontouchstart' in window ) {
						element.addEventListener( 'touchstart', onTouchStart, false );
					}
					else {
						element.addEventListener( 'mouseover', onMouseOver, false );
						element.addEventListener( 'mouseout', onMouseOut, false );
						element.addEventListener( 'mousemove', onMouseMove, false );
					}

				}

			} );

		}

	}

	// Bind elments that are currently in the DOM
	bind();

	return {
		bind: bind
	};

})();






















})