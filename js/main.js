AOS.init({
	duration: 800,
	easing: 'slide',
	once: true
});

jQuery(document).ready(function ($) {

	"use strict";

	// loader
	$(".loader").delay(1000).fadeOut("slow");
	$("#overlayer").delay(1000).fadeOut("slow");


	var siteMenuClone = function () {

		$('.js-clone-nav').each(function () {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function () {

			var counter = 0;
			$('.site-mobile-menu .has-children').each(function () {
				var $this = $(this);

				$this.prepend('<span class="arrow-collapse collapsed">');

				$this.find('.arrow-collapse').attr({
					'data-toggle': 'collapse',
					'data-target': '#collapseItem' + counter,
				});

				$this.find('> ul').attr({
					'class': 'collapse',
					'id': 'collapseItem' + counter,
				});

				counter++;

			});

		}, 1000);

		$('body').on('click', '.arrow-collapse', function (e) {
			var $this = $(this);
			if ($this.closest('li').find('.collapse').hasClass('show')) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();

		});

		$(window).resize(function () {
			var $this = $(this),
				w = $this.width();

			if (w > 768) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function (e) {
			var $this = $(this);
			e.preventDefault();

			if ($('body').hasClass('offcanvas-menu')) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		})

		// click outisde offcanvas
		$(document).mouseup(function (e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		});
	};
	siteMenuClone();


	var sitePlusMinus = function () {
		$('.js-btn-minus').on('click', function (e) {
			e.preventDefault();
			if ($(this).closest('.input-group').find('.form-control').val() != 0) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function (e) {
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function () {
		$("#slider-range").slider({
			range: true,
			min: 0,
			max: 500,
			values: [75, 300],
			slide: function (event, ui) {
				$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
			}
		});
		$("#amount").val("$" + $("#slider-range").slider("values", 0) +
			" - $" + $("#slider-range").slider("values", 1));
	};
	// siteSliderRange();




	var siteCarousel = function () {
		if ($('.nonloop-block-13').length > 0) {
			$('.nonloop-block-13').owlCarousel({
				center: false,
				items: 1,
				loop: true,
				stagePadding: 0,
				margin: 20,
				autoplay: true,
				autoHeight: true,
				nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				responsive: {
					600: {
						margin: 0,
						stagePadding: 10,
						items: 1
					},
					1000: {
						margin: 0,
						stagePadding: 0,
						items: 1
					},
					1200: {
						margin: 0,
						stagePadding: 0,
						items: 1
					}
				}
			});
		}

		$('.nonloop-block-13').owlCarousel({
			center: false,
			items: 1,
			loop: true,
			autoplay: true,
			stagePadding: 0,
			margin: 20,
			nav: true,
			navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
			responsive: {
				600: {
					margin: 0,
					stagePadding: 0,
					items: 2
				},
				1000: {
					margin: 0,
					stagePadding: 0,
					items: 2
				},
				1200: {
					margin: 0,
					stagePadding: 0,
					items: 3
				}
			}
		});

		if ($('.slide-one-item').length > 0) {
			$('.slide-one-item').owlCarousel({
				center: false,
				items: 1,
				loop: true,
				stagePadding: 0,
				margin: 0,
				autoplay: true,
				pauseOnHover: false,
				nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">']
			});
		}


		var owl = $('.centernonloop').owlCarousel({
			center: true,
			items: 1,
			loop: true,
			margin: 10,
			dots: true,
			smartSpeed: 1000,
			responsive: {
				600: {
					items: 3
				}
			}
		});

		$('.customNextBtn').click(function (event) {
			event.preventDefault();
			owl.trigger('next.owl.carousel');
		});
		$('.customPrevBtn').click(function (event) {
			event.preventDefault();
			owl.trigger('prev.owl.carousel');
		});

	};
	siteCarousel();

	var siteStellar = function () {
		$(window).stellar({
			responsive: false,
			parallaxBackgrounds: true,
			parallaxElements: true,
			horizontalScrolling: false,
			hideDistantElements: false,
			scrollProperty: 'scroll'
		});
	};
	// siteStellar();

	var siteCountDown = function () {

		if ($('#date-countdown').length > 0) {
			$('#date-countdown').countdown('2020/10/10', function (event) {
				var $this = $(this).html(event.strftime(''
					+ '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
					+ '<span class="countdown-block"><span class="label">%d</span> days </span>'
					+ '<span class="countdown-block"><span class="label">%H</span> hr </span>'
					+ '<span class="countdown-block"><span class="label">%M</span> min </span>'
					+ '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
			});
		}

	};
	siteCountDown();

	var siteDatePicker = function () {

		if ($('.datepicker').length > 0) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function () {
		if ($(".js-sticky-header").length > 0) {
			$(".js-sticky-header").sticky({ topSpacing: 0 });
		}
	};
	siteSticky();

	// navigation
	var OnePageNavigation = function () {
		var navToggler = $('.site-menu-toggle');
		$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a[href^='#']", function (e) {
			e.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				'scrollTop': $(hash).offset().top - 0
			}, 1000, 'easeInOutCirc', function () {
				window.location.hash = hash;
			});

		});
	};
	OnePageNavigation();

	var siteScroll = function () {

		$(window).scroll(function () {

			var st = $(this).scrollTop();

			if (st > 100) {
				$('.js-sticky-header').addClass('shrink');
			} else {
				$('.js-sticky-header').removeClass('shrink');
			}

		})

	};
	siteScroll();

	var siteIstotope = function () {
		/* activate jquery isotope */
		var $container = $('#posts').isotope({
			itemSelector: '.item',
			isFitWidth: true
		});

		$(window).resize(function () {
			$container.isotope({
				columnWidth: '.col-sm-3'
			});
		});

		$container.isotope({ filter: '*' });

		// filter items on button click
		$('#filters').on('click', 'button', function (e) {
			e.preventDefault();
			var filterValue = $(this).attr('data-filter');
			$container.isotope({ filter: filterValue });
			$('#filters button').removeClass('active');
			$(this).addClass('active');
		});
	}

	siteIstotope();

	$('.fancybox').on('click', function () {
		var visibleLinks = $('.fancybox');

		$.fancybox.open(visibleLinks, {}, visibleLinks.index(this));

		return false;
	});

});


// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
	// Tab navigation for mobile
	const tabs = document.querySelectorAll(".content-tabs .nav-link");
	const tabContents = document.querySelectorAll(".tab-pane");

	tabs.forEach((tab) => {
		tab.addEventListener("click", function () {
			// Remove active class from all tabs and tab contents
			tabs.forEach((t) => t.classList.remove("active"));
			tabContents.forEach((content) => content.classList.remove("show", "active"));

			// Add active class to the clicked tab and corresponding content
			this.classList.add("active");
			const target = document.querySelector(this.getAttribute("data-bs-target"));
			target.classList.add("show", "active");
		});
	});

	// Add active state to journey items on scroll
	const journeyItems = document.querySelectorAll(".journey-item");
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("active");
				} else {
					entry.target.classList.remove("active");
				}
			});
		},
		{ threshold: 0.5 } // Trigger when 50% of the item is visible
	);

	journeyItems.forEach((item) => observer.observe(item));

	// Smooth scrolling for navigation links
	const navLinks = document.querySelectorAll(".nav-link");
	navLinks.forEach((link) => {
		link.addEventListener("click", function (e) {
			e.preventDefault();
			const targetId = this.getAttribute("href").substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				window.scrollTo({
					top: targetElement.offsetTop - 100, // Adjust offset for fixed headers
					behavior: "smooth",
				});
			}
		});
	});
});


document.addEventListener("DOMContentLoaded", function() {
	// Encuentra todos los enlaces de navegación
	const navLinks = document.querySelectorAll('.site-menu .nav-link, .site-menu a');

	navLinks.forEach(link => {
		link.addEventListener('click', function(e) {
			// Obtiene el href del enlace
			const href = this.getAttribute('href');

			// Maneja enlaces a secciones en la misma página
			if (href.startsWith('#')) {
				e.preventDefault();
				const targetSection = document.querySelector(href);
				if (targetSection) {
					window.scrollTo({
						top: targetSection.offsetTop - 100,
						behavior: 'smooth'
					});
				}
			}
			// Maneja enlaces a secciones en otras páginas (contienen # pero no al inicio)
			else if (href.includes('#') && !href.startsWith('#')) {
				e.preventDefault();
				// Separa la URL base y el identificador de sección
				const [baseUrl, sectionId] = href.split('#');
				// Guarda la sección objetivo en sessionStorage
				sessionStorage.setItem('scrollToSection', '#' + sectionId);
				// Navega a la página base
				window.location.href = baseUrl;
			}
			// Para enlaces normales a otras páginas sin secciones específicas
			else {
				// Deja que el comportamiento predeterminado funcione
				// No es necesario preventDefault() aquí
				return true;
			}

			// Cierra el menú móvil si está abierto
			if (document.body.classList.contains('offcanvas-menu')) {
				document.body.classList.remove('offcanvas-menu');
			}
		});
	});

	// Verifica si hay que desplazarse a una sección después de cargar la página
	const storedSection = sessionStorage.getItem('scrollToSection');
	if (storedSection) {
		// Espera a que la página cargue completamente
		setTimeout(() => {
			const targetElement = document.querySelector(storedSection);
			if (targetElement) {
				window.scrollTo({
					top: targetElement.offsetTop - 100,
					behavior: 'smooth'
				});
			}
			// Limpia la sección almacenada
			sessionStorage.removeItem('scrollToSection');
		}, 1000);
	}
});
