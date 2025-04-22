

//スライドショー//
const slides =document.querySelectorAll(`.slide`);
let current = 0;

function showSlide(index) {
	slides.forEach((slide,i) => {
		slide.classList.toggle(`active`, i === index);
	});
}

//スライドショーのボタン//
document.getElementById(`prev`).addEventListener(`click`, () => {
	current = (current - 1 + slides.length) % slides.length;
	showSlide(current);
});

document.getElementById(`next`).addEventListener(`click`, () => {
	current = (current + 1) % slides.length;
	showSlide(current);
});


//フォームの送信動作//
document.getElementById("contact-form").addEventListener("submit", function(e) {
	e.preventDefault(); // デフォルトの送信をキャンセル//
	document.getElementById("message").textContent = "メッセージを送信しました！";
	this.reset();
});

