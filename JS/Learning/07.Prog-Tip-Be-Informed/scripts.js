/* PROGRAMMING TIP
 * The "BE INFORMED" principle
 * Always look if a native function
 * exists before building your own
 * logic ;-)
------------------------------------*/
function dayOfTheWeek(locales = 'en-US') {

  
  let day = '';


  // VARIANTE 1 - Manual days, one language. The first day must be Sunday
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  day = weekDays[ new Date().getDay() ]; //getDay() returns a number: 0 for Sunday, 1 for Monday, etc.
  

  // VARIANTE 2 - Using Date locales, provided days, any language
  day = new Date().toLocaleDateString( locales, { weekday: 'long' } );


  // OUTPUT DAY
  show( locales, day );


}

dayOfTheWeek(); //ouputs the default 'en-US'
/* dayOfTheWeek('ar-EG');
dayOfTheWeek('fr-CH');
dayOfTheWeek('de-DE');
dayOfTheWeek('it-IT');
 */
d = new Date();
show(d.toLocaleDateString());