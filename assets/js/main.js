/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

})(jQuery);

const qs = [
	'If you have a favorite poem, what is it and why? If not, what kind of poems interest you and why?', 
	'What are your thoughts on the statement, \"poetry is more powerful than prose\"? What do you think makes poetry powerful? (prose is non-poetry)',
	'Is poetry valuable? Why?',
	'What is poetry to you?'
]
const questions = [1, 2, 4, 1, 3, 4, 2, 2, 4, 2, 4, 4, 4, 4, 3, 4, 4, 2, 1, 3]
const quotes = [
	'\"I don\'t have a favorite poem but I like limericks because my grandpa would always write them with me.\" <br /><br /> –First Year, interested in Astrophysics, neutral on poetry', 
	'\"I think poetry is like espresso, prose is like coffee. They both have important intellectual and emotional impacts, but poetry packs a stronger punch in a more concentrated package. Since it\’s shorter, it\’s also more easily digestible by the masses, so it can spread ideas more quickly. \" <br /><br /> –Graduate student, pursuing a PhD in Molecular Engineering, likes poetry',
	'\"The highest form of language, transferring messages in ways that aren’t direct in content but are extremely intentional in form.\" <br /><br /> –First Year, interested in Molecular Engineering, likes poetry',
	'\"\'What You Missed That Day You Were Absent from Fourth Grade\' by Brad Aaron Modlin. I really like this poem because I resonated with the feeling that everyone else knows something that I don\'t and everyone else understands life a little bit better and has their life a little bit more together than I do. Reading this poem makes me feel less alone.\" <br /><br /> -Second Year, interested in Physics and Law, likes poetry',
	'\"Extremely. It can capture the zeitgeist of a time, and express vivid emotions in only a few lines.\" <br /><br /> –First Year, interested in Economics and Music, likes poetry',
	'\"A dangling conversation.\" <br /><br /> –First Year, interested in Quantum Engineering, likes poetry',
	'\"The human element makes poetry powerful - someone put their emotions on a page, and you can experience them from both their and your point of view.\" <br /><br /> -Graduate Student, studying Molecular Engineering, neutral on poetry',
	'\"I think that the statement is dependent on the author! Powerful prose can outweigh underdeveloped poetry, but powerful poetry can trump underdeveloped prose. The power of poetry is dependent on the audience\'s ability to connect to the poem--a poem may be more powerful for someone who can better relate to it, but it may be less powerful for someone who is unable to connect to it on a personal level.\" <br /><br /> -Second Year, interested in Economics and Pre-Med, likes poetry',
	'\"Good poetry takes your breath away.\" <br /><br /> –Graduate Student, studying Arts in Social Sciences, likes poetry',
	'\"I would moreso say that poetry and prose are powerful in different ways--novels like ulysses by james joyce and poems like lighght by aram saroyan can both be moving but i feel like generally speaking poems are powerful via their ability to be interpreted through different \"angles\" (e.g. the way the words feel in your mouth, the way they\'re displayed on the page)\" <br /><br /> –Graduate Student, studying Financial Math, likes poetry',
	'\"It is one of the oldest forms of literature for a reason; the effect of carefully chosen sounds and rhythms can convey emotions nothing else can.\" <br /><br /> –First Year, undecided, likes poetry',
	'\"To me, poetry is art that plays with words and language without emphasis on “meaning.” \" <br /><br /> -Second Year, interested in Pre-Med, likes poetry',
	'\"To me, poetry is the most captivating kind of writing. It is a gorgeous, shocking, often puzzling art form, and the best poetry leaves me as a slightly but fundamentally different person. I see it as an embodiment of humanity\'s penchant for the dramatic—our desire to make a statement with the feelings that have most heavily impacted us. Poetry is a reflection of the human experience, messy bits and all.\" <br /><br /> –First Year, interested in Computer Science, likes poetry',
	'\"A bunch of beautifully scripted words that allow people to feel passionate. Without poetry the basics to our art, how can one express themselves? I love writing poetry myself through out dark times in order to express myself and encourage the people around me.\" <br /><br /> –Sophomore, interested in English, likes poetry',
	'\"Poetry is valuable because it’s been used through history and different cultures and religions. Just the Bible itself is full of poetry. Poetry allows people to be seen. \" <br /><br /> –Sophomore, interested in English, likes poetry',
	'\"For me, poetry is mostly just a type of song which is typically written instead of spoken.\" <br /><br /> –Sophomore, interested in Math, neutral on poetry',
	'\"A form of expression for emotions and ideas written in a masterful form. I don\'t usually read or write poetry, but it has been important enough to so many people that the word \'poetry\' exists in the first place.\" <br /><br /> –Sophomore, interested in Math, neutral on poetry',
	'\"In my opinion, poetry is indeed more powerful than prose. The shortness but meaningfulness of poems gives it a sort of powerful feel to it. It gets the point across quick but very in depth.\" <br /><br /> –Sophomore, interested in Math, neutral on poetry',
	'\"My favorite poems tend to be tragic and have a deeper meaning of criticizing humans flaws. I think that by exposing those flaws and tragedy it makes me believe that there is love and hope despite those terrible things.\" <br /><br /> -Senior, interested in Art and Engineering, likes poetry',
	'\"I think poetry is incredibly valuable for artistic expression and communication. It feels like one of the best ways to truly manipulate and make use of language beyond its standard constraints of use. I also think it provides valuable insight into how communication and written intimacy can occur, and the experience of reality which is difficult to capture in language. I think poetry can be very poignant. I think poetry has a lot of value for the writer and reader.\" –Third Year, interested in Math, likes poetry'
]
indices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
shuffle(indices);
index = 0;
updateQuote();

function shuffle(array) {
	let currentIndex = array.length;

	// While there remain elements to shuffle...
	while (currentIndex != 0) {

		// Pick a remaining element...
		let randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
		array[randomIndex], array[currentIndex]];
	}
}
function nextQuote(){
	index++;
	if(index == quotes.length) index = 0;
	updateQuote();
}
function lastQuote(){
	index--;
	if(index == -1) index = quotes.length - 1;
	updateQuote();
}
function updateQuote(){
	$("#quote").fadeOut(300, function() {
		document.getElementById("question").innerHTML = qs[questions[indices[index]] - 1];
		document.getElementById("response").innerHTML = quotes[indices[index]];
		$( "#quote" ).fadeIn(300, function() {});
	});
}
