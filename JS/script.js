window.addEventListener("scroll",function(){
  const header=this.document.querySelector("header")
  if (this.window.scrollY>20){
    header.classList.add("scrolled")
  }
  else{
    header.classList.remove("scrolled")
  }
})

/* loader start */
document.addEventListener("DOMContentLoaded", function(){
  const loader=document.querySelector(".loader");
  setTimeout(()=>{
    loader.style.opacity='0'
    loader.style.display='none'

  }, 3000);
})
/* loader end */

/* tugma  start*/
const scrollBtn = document.getElementById("scrol");
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});