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
