export enum eDeviceTypes {
  DESKTOP = 'Desktop',
  MOBILE = 'Mobile',
  TABLET = 'Tablet',
  CUSTOM = 'Custom',
}
export enum eDeviceSize {
  DESKTOP = '100vw',
  TABLET = '850px',
  MOBILE = '420px',
}
export enum eEditorBtns {
  TEXT = 'text',
  CONTAINER = 'container',
  SECTION = 'section',
  LINK = 'link',
  TWO_COL = '2Col',
  VIDEO = 'video',
  BODY = '__body',
  IMAGE = 'image',
  NULL = 'null',
  THREE_COL = '3Col',
}
export enum eComponentsGroup {
  LAYOUT = 'layout',
  ELEMENTS = 'elements',
}
export enum eSideBarTabs {
  STYLINGS = 'Stylings',
  COMPONENTS = 'Components',
  LAYERS = 'Layers',
  MEDIA = 'Media',
  SETTINGS = 'Settings',
}

// Editor CSS
export enum eBoxSizing {
  ContentBox = 'content-box',
  BorderBox = 'border-box',
}

export enum eOverflow {
  Visible = 'visible',
  Hidden = 'hidden',
  Scroll = 'scroll',
  Auto = 'auto',
}

export enum eVisibility {
  Visible = 'visible',
  Hidden = 'hidden',
  Collapse = 'collapse',
}
export enum eDisplay {
  Flex = 'flex',
  InlineFlex = 'inline-flex',
  Grid = 'grid',
  InlineGrid = 'inline-grid',
}
export enum ePosition {
  Static = 'static',
  Relative = 'relative',
  Absolute = 'absolute',
  Fixed = 'fixed',
  Sticky = 'sticky',
}
export enum eFloat {
  Left = 'left',
  Right = 'right',
  None = 'none',
}
export enum eClear {
  None = 'none',
  Left = 'left',
  Right = 'right',
  Both = 'both',
}
export enum eFontWeight {
  Normal = 'normal',
  Bold = 'bold',
  Bolder = 'bolder',
  Lighter = 'lighter',
  Thin = '100',
  ExtraLight = '200',
  Light = '300',
  Regular = '400',
  Medium = '500',
  SemiBold = '600',
  ExtraBold = '800',
  Black = '900',
}
export enum eFontStyle {
  Normal = 'normal',
  Italic = 'italic',
  Oblique = 'oblique',
}
export enum eFontVariant {
  Normal = 'normal',
  SmallCaps = 'small-caps',
}
export enum eTextAlign {
  Left = 'left',
  Right = 'right',
  Center = 'center',
  Justify = 'justify',
}
export enum eTextDecoration {
  None = 'none',
  Underline = 'underline',
  Overline = 'overline',
  LineThrough = 'line-through',
  Blink = 'blink',
  Wavy = 'wavy',
}
export enum eTextTransform {
  None = 'none',
  Capitalize = 'capitalize',
  Uppercase = 'uppercase',
  Lowercase = 'lowercase',
}
export enum eWhiteSpace {
  Normal = 'normal',
  NoWrap = 'nowrap',
  Pre = 'pre',
  PreWrap = 'pre-wrap',
  PreLine = 'pre-line',
}
export enum eWritingMode {
  HorizontalTb = 'horizontal-tb',
  VerticalRl = 'vertical-rl',
  VerticalLr = 'vertical-lr',
}
export enum eDirection {
  Ltr = 'ltr',
  Rtl = 'rtl',
}
export enum eUnicodeBidi {
  Normal = 'normal',
  Embed = 'embed',
  BidiOverride = 'bidi-override',
  Isolate = 'isolate',
  IsolateOverride = 'isolate-override',
  Plaintext = 'plaintext',
}
export enum eBackgroundRepeat {
  Repeat = 'repeat',
  RepeatX = 'repeat-x',
  RepeatY = 'repeat-y',
  NoRepeat = 'no-repeat',
}
export enum eBackgroundAttachment {
  Scroll = 'scroll',
  Fixed = 'fixed',
  Local = 'local',
}
export enum eBackgroundOrigin {
  PaddingBox = 'padding-box',
  BorderBox = 'border-box',
  ContentBox = 'content-box',
}
export enum eBackgroundClip {
  BorderBox = 'border-box',
  PaddingBox = 'padding-box',
  ContentBox = 'content-box',
}
export enum eBackgroundBlendMode {
  Normal = 'normal',
  Multiply = 'multiply',
  Screen = 'screen',
  Overlay = 'overlay',
  Darken = 'darken',
  Lighten = 'lighten',
  ColorDodge = 'color-dodge',
  ColorBurn = 'color-burn',
  HardLight = 'hard-light',
  SoftLight = 'soft-light',
  Difference = 'difference',
  Exclusion = 'exclusion',
  Hue = 'hue',
  Saturation = 'saturation',
  Color = 'color',
  Luminosity = 'luminosity',
}
export enum eFlexDirection {
  Row = 'row',
  RowReverse = 'row-reverse',
  Column = 'column',
  ColumnReverse = 'column-reverse',
}
export enum eFlexWrap {
  NoWrap = 'nowrap',
  Wrap = 'wrap',
  WrapReverse = 'wrap-reverse',
}
export enum eJustifyContent {
  FlexStart = 'flex-start',
  FlexEnd = 'flex-end',
  Center = 'center',
  SpaceBetween = 'space-between',
  SpaceAround = 'space-around',
  SpaceEvenly = 'space-evenly',
}
export enum eAlignItems {
  Stretch = 'stretch',
  FlexStart = 'flex-start',
  FlexEnd = 'flex-end',
  Center = 'center',
  Baseline = 'baseline',
}
export enum eAlignContent {
  Stretch = 'stretch',
  FlexStart = 'flex-start',
  FlexEnd = 'flex-end',
  Center = 'center',
  SpaceBetween = 'space-between',
  SpaceAround = 'space-around',
}
export enum eAlignSelf {
  Auto = 'auto',
  FlexStart = 'flex-start',
  FlexEnd = 'flex-end',
  Center = 'center',
  Baseline = 'baseline',
  Stretch = 'stretch',
}
export enum eGridAutoFlow {
  Row = 'row',
  Column = 'column',
  RowDense = 'row dense',
  ColumnDense = 'column dense',
}
export enum ePlaceContent {
  Auto = 'auto',
  Start = 'start',
  End = 'end',
  Center = 'center',
  Stretch = 'stretch',
}
export enum ePlaceItems {
  Auto = 'auto',
  Start = 'start',
  End = 'end',
  Center = 'center',
  Stretch = 'stretch',
}
export enum ePlaceSelf {
  Auto = 'auto',
  Start = 'start',
  End = 'end',
  Center = 'center',
  Stretch = 'stretch',
}
export enum eAnimationTimingFunction {
  Ease = 'ease',
  EaseIn = 'ease-in',
  EaseOut = 'ease-out',
  EaseInOut = 'ease-in-out',
  Linear = 'linear',
  StepStart = 'step-start',
  StepEnd = 'step-end',
}
export enum eAnimationIterationCount {
  Infinite = 'infinite',
  Initial = 'initial',
  Inherit = 'inherit',
}
export enum eAnimationDirection {
  Normal = 'normal',
  Reverse = 'reverse',
  Alternate = 'alternate',
  AlternateReverse = 'alternate-reverse',
}
export enum eAnimationFillMode {
  None = 'none',
  Forwards = 'forwards',
  Backwards = 'backwards',
  Both = 'both',
}
export enum eAnimationPlayState {
  Running = 'running',
  Paused = 'paused',
}
export enum eTransitionTimingFunction {
  Ease = 'ease',
  EaseIn = 'ease-in',
  EaseOut = 'ease-out',
  EaseInOut = 'ease-in-out',
  Linear = 'linear',
  StepStart = 'step-start',
  StepEnd = 'step-end',
}
export enum eUserSelect {
  None = 'none',
  Auto = 'auto',
  Text = 'text',
  All = 'all',
}
export enum eCursor {
  Auto = 'auto',
  Default = 'default',
  Pointer = 'pointer',
  Crosshair = 'crosshair',
  Move = 'move',
  EResize = 'e-resize',
  NeResize = 'ne-resize',
  NwResize = 'nw-resize',
  NResize = 'n-resize',
  SeResize = 'se-resize',
  SwResize = 'sw-resize',
  SResize = 's-resize',
  WResize = 'w-resize',
  Text = 'text',
  Wait = 'wait',
  Help = 'help',
  Progress = 'progress',
}
export enum eBoxShadow {
  None = 'none',
}
export enum eOutlineStyle {
  None = 'none',
  Solid = 'solid',
  Dotted = 'dotted',
  Dashed = 'dashed',
  Double = 'double',
  Groove = 'groove',
  Ridge = 'ridge',
  Inset = 'inset',
  Outset = 'outset',
}
export enum eBorderCollapse {
  Collapse = 'collapse',
  Separate = 'separate',
}
export enum eEmptyCells {
  Show = 'show',
  Hide = 'hide',
}
export enum eCaptionSide {
  Top = 'top',
  Bottom = 'bottom',
}
export enum eResize {
  None = 'none',
  Both = 'both',
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}
export enum eFilter {
  Opacity = 'opacity',
  Blur = 'blur',
  Brightness = 'brightness',
  Contrast = 'contrast',
  Grayscale = 'grayscale',
  Invert = 'invert',
  Saturate = 'saturate',
  Sepia = 'sepia',
  DropShadow = 'drop-shadow',
}

// Interfaces for CSS properties
export interface IBoxModel {
  margin?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  padding?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  border?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
  boxSizing?: eBoxSizing;
  overflow?: eOverflow;
}
export interface IPositioning {
  position?: ePosition;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  float?: eFloat;
  clear?: eClear;
  zIndex?: string;
}

export interface ITypography {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: eFontWeight;
  fontStyle?: eFontStyle;
  fontVariant?: eFontVariant;
  lineHeight?: string;
  letterSpacing?: string;
  textAlign?: eTextAlign;
  textDecoration?: eTextDecoration;
  textTransform?: eTextTransform;
  whiteSpace?: eWhiteSpace;
  wordSpacing?: string;
  textIndent?: string;
  direction?: eDirection;
  unicodeBidi?: eUnicodeBidi;
  writingMode?: eWritingMode;
}

export interface IBackground {
  background?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundRepeat?: eBackgroundRepeat;
  backgroundAttachment?: eBackgroundAttachment;
  backgroundPosition?: string;
  backgroundSize?: string;
  backgroundOrigin?: eBackgroundOrigin;
  backgroundClip?: eBackgroundClip;
  backgroundBlendMode?: eBackgroundBlendMode;
}

export interface IFlexbox {
  display?: eDisplay;
  flexDirection?: eFlexDirection;
  flexWrap?: eFlexWrap;
  flexFlow?: string;
  justifyContent?: eJustifyContent;
  alignItems?: eAlignItems;
  alignContent?: eAlignContent;
  alignSelf?: eAlignSelf;
}

export interface IGrid {
  display?: eDisplay;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridTemplateAreas?: string;
  gridColumn?: string;
  gridColumnStart?: string;
  gridColumnEnd?: string;
  gridRow?: string;
  gridRowStart?: string;
  gridRowEnd?: string;
  gridAutoColumns?: string;
  gridAutoRows?: string;
  gridAutoFlow?: eGridAutoFlow;
  placeContent?: ePlaceContent;
  placeItems?: ePlaceItems;
  placeSelf?: ePlaceSelf;
}

export interface IAnimations {
  animation?: string;
  animationName?: string;
  animationDuration?: string;
  animationTimingFunction?: eAnimationTimingFunction;
  animationDelay?: string;
  animationIterationCount?: eAnimationIterationCount;
  animationDirection?: eAnimationDirection;
  animationFillMode?: eAnimationFillMode;
  animationPlayState?: eAnimationPlayState;
}

export interface ITransitions {
  transition?: string;
  transitionProperty?: string;
  transitionDuration?: string;
  transitionTimingFunction?: eTransitionTimingFunction;
  transitionDelay?: string;
}

export interface IFilters {
  filter?: eFilter;
  opacity?: string;
  blur?: string;
  brightness?: string;
  contrast?: string;
  grayscale?: string;
  invert?: string;
  saturate?: string;
  sepia?: string;
  dropShadow?: string;
}

export interface IBorders {
  borderRadius?: string;
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
  borderBottomLeftRadius?: string;
  borderBottomRightRadius?: string;
  borderCollapse?: eBorderCollapse;
  borderSpacing?: string;
}

export interface ILists {
  listStyleType?: string;
  listStylePosition?: string;
  listStyleImage?: string;
}

export interface ITables {
  tableLayout?: string;
  emptyCells?: eEmptyCells;
  captionSide?: eCaptionSide;
}

export interface ITransforms {
  transform?: string;
  transformOrigin?: string;
  transformStyle?: string;
  perspective?: string;
  perspectiveOrigin?: string;
  backfaceVisibility?: string;
}

export interface IMiscellaneous {
  visibility?: eVisibility;
  cursor?: eCursor;
  content?: string;
  quotes?: string;
  counterReset?: string;
  counterIncrement?: string;
  resize?: eResize;
  userSelect?: eUserSelect;
  boxShadow?: eBoxShadow;
  textShadow?: string;
  outline?: string;
  outlineWidth?: string;
  outlineStyle?: eOutlineStyle;
  outlineColor?: string;
  outlineOffset?: string;
}

// Complete interface combining all groups
export interface ICSSProperties
  extends IBoxModel,
    IPositioning,
    ITypography,
    IBackground,
    IFlexbox,
    IGrid,
    IAnimations,
    ITransitions,
    IFilters,
    IBorders,
    ILists,
    ITables,
    ITransforms,
    IMiscellaneous {}
