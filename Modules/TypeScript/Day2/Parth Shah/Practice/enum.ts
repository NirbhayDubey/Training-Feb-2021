//enum practices

/*
There are three types of enums:

Numeric enum
String enum
Heterogeneous enum
*/

enum DaysOfWeek  {
    SUN , MON, TUES, WED , THURS, FRI, SAT 
}
 let day : DaysOfWeek;
  day = DaysOfWeek.SUN;
  if(day == DaysOfWeek.SUN)
  {
      console.log("Sunday is a holiday ");
    
  }
  else 
  {
      console.log("You have to go school ");
  }


  //finding area of circle :

  enum myConstants{
      pi=3.14,
      e=2.7,
      log2=0.3,
      log5=0.5
  }

  console.log('Find area of circle :');
  var radius : number = 10;
  console.log(2* myConstants.pi * radius);
  

  enum color
  {
      red = 21 ,
      green,
      blue
  }
  console.log(color.red);