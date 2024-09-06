const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");


yesBtn.addEventListener("click", () => {
  question.innerHTML = "Love you too babe 😘 ";
  gif.src = "https://media.giphy.com/media/76J6FLvhnRiMM/giphy.gif?cid=790b76115befzw2or1xyz6osd13qqmcxx9c08knf23pbqtyz&ep=v1_gifs_search&rid=giphy.gif&ct=g";
});


noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

 
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});