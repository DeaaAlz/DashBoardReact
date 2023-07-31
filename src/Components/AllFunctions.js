// document.addEventListener("click", function(evt) {
//     let flyoutEl = document.getElementById('setting-div'),
//       targetEl = evt.target; // clicked element      
//     do {
//       if(targetEl == flyoutEl) {
//         // This is a click inside, does nothing, just return.
//         // alert("inside")
//         document.getElementById("setting-div").classList.add("toggleClass");
//          return;
//       }
//       // Go up the DOM
//       targetEl = targetEl.parentNode;
//     } while (targetEl);
//     // This is a click outside.
//     document.getElementById("setting-div").classList.remove("toggleClass");
//   },true);
  
  
  export const showDiv=()=>{
    // document.getElementById("setting-div").classList.toggle("toggleClass");
  }