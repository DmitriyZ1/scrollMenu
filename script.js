let positionScroll = 0;
let positionElement = 0;


document.addEventListener('scroll', () => {
    
    if(window.scrollY >= positionScroll && positionElement > -100){
      
        let pixScroll = window.scrollY - positionScroll;
        positionElement -= pixScroll;
        if(positionElement > -100){
            document.querySelector('.search').style.top = positionElement + 'px';
            console.log('ds')
        } else{
            document.querySelector('.search').style.top = '-100px';
            
        }
    }
    
    if(window.scrollY <= positionScroll && positionElement < 0){
        let pixScroll = positionScroll - window.scrollY;
       
        positionElement += pixScroll;
        if(positionElement < 0){
            document.querySelector('.search').style.top = positionElement + 'px';
        } else{
            document.querySelector('.search').style.top = '0px';
        }
    }
    positionScroll = window.scrollY;
})




