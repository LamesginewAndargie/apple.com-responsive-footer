console.log("Testing");
$(document).ready(function () {
	let selectedH3 = $(".footer-links-wrapper h3");
	$(window).resize(function () {
		if ($(window).width() >= 768) {
			selectedH3.next().show();
			selectedH3.css({
				"border-bottom": "1px solid #d2d2d7",
				"border-top": "none",
				"border-right": "none",
				"border-left": "none",
			});
		}
	});
	if (window.innerWidth < 768) {
		let selectedH3 = $(".footer-links-wrapper h3");
		selectedH3.on("click", function (e) {
			e.preventDefault();
			let nxtSblgElmnt = $(e.target.nextElementSibling);
			selectedH3.css({
				"border-bottom": "1px solid #d2d2d7",
				"border-top": "none",
				"border-right": "none",
				"border-left": "none",
			});
			if (nxtSblgElmnt.css("display") == "none") {
				$(e.target).toggleClass("expanded");
				$(this).css({ border: "3px solid #87CEFA" });
				nxtSblgElmnt.slideDown();
			} else {
				$(e.target).toggleClass("expanded");
				$(this).css({ border: "3px solid #87CEFA" });
				nxtSblgElmnt.hide();
			}
		});
	}
});
