Module mainly for responsive dynamic, reusable:
- grid-item, p, img selectors, here to make grid look nicer, straightforward
- grid-container, display: grid. resize: both, this means user can resize container by clicking and dragging from bottom right corner
- overflow: auto, enable scrolling if we resize container to smaller than our grid
- gap and padding to make gutter
- border and background-color make it look nicer

Repeat(): CSS function available to to CSS grid templates define a number of rows or columns and size we want them without manually typing them out. Repeat(# of times, size)

Fractional units (fr): way of distributing whatever eamining space is left in grid. 
- can have multiple repeat statements, and also different 
- can mix and match between statis units like (px) and dynamic units like (fr)
- there is a min-content before the content in a grid starts overflowing, default min-content is largest unbreakable piece of content inside
s
min() and max()
- use these to compare the grid row size
- .grid-container {
  grid-template-rows: repeat(2, min(200px, 50%));
  grid-template-columns: repeat(5, max(120px, 15%));
}
- the percentages represent the graid's total vertical or horizontal space

Next day Dynamic minimum and maximum sizes

minmax() specifically used with grid, only used with following grid qualities:
grid-template-columns
grid-template-rows
grid-auto-columns
grid-auto-rows
Takes in minimum size grid track can be, maximum size the track can be:
grid-template-columns: repeat(5, minmax(150px, 200px));

clamp()
css function that can be used anywhere
clamp(minimum-size, ideal-size, maximum-size), resize itself until it reaches one of the min or max
width: clamp(500px, 80%, 1000px);

auto-fit and auto-fill
part of the repeat() function specification
grid-template-columns: repeat(auto-fit, 200px);
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); means that each is at least 150px wide but rest of the space is filled
auto-fit return highest positive integer without overflowing

auto-fill vs auto-fit
- auto-fit will keep grid items at max size
- auto-fill grid items snap back down to min size once the space is available, even if there is space. 
auto fill don't grow past minimum space. auto-fit fill