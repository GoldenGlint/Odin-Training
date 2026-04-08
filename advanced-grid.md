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
- 