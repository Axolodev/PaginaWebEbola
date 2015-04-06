var h3Tab = $('#myTab li:eq(0) a');
var G4 = $('#myTab li:eq(1) a');
var F6 = $('#myTab li:eq(2) a');
var UNOTRESTRES = $('#myTab li:eq(3) a');
var GP = $('#myTab li:eq(4) a');
var JP3K = $('#myTab li:eq(5) a');
var KZ52 = $('#myTab li:eq(6) a');
var S9 = $('#myTab li:eq(7) a');


var pswpElement;

h3Tab.on('shown.bs.tab', function (e) {
	changeHtmlWithIndex(0);
});

G4.on('shown.bs.tab', function (e) {
	changeHtmlWithIndex(1);
});
F6.on('shown.bs.tab', function (e) {
	changeHtmlWithIndex(2);
});
UNOTRESTRES.on('shown.bs.tab', function (e) {
	changeHtmlWithIndex(3);
});
GP.on('shown.bs.tab', function (e) {
	changeHtmlWithIndex(4);
});
JP3K.on('shown.bs.tab', function (e) {
	changeHtmlWithIndex(5);
});
KZ52.on('shown.bs.tab', function (e) {
	changeHtmlWithIndex(6);
});
S9.on('shown.bs.tab', function (e) {
	changeHtmlWithIndex(7);
});

changeHtmlWithIndex = function (index) {
	var selected;
	var items;
	if (index == 0) {
		selected = $('#1H3');
		items = [
			{
				src: 'assets/3dMols/1H3/1h3.jpeg',
				w: 768,
				h: 738
    },
			{
				src: 'assets/3dMols/1H3/1h32.jpeg',
				w: 694,
				h: 689
    },
			{
				src: 'assets/3dMols/1H3/1h33.jpg',
				w: 908,
				h: 746
    },
			{
				src: 'assets/3dMols/1H3/1h34.jpeg',
				w: 681,
				h: 721
    },
			{
				src: 'assets/3dMols/1H3/1h35.jpeg',
				w: 765,
				h: 737
    },
			{
				src: 'assets/3dMols/1H3/1h36.jpeg',
				w: 829,
				h: 690
    },
			{
				src: 'assets/3dMols/1H3/1h37.jpeg',
				w: 787,
				h: 669
    }

];



	} else if (index == 1) {
		selected = $('#G4');
	} else if (index == 2) {
		selected = $('#F6');
	} else if (index == 3) {
		selected = $('#UNOTRESTRES');
	} else if (index == 4) {
		selected = $('#GP');
	} else if (index == 5) {
		selected = $('#JP3K');
	} else if (index == 6) {
		selected = $('#KZ52');
	} else if (index == 7) {
		selected = $('#S9');
	}
	selected.html(getPhotoSwipeHtml());

	pswpElement = document.querySelectorAll('.pswp')[0];

	var options = {
		// optionName: 'option value'
		// for example:
		//		index: 0 // start at first slide
	};
	// Initializes and opens PhotoSwipe
	var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();


};

getPhotoSwipeHtml = function () {
	return '<!-- Root element of PhotoSwipe. Must have class pswp. --> <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">     <!-- Background of PhotoSwipe.          Its a separate element as animating opacity is faster than rgba(). -->    <div class="pswp__bg"></div>    <!-- Slides wrapper with overflow:hidden. -->    <div class="pswp__scroll-wrap">        <!-- Container that holds slides.             PhotoSwipe keeps only 3 of them in the DOM to save memory.            Dont modify these 3 pswp__item elements, data is added later on. -->        <div class="pswp__container">            <div class="pswp__item"></div>            <div class="pswp__item"></div>            <div class="pswp__item"></div>        </div>        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->        <div class="pswp__ui pswp__ui--hidden">            <div class="pswp__top-bar">                <!--  Controls are self-explanatory. Order can be changed. -->                <div class="pswp__counter"></div>                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>                <button class="pswp__button pswp__button--share" title="Share"></button>                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>                <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->                <!-- element will get class pswp__preloader--active when preloader is running -->               <div class="pswp__preloader">                    <div class="pswp__preloader__icn">                      <div class="pswp__preloader__cut">                        <div class="pswp__preloader__donut"></div>                      </div>                    </div>                </div>            </div>            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">                <div class="pswp__share-tooltip"></div>             </div>            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">            </button>            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">            </button>            <div class="pswp__caption">                <div class="pswp__caption__center"></div>            </div>        </div>    </div></div>';
}