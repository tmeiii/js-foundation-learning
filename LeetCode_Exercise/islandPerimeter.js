// Solution: Loop i and j - Time Complexity: O(row*col)
function islandPerimeter(grid){
    let perimeter = 0;
    
    let row = grid.length;
    let col = grid[0].length;

    for (let i=0; i < row; i++){
        for (let j=0; j < col; j++){

            if (grid[i][j] == 1){
                perimeter += 4;

                if (i>0 && grid[i-1][j] == 1){
                    perimeter -= 2;
                }
                
                if (j>0 && grid[i][j-1] == 1){
                    perimeter -= 2;
                }
                
            }
        }
    }
    return perimeter;
}

