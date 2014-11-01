var CELL_SIZE = 15;
var HALF_CELL_SIZE = Math.floor(CELL_SIZE/2);
var CELL_MARGIN = 2;
var CELL_ROWS = 81;
var CELL_COLS = 81;
var CANVAS_HORZ_SIZE = CELL_SIZE*CELL_ROWS+1;
var CANVAS_VERT_SIZE = CELL_SIZE*CELL_COLS+1;
var canvas = Raphael(0,0,CANVAS_HORZ_SIZE,CANVAS_VERT_SIZE);

var COLORS = { 'Liberia':'#008080' , 'Sierra Leone':'#00C040' , 'Guinea':'#808000' , 'Uganda':'#808080' , 'Congo':'#C04000' , 'Gabon':'#000080' , 'Zaire':'#800080', 'Nigeria':'#008000' , 'Sudan':'#800000', 'Other':'#4000C0' };

/* converts a number for the row or column of a cell (from 0 to CELL_ROWS or CELL_COLS) to a pixel quantity */
function convertToScale(num){
  return CELL_SIZE*num+HALF_CELL_SIZE;
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
