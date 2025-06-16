export const
  SHAPE_SQUARE = 'square',
  SHAPE_TRIANGLE = 'triangle',
  SHAPE_HEXAGON = 'hexagon',
  SHAPE_CIRCLE = 'circle',

  ALGORITHM_NONE = 'none',
  ALGORITHM_BINARY_TREE = 'binaryTree',
  ALGORITHM_SIDEWINDER = 'sidewinder',
  ALGORITHM_ALDOUS_BRODER = 'aldousBroder',
  ALGORITHM_WILSON = 'wilson',
  ALGORITHM_HUNT_AND_KILL = 'huntAndKill',
  ALGORITHM_RECURSIVE_BACKTRACK = 'recursiveBacktrack',
  ALGORITHM_KRUSKAL = 'kruskal',
  ALGORITHM_SIMPLIFIED_PRIMS = 'simplifiedPrims',
  ALGORITHM_TRUE_PRIMS = 'truePrims',
  ALGORITHM_ELLERS = 'ellers',

  DIRECTION_NORTH = 'n',
  DIRECTION_SOUTH = 's',
  DIRECTION_EAST = 'e',
  DIRECTION_WEST = 'w',
  DIRECTION_NORTH_WEST = 'nw',
  DIRECTION_NORTH_EAST = 'ne',
  DIRECTION_SOUTH_WEST = 'sw',
  DIRECTION_SOUTH_EAST = 'se',
  DIRECTION_CLOCKWISE = 'cw',
  DIRECTION_ANTICLOCKWISE = 'acw',
  DIRECTION_INWARDS = 'in',
  DIRECTION_OUTWARDS = 'out',

  EVENT_CLICK = 'click',
  EVENT_MOUSE_OVER = 'mouseOver',

  METADATA_VISITED = 'visited',
  METADATA_SET_ID = 'setId',
  METADATA_MAX_DISTANCE = 'maxDistance',
  METADATA_DISTANCE = 'distance',
  METADATA_PATH = 'path',
  METADATA_MASKED = 'masked',
  METADATA_CURRENT_CELL = 'current',
  METADATA_UNPROCESSED_CELL = 'unprocessed',
  METADATA_START_CELL = 'startCell',
  METADATA_END_CELL = 'endCell',
  METADATA_COST = 'cost',
  METADATA_PLAYER_CURRENT = 'playerCurrent',
  METADATA_PLAYER_VISITED = 'playerVisited',
  METADATA_RAW_COORDS = 'rawCoords',

  EXITS_NONE = 'no exits',
  EXITS_HARDEST = 'hardest',
  EXITS_HORIZONTAL = 'horizontal',
  EXITS_VERTICAL = 'vertical',

  PATH_COLOUR = '#006BB7',
  CELL_BACKGROUND_COLOUR = 'white',
  CELL_MASKED_COLOUR = 'grey',
  CELL_UNPROCESSED_CELL_COLOUR = '#bbb',
  CELL_PLAYER_CURRENT_COLOUR = PATH_COLOUR,
  CELL_PLAYER_VISITED_COLOUR = PATH_COLOUR + '44',
  CELL_CURRENT_CELL_COLOUR = PATH_COLOUR,
  WALL_COLOUR = 'black'

export type CircleGrid = typeof SHAPE_CIRCLE
export type SquareGrid = typeof SHAPE_SQUARE
export type TriangleGrid = typeof SHAPE_TRIANGLE
export type HexagonGrid = typeof SHAPE_HEXAGON
export type GridType = SquareGrid | TriangleGrid | HexagonGrid | CircleGrid

export type Algorithm = typeof ALGORITHM_NONE |
  typeof ALGORITHM_BINARY_TREE |
  typeof ALGORITHM_SIDEWINDER |
  typeof ALGORITHM_ALDOUS_BRODER |
  typeof ALGORITHM_WILSON |
  typeof ALGORITHM_HUNT_AND_KILL |
  typeof ALGORITHM_RECURSIVE_BACKTRACK |
  typeof ALGORITHM_KRUSKAL |
  typeof ALGORITHM_SIMPLIFIED_PRIMS |
  typeof ALGORITHM_TRUE_PRIMS |
  typeof ALGORITHM_ELLERS;

export type Direction = typeof DIRECTION_NORTH |
  typeof DIRECTION_SOUTH |
  typeof DIRECTION_EAST |
  typeof DIRECTION_WEST |
  typeof DIRECTION_NORTH_WEST |
  typeof DIRECTION_NORTH_EAST |
  typeof DIRECTION_SOUTH_WEST |
  typeof DIRECTION_SOUTH_EAST |
  typeof DIRECTION_CLOCKWISE |
  typeof DIRECTION_ANTICLOCKWISE |
  typeof DIRECTION_INWARDS |
  typeof DIRECTION_OUTWARDS

export type MazeEvent = typeof EVENT_CLICK | typeof EVENT_MOUSE_OVER

export type ExitConfig = typeof EXITS_NONE | typeof EXITS_HARDEST | typeof EXITS_HORIZONTAL | typeof EXITS_VERTICAL

export type MetadataKey = typeof METADATA_VISITED |
  typeof METADATA_SET_ID |
  typeof METADATA_MAX_DISTANCE |
  typeof METADATA_DISTANCE |
  typeof METADATA_PATH |
  typeof METADATA_MASKED |
  typeof METADATA_CURRENT_CELL |
  typeof METADATA_UNPROCESSED_CELL |
  typeof METADATA_START_CELL |
  typeof METADATA_END_CELL |
  typeof METADATA_COST |
  typeof METADATA_PLAYER_CURRENT |
  typeof METADATA_PLAYER_VISITED |
  typeof METADATA_RAW_COORDS
