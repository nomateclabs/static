import { x } from './xscript.mjs';
import { utils } from './nh_utils.mjs';

try {

  let item = x('div', {
    class: 'icon-chevron-up t-top',
    onclick(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  })

  window.addEventListener('scroll', utils.debounce(function(evt){

     let top = window.pageYOffset || document.scrollTop;
     if(top === NaN || !top){
       item.classList.add('hidden');
     } else if(item.classList.contains('hidden')){
       item.classList.remove('hidden');
     }
     top = null;
     return;
  }, 250))

  document.body.append(item);
  document.getElementsByClassName('footer-end')[0].firstElementChild.firstChild.textContent = '© Copyright 2021 ';


} catch (err) {

}

let topnav = x('div',{class: 'topnav'})

document.getElementById('pagewrap').prepend(topnav);
