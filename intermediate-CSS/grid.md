Grid and Flex both use parent contianers with child items.
Similar property names for alignment and positioning. 

Creating a grid:
- Make a grid container
- Define grid tracks
- Explain the difference between an implicit and explicit grid
- Set gaps between grid cells
    CSS Grid you don't have to assign each child element a property
    Only DIRECT CHILDREN will become grid items
    Grid items can ALSO be GRID CONTAINERS
Column and Rows define grid track (space between lines on a grid)
    properties 'grid-template-columns' and 'grid-template-rows' define these tracks
    can shorten with 'grid-template' property.
    all grids don't need to be same size
Explicit vs Implicit grid
    Fifth item placed on the grid, slotted into a third row we did not define, cuz of implicit grid
    When we use ```grid-template-columns```, and ```grid-template-rows``` properties, defining grid tracks to lay out our grid items
    Size values from ```grid-template-columns``` and ```grid-template``` rows properties ar enot carried over
    Can set implicit grid track sizes using ```grid-auto-rows``` and ```grid-auto-columns``` properties
Gap
    gap between grid rows and columns is called gutter or alley
    can be adjusted using gap to set both row-gap and column-gap
    can also use shorthand gap

Positioning Grid Elements:
Tracks are the sections between the grid lines. Horizontal and Vertical tracks

Lines:
- grid lines are created implicitly
- Every track has start line and end line, left to right and top to bottom starting at 1
- Cell shared by a single row track and column track like excel
- grid-column-start and grid-column-end to position
- grid-column, and grid-row are shorthand for grid-column-start, grid-column-end

- Grid Area
    - grid-area is a short hand for grid-row-start / grid-column-start/ grid-row-end / grid-column-end 
    - it can also refer to visual layout of grid in words. first give each item on grid a name