const details1 = document.querySelector('.details1');
const details2 = document.querySelector('.details2');
const details3 = document.querySelector('.details3');
const details4 = document.querySelector('.details4');
const details5 = document.querySelector('.details5');
const details6 = document.querySelector('.details6');
const details7 = document.querySelector('.details7');
const details8 = document.querySelector('.details8');
const details = document.querySelector('.details');
 const detailswindow = document.querySelector('.detailswindow');
 let p = document.querySelector('.details11');
 const close = document.querySelector('.close');
 const trans = document.querySelector('.trans')

 details1.addEventListener('click' ,()=>
 {
    detailswindow.style.display = "flex" ;
   
    details.style.backgroundColor = " rgba(192, 127, 86,0.8) ";
  
 });
 details2.addEventListener('click' ,()=>
 {
    detailswindow.style.display = "flex" ;
    
    p.innerHTML= "-The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the Chamber of Secrets has been opened and that the heir of Slytherin would kill all pupils who do not come from all-magical families" ;
    details.style.backgroundColor = "rgba(201,42,98,0.8)" ;
});
details3.addEventListener('click' ,()=>
 {
    detailswindow.style.display = "flex" ;
    
    p.innerHTML= "-Harry Potter, along with his best friends, Ron and Hermione, is about to start his third year at Hogwarts School of Witchcraft and Wizardry. Harry can't wait to get back to school after the summer holidays. (Who wouldn't if they lived with the horrible Dursleys?) But when Harry gets to Hogwarts, the atmosphere is tense. There's an escaped mass murderer on the loose, and the sinister prison guards of Azkaban have been called in to guard the school." ;
    details.style.backgroundColor = "rgba(214,126,116,0.812)" ;
});
details4.addEventListener('click' ,()=>
 {
    detailswindow.style.display = "flex" ;
   
    p.innerHTML= "-It is the summer holidays and soon Harry Potter will be starting his fourth year at Hogwarts School of Witchcraft and Wizardry. Harry is counting the days: there are new spells to be learnt, more Quidditch to be played, and Hogwarts castle to continue exploring. But Harry needs to be careful - there are unexpected dangers lurking." ;
    details.style.backgroundColor = "rgba(87,147,90,0.81)" ;
});
details5.addEventListener('click' ,()=>
 {
    detailswindow.style.display = "flex" ;
    
    p.innerHTML= "-In his fifth year at Hogwart's, Harry faces challenges at every turn, from the dark threat of He-Who-Must-Not-Be-Named and the unreliability of the government of the magical world to the rise of Ron Weasley as the keeper of the Gryffindor Quidditch Team. Along the way he learns about the strength of his friends, the fierceness of his enemies, and the meaning of sacrifice." ;
    details.style.backgroundColor = "rgb(2,69,112)" ;
});
details6.addEventListener('click' ,()=>
 {
    detailswindow.style.display = "flex" ;
    
    p.innerHTML= "-The war against Voldemort is not going well; even the Muggles have been affected. Dumbledore is absent from Hogwarts for long stretches of time. And yet,As with all wars, life goes on. Sixth-year students learn to Apparate. Teenagers flirt,fight and fall in love. Harry receives some extraordinary help in Potions from the mysterious Half-Blood Prince. And with Dumbledore's guidance, he seeks out the full, complex story of the boy who became Lord Voldemort." ;
    details.style.backgroundColor = "rgb(99,122,79)" ;
});
details7.addEventListener('click' ,()=>
 {
    detailswindow.style.display = "flex" ;
    

    p.innerHTML= "-The seventh and final adventure in the spellbinding Harry Potter saga the series that changed the world of books forever As he climbs into the sidecar of Hagrid’s motorbike and takes to the skies, leaving Privet Drive for the last time, Harry Potter knows that Lord Voldemort and the Death Eaters are not far behind.The Dark Lord is breathing fear into everything Harry loves, The final battle must begin  Harry must stand and face his enemy." ;
    details.style.backgroundColor = "rgba(252,149,57,0.714)" ;
});
details8.addEventListener('click' ,()=>
 {
    detailswindow.style.display = "flex" ;
    
    p.innerHTML= "-It was always difficult being Harry Potter and it isnot much easier now that he is an overworked employee of the Ministry of Magic, a husband, and father of three school-age children.While Harry grapples with a past that refuses to stay where it belongs, his youngest son, Albus, must struggle with the weight of a family legacy he never wanted. both father and son learn the uncomfortable truth: Sometimes, darkness comes from unexpected places" ;
    details.style.backgroundColor = "rgb(41,40,45)" ;
});

close.addEventListener('click' ,()=>
{
    detailswindow.style.display = "none" ;
    
});