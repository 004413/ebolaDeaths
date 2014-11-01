var CELL_SIZE = 15;
var HALF_CELL_SIZE = Math.floor(CELL_SIZE/2);
var CELL_MARGIN = 1;
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
