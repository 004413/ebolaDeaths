var CELL_SIZE = 15;
var HALF_CELL_SIZE = Math.floor(CELL_SIZE/2);
var CELL_MARGIN = 2;
var CELL_ROWS = 81;
var CELL_COLS = 81;
var START_MARGIN = 8;
var BOTTOM_MARGIN = 44;
var CANVAS_HORZ_SIZE = START_MARGIN+CELL_SIZE*CELL_ROWS+1;
var CANVAS_VERT_SIZE = START_MARGIN+CELL_SIZE*CELL_COLS+1+BOTTOM_MARGIN;
var canvas = Raphael(0,0,CANVAS_HORZ_SIZE,CANVAS_VERT_SIZE);

var COLORS = { 'Liberia':'#00C0C0' , 'Sierra Leone':'#00C040' , 'Guinea':'#A0A000' , 'Uganda':'#C00000' , 'Congo':'#F0A000' , 'Gabon':'#000080' , 'Zaire':'#C000C0', 'Nigeria':'#008000' , 'Sudan':'#8080F0', 'Other':'#808080' };

var COLOR_DIM = { '#':'#' , 'F':'7', 'E':'7' , 'D':'6' , 'C':'6' , 'B':'5' , 'A':'5' , '9':'4' , '8':'4' , '7':'3' , '6':'3' , '5':'2' , '4':'2' , '3':'1' , '2':'1' , '1':'0' , '0':'0' };

/* given hex for color, get color of similar hue but approximately half luminosity */
function getDimmedColor(color){
  var newColor = '';
  for(var i=0;i<color.length;i++){
    newColor += COLOR_DIM[color[i]];
  }
  return newColor;
}

/* produces string to represent a line from (x1,y1) to (x2,y2) */
function parseLine(x1,y1,x2,y2){
  var lineString = "m";
  lineString += x1;
  lineString += ",";
  lineString += y1;
  lineString += "l";
  lineString += x2-x1;
  lineString += ",";
  lineString += y2-y1;
  return lineString;
}

/* converts a number for the row or column of a cell (from 0 to CELL_ROWS or CELL_COLS) to a pixel quantity */
function convertToScale(num){
  return CELL_SIZE*num+HALF_CELL_SIZE+START_MARGIN;
}

/* draws a cell */
function drawCell(col,row,color){
  var circle = canvas.circle(convertToScale(col),convertToScale(row),(CELL_SIZE-2*CELL_MARGIN-1)/2).attr({'fill':color});
}

/* Zaire 1976 */
for(var c=0;c<5;c++){
  for(var r=0;r<56;r++){
    drawCell(c,r,COLORS['Zaire']);
  }
}

/* Sudan 1976 */
for(var c=0;c<6;c++){
  for(var r=56;r<81;r++){
    drawCell(c,r,COLORS['Sudan']);
  }
}
drawCell(5,55,COLORS['Sudan']);

/* Zaire 1977 */
drawCell(5,54,COLORS['Zaire']);

/* Sudan 1979 */
for(var r=32;r<54;r++){
  drawCell(5,r,COLORS['Sudan']);
}

/* Gabon 1994 */
for(var r=1;r<32;r++){
  drawCell(5,r,COLORS['Gabon']);
}

/* Zaire 1995 */
drawCell(5,0,COLORS['Zaire']);
for(var c=6;c<9;c++){
  for(var r=0;r<81;r++){
    drawCell(c,r,COLORS['Zaire']);
  }
}
for(var c=9;c<11;c++){
  for(var r=0;r<5;r++){
    drawCell(c,r,COLORS['Zaire']);
  }
}

/* Gabon 1996 */
for(var r=5;r<26;r++){
  drawCell(9,r,COLORS['Gabon']);
}

/* Gabon 1996-1997 */
for(var r=5;r<26;r++){
  drawCell(10,r,COLORS['Gabon']);
}
for(var c=9;c<11;c++){
  for(var r=26;r<38;r++){
    drawCell(c,r,COLORS['Gabon']);
  }
}

/* South Africa 1996 */
drawCell(9,38,COLORS['Other']);

/* Russia 1996 */
drawCell(10,38,COLORS['Other']);

/* Uganda 2000-2001 */
for(var c=9;c<11;c++){
  for(var r=39;r<81;r++){
    drawCell(c,r,COLORS['Uganda']);
  }
}
for(var c=11;c<13;c++){
  for(var r=11;r<81;r++){
    drawCell(c,r,COLORS['Uganda']);
  }
}

/* Gabon and Rep. of Congo 2001-2002 */
for(var c=11;c<15;c++){
  for(var r=0;r<11;r++){
    drawCell(c,r,COLORS['Congo']);
  }
}
for(var c=13;c<15;c++){
  for(var r=11;r<37;r++){
    drawCell(c,r,COLORS['Congo']);
  }
}

/* Rep. of Congo 2002-2003 */
for(var c=13;c<15;c++){
  for(var r=37;r<81;r++){
    drawCell(c,r,COLORS['Congo']);
  }
}
for(var r=41;r<81;r++){
  drawCell(15,r,COLORS['Congo']);
}

/* Rep. of Congo 2003 */
for(var r=12;r<41;r++){
  drawCell(15,r,COLORS['Congo']);
}

/* Sudan 2004 */
for(var r=5;r<12;r++){
  drawCell(15,r,COLORS['Sudan']);
}

/* Russia 2004 */
drawCell(15,4,COLORS['Other']);

/* DRC 2007 */
for(var r=0;r<4;r++){
  drawCell(15,r,COLORS['Zaire']);
}
for(var c=16;c<19;c++){
  for(var r=0;r<61;r++){
    drawCell(c,r,COLORS['Zaire']);
  }
}

/* Uganda 2007-2008 */
for(var c=16;c<19;c++){
  for(var r=61;r<73;r++){
    drawCell(c,r,COLORS['Uganda']);
  }
}
for(var c=16;c<18;c++){
  drawCell(c,73,COLORS['Uganda']);
}

/* DRC 2008-2009 */
drawCell(18,73,COLORS['Zaire']);
for(var c=16;c<19;c++){
  for(var r=74;r<78;r++){
    drawCell(c,r,COLORS['Zaire']);
  }
}
drawCell(16,78,COLORS['Zaire']);

/* Uganda 2012 */
for(var c=17;c<22;c++){
  drawCell(c,78,COLORS['Uganda']);
}
for(var c=16;c<22;c++){
  for(var r=79;r<81;r++){
    drawCell(c,r,COLORS['Uganda']);
  }
}

/* DRC 2012 */
for(var c=19;c<22;c++){
  for(var r=66;r<78;r++){
    drawCell(c,r,COLORS['Zaire']);
  }
}

/* DRC 2014 */
for(var c=22;c<64;c++){
  drawCell(c,80,COLORS['Zaire']);
}

/* 2014 epidemic in Guinea */
for(var c=19;c<81;c++){
  for(var r=0;r<16;r++){
    drawCell(c,r,COLORS['Guinea']);
  }
}
for(var c=19;c<45;c++){
  drawCell(c,16,COLORS['Guinea']);
}

/* 2014 epidemic in Mali */
drawCell(45,16,COLORS['Other']);

/* 2014 epidemic in Nigeria */
for(var c=46;c<54;c++){
  drawCell(c,16,COLORS['Nigeria']);
}

/* 2014 epidemic in USA */
drawCell(54,16,COLORS['Other']);

/* 2014 epidemic in Sierra Leone */
for(var c=55;c<77;c++){
  drawCell(c,16,COLORS['Sierra Leone']);
}
for(var c=19;c<81;c++){
  for(var r=17;r<41;r++){
    drawCell(c,r,COLORS['Sierra Leone']);
  }
}

/* 2014 epidemic in Liberia */
for(var c=19;c<81;c++){
  for(var r=41;r<66;r++){
    drawCell(c,r,COLORS['Liberia']);
  }
}
for(var c=22;c<81;c++){
  for(var r=66;r<80;r++){
    drawCell(c,r,COLORS['Liberia']);
  }
}
for(var c=64;c<81;c++){
  drawCell(c,r,COLORS['Liberia']);
}

var sudanText = canvas.text(convertToScale(2),convertToScale(81.5),'Sudan').attr({'font-family':'Ubuntu'}).attr({'fill':COLORS['Sudan']}).attr({'font-size':'15px'}).attr({'font-weight':'bold'});
var drcText = canvas.text(convertToScale(11),convertToScale(81.5),'Zaire/Dem. Rep. of Congo').attr({'font-family':'Ubuntu'}).attr({'fill':COLORS['Zaire']}).attr({'font-size':'15px'}).attr({'font-weight':'bold'});
var gabonText = canvas.text(convertToScale(20),convertToScale(81.5),'Gabon').attr({'font-family':'Ubuntu'}).attr({'fill':COLORS['Gabon']}).attr({'font-size':'15px'}).attr({'font-weight':'bold'});
var ugandaText = canvas.text(convertToScale(25),convertToScale(81.5),'Uganda').attr({'font-family':'Ubuntu'}).attr({'fill':COLORS['Uganda']}).attr({'font-size':'15px'}).attr({'font-weight':'bold'});
var repCongoText = canvas.text(convertToScale(32),convertToScale(81.5),'Rep. of Congo').attr({'font-family':'Ubuntu'}).attr({'fill':COLORS['Congo']}).attr({'font-size':'15px'}).attr({'font-weight':'bold'});
var guineaText = canvas.text(convertToScale(39),convertToScale(81.5),'Guinea').attr({'font-family':'Ubuntu'}).attr({'fill':COLORS['Guinea']}).attr({'font-size':'15px'}).attr({'font-weight':'bold'});
var sierraLeoneText = canvas.text(convertToScale(45),convertToScale(81.5),'Sierra Leone').attr({'font-family':'Ubuntu'}).attr({'fill':COLORS['Sierra Leone']}).attr({'font-size':'15px'}).attr({'font-weight':'bold'});
var liberiaText = canvas.text(convertToScale(51),convertToScale(81.5),'Liberia').attr({'font-family':'Ubuntu'}).attr({'fill':COLORS['Liberia']}).attr({'font-size':'15px'}).attr({'font-weight':'bold'});
var nigeriaText = canvas.text(convertToScale(56),convertToScale(81.5),'Nigeria').attr({'font-family':'Ubuntu'}).attr({'fill':COLORS['Nigeria']}).attr({'font-size':'15px'}).attr({'font-weight':'bold'});
var otherText = canvas.text(convertToScale(61),convertToScale(81.5),'Other').attr({'font-family':'Ubuntu'}).attr({'fill':COLORS['Other']}).attr({'font-size':'15px'}).attr({'font-weight':'bold'});

var divide1 = canvas.path(parseLine(convertToScale(18.5),START_MARGIN/2,convertToScale(18.5),convertToScale(65.5))).attr({'stroke-width':2}).attr({'stroke-dasharray':'-'});
var divide2 = canvas.path(parseLine(convertToScale(18.5),convertToScale(65.5),convertToScale(21.5),convertToScale(65.5))).attr({'stroke-width':2}).attr({'stroke-dasharray':'-'});
var divide3 = canvas.path(parseLine(convertToScale(21.5),convertToScale(65.5),convertToScale(21.5),convertToScale(79.5))).attr({'stroke-width':2}).attr({'stroke-dasharray':'-'});
var divide4 = canvas.path(parseLine(convertToScale(21.5),convertToScale(79.5),convertToScale(63.5),convertToScale(79.5))).attr({'stroke-width':2}).attr({'stroke-dasharray':'-'});
var divide5 = canvas.path(parseLine(convertToScale(63.5),convertToScale(79.5),convertToScale(63.5),CANVAS_VERT_SIZE-2*START_MARGIN)).attr({'stroke-width':2}).attr({'stroke-dasharray':'-'});

var westAfricanEpidemicText = canvas.text(convertToScale(0.5),CANVAS_VERT_SIZE-START_MARGIN,"Deaths in the 21 previous outbreaks of ebola are to the left of the dashed line; deaths for the West African outbreak are to the right, a number that continues to grow.").attr({'font-family':'Ubuntu'}).attr({'text-anchor':'start'}).attr({'font-size':'12px'});
