// jshint ignore: start
// obt jshint doesn't get ES6, so disabling it
"use strict";

module.exports = function(options){
	return `
	<section class="n-notification n-notification--js n-notification--${options.type}" data-trackable="${options.trackable}">
		<div class="n-notification__content-wrapper">
			<h3 class="n-notification__title">
				${options.title}
			</h3>
			<div class="n-notification__content">
				${options.content}
			</div>
		</div>
		<button class="n-notification__close n-notification__close-js" data-trackable="close">Close</button>

	</section>
`;
};