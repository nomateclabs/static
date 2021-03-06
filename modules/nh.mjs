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

let topnav = x('div',{class: 'topnav'},
    x('div', {class: 'l-head'}),
    x('div', {class: 'r-head'},
      x('div', {class: 'social-icon'},
        x('a', {
          class: 'facebook',
          title: 'facebook',
          href: 'https://www.facebook.com/Nomatec-Hosting-102974335265204',
          target:'_blank'
        })
      ),
      x('div', {class: 'social-icon'},
        x('a', {
          class: 'twitter',
          title: 'twitter',
          href: 'https://twitter.com/nomatechosting',
          target:'_blank'
        })
      )
    )
  )

document.getElementById('pagewrap').prepend(topnav);
document.getElementById('our-id').parentNode.append(
  x('li', {class: 'footer-email'},
    x('i', {class: 'icon-envelope-alt'},
      x('a', {href: 'mailto://sales@nomatechosting.com'}, 'sales@nomatechosting.com')
    )
  ),
  x('li', {class: 'footer-email'},
    x('i', {class: 'icon-envelope-alt'},
      x('a', {href: 'mailto://support@nomatechosting.com'}, 'support@nomatechosting.com')
    )
  )
)
