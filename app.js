/*Create OBSERVER*/
/*create intersectionObserver:
 ~const observer = ~ 
 - This is a class: ~new intersectionObserver ();~ 
 -that takes a callback function: ~new intersectionObserver ((entries) =>{});~ 
 -and its constructor: ~((entries) => {entries.forEach((entry) =>{});~
 -This can observe multiple entries/elements at the same time. This function will run each time the visibility of one of the elements changes.*/
/***********************/
/*Because it handles multiple entries, you need to use forEach to loop over them: ~entries.forEach((entry) =>{});~
-then we can run a conditional check to see if that entry is intersecting the viewport or not:
 ~entries.forEach((entry) =>{
    console.log(entry)
    if (entry.intersecting) {}
    )};~ */
/*If it is intersecting, you add a class to it called show which will make it visible:
~if (entry.intersecting) {
    entry.target.classList.add('show')};~ 
    -If you only want to show the animation once you can stop here.*/
/*If you want to show it multiple times you'll want to remove the class show when it's not intersecting :
else{
    {entry.target.classList.remove('show');
}*/

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
/*In vanilla JS we give each element a special class, in this example it's called visually-hidden, and grab all the elements that have that class using:
~document.querySelectorAll();~*/
const hiddenElements = document.querySelectorAll('.visually-hidden');
/*Once you have your observer, you need to tell it what to observe - in this example we can loop over all of the visually-hidden elements and tell the observer to observe each one of them: 
~hiddenElements.forEach((el) => observer.observe(el));*/
hiddenElements.forEach((el) => observer.observe(el));