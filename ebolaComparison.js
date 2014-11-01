var comparison = Raphael(0,0,800,800);

var gunMurdersCircle = comparison.circle(600,250,194).attr({'stroke-width':0}).attr({'fill':'#800000'});
var ebolaCircle = comparison.circle(300,500,162).attr({'stroke-width':0}).attr({'fill':'#00E000'});
var gunMurdersText = comparison.text(600,250,'number of people who died in gun murders in the US in the gregorian year 2010').attr({'font-family':'Ubuntu'}).attr({'fill':'#FFFFFF'});
var ebolaCircle = comparison.text(300,500,'number of people who died of ebola in the world, ever').attr({'font-family':'Ubuntu'});
