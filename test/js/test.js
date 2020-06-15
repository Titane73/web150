function d(){
  var a = document.form1.miles.value;
  var b = document.form1.gas.value;
  var c = document.form1.days.value;
  var cost = document.form1.cost.value;
  mpg=a/b;
  gpd=b/c;
  mpg= Math.round(mpg*10)/10;
  gpy=gpd*365;
  co=gpy*19.36;
  cpy=gpy*cost;
  gpd= Math.round(gpd*1000)/1000;
  gpy= Math.round(gpy*10)/10;
  cpy= Math.round(cpy*100)/100;
  co= Math.round(co);
  document.form1.results.value='Your car is getting '+mpg+' miles per gallon. On the average you use '+gpd+' gallons per day. At that rate of consumption you will burn '+gpy+' gallons per year at a cost of $'+cpy+' per year. In addition, that produces '+co+' pounds of CO2 in one year.';
}
