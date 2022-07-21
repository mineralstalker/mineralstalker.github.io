function CopyToTextarea(el) {
  const text = el.textContent;
  var textarea = document.getElementById("sample");
  textarea.value = textarea.value + text + "";
}

/* load image function*/
function info_player(type) {
  document.getElementById("info_player").title = type;
}

//functions for displaying images when clicking on player 1 icons
function shale_logo() {
  info_player("shaledis");
}

function rock_logo() {
  info_player("rock");
}

function paper_logo() {
  info_player("paper");
}

function scissors_logo() {
  info_player("scissors");
}

//Shape functions for displaying images

function blk_logo() {
  info_player("blkdis");
}

function sbblk_logo() {
  info_player("sbblkdis");
}

function ang_logo() {
  info_player("angdis");
}

function plty_logo() {
  info_player("pltydis");
}

function splt_logo() {
  info_player("spltdis");
}

function flk_logo() {
  info_player("flkdis");
}

//Hardness functions for displaying images

function fri_logo() {
  info_player("fridis");
}

function plas_logo() {
  info_player("plasdis");
}

function sft_logo() {
  info_player("sftdis");
}

function brit_logo() {
  info_player("britdis");
}

function frm_logo() {
  info_player("frmdis");
}

function hd_logo() {
  info_player("harddis");
}

const textarea = document.getElementById("sample");

// Clear textarea value
textarea.value = "";

// Clear textarea value on click
const btn = document.getElementById("clear");

btn.addEventListener("click", function handleClick() {
  // log value before clearing it
  console.log(textarea.value);

  // clear textarea value
  textarea.value = "";
});

document.getElementById("copier").addEventListener("click", function () {
  var text = document.getElementById("sample");
  text.select();
  document.execCommand("copy");
});
