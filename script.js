const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach(toggle => toggle.addEventListener('change' , (e) => dotheTrick(e.target)
))


function dotheTrick(theclickedone)
{
      if(good.checked && cheap.checked && fast.checked)
      {
            if(good === theclickedone)
            {
                  fast.checked= false 
            }
            if(cheap === theclickedone )
            {
                  good.checked= false
            }
            if(fast === theclickedone)
            {
                  cheap.checked= false
            }
      }
}

