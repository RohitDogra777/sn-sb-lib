import { h as _objectSpread2, j as _asyncToGenerator, k as _regeneratorRuntime, f as _defineProperty, l as _typeof, m as _toConsumableArray, n as _objectWithoutProperties, _ as _inherits, a as _createClass, o as _get, p as _getPrototypeOf, x, b as _taggedTemplateLiteral, s, c as _classCallCheck, d as _callSuper } from './ColorAliases-BNiWx0rE.js';
import './Text-BT8UX2sj.js';
import './static-8om-tG8X.js';

/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */

var sides = ['top', 'right', 'bottom', 'left'];
var alignments = ['start', 'end'];
var placements = /*#__PURE__*/sides.reduce(function (acc, side) {
  return acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]);
}, []);
var min = Math.min;
var max = Math.max;
var round = Math.round;
var createCoords = function createCoords(v) {
  return {
    x: v,
    y: v
  };
};
var oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
var oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
function getSideAxis(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  var alignment = getAlignment(placement);
  var alignmentAxis = getAlignmentAxis(placement);
  var length = getAxisLength(alignmentAxis);
  var mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, function (alignment) {
    return oppositeAlignmentMap[alignment];
  });
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (side) {
    return oppositeSideMap[side];
  });
}
function expandPaddingObject(padding) {
  return _objectSpread2({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, padding);
}
function getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  var x = rect.x,
    y = rect.y,
    width = rect.width,
    height = rect.height;
  return {
    width: width,
    height: height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x: x,
    y: y
  };
}

var _excluded = ["crossAxis", "alignment", "allowedPlacements", "autoAlignment"],
  _excluded4 = ["mainAxis", "crossAxis", "limiter"];
function computeCoordsFromPlacement(_ref, placement, rtl) {
  var reference = _ref.reference,
    floating = _ref.floating;
  var sideAxis = getSideAxis(placement);
  var alignmentAxis = getAlignmentAxis(placement);
  var alignLength = getAxisLength(alignmentAxis);
  var side = getSide(placement);
  var isVertical = sideAxis === 'y';
  var commonX = reference.x + reference.width / 2 - floating.width / 2;
  var commonY = reference.y + reference.height / 2 - floating.height / 2;
  var commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  var coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
var computePosition$1 = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(reference, floating, config) {
    var _config$placement, placement, _config$strategy, strategy, _config$middleware, middleware, platform, validMiddleware, rtl, rects, _computeCoordsFromPla, x, y, statefulPlacement, middlewareData, resetCount, i, _validMiddleware$i, name, fn, _yield$fn, nextX, nextY, data, reset, _computeCoordsFromPla2;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _config$placement = config.placement, placement = _config$placement === void 0 ? 'bottom' : _config$placement, _config$strategy = config.strategy, strategy = _config$strategy === void 0 ? 'absolute' : _config$strategy, _config$middleware = config.middleware, middleware = _config$middleware === void 0 ? [] : _config$middleware, platform = config.platform;
          validMiddleware = middleware.filter(Boolean);
          _context.next = 4;
          return platform.isRTL == null ? void 0 : platform.isRTL(floating);
        case 4:
          rtl = _context.sent;
          _context.next = 7;
          return platform.getElementRects({
            reference: reference,
            floating: floating,
            strategy: strategy
          });
        case 7:
          rects = _context.sent;
          _computeCoordsFromPla = computeCoordsFromPlacement(rects, placement, rtl), x = _computeCoordsFromPla.x, y = _computeCoordsFromPla.y;
          statefulPlacement = placement;
          middlewareData = {};
          resetCount = 0;
          i = 0;
        case 13:
          if (!(i < validMiddleware.length)) {
            _context.next = 45;
            break;
          }
          _validMiddleware$i = validMiddleware[i], name = _validMiddleware$i.name, fn = _validMiddleware$i.fn;
          _context.next = 17;
          return fn({
            x: x,
            y: y,
            initialPlacement: placement,
            placement: statefulPlacement,
            strategy: strategy,
            middlewareData: middlewareData,
            rects: rects,
            platform: platform,
            elements: {
              reference: reference,
              floating: floating
            }
          });
        case 17:
          _yield$fn = _context.sent;
          nextX = _yield$fn.x;
          nextY = _yield$fn.y;
          data = _yield$fn.data;
          reset = _yield$fn.reset;
          x = nextX != null ? nextX : x;
          y = nextY != null ? nextY : y;
          middlewareData = _objectSpread2(_objectSpread2({}, middlewareData), {}, _defineProperty({}, name, _objectSpread2(_objectSpread2({}, middlewareData[name]), data)));
          if (!(reset && resetCount <= 50)) {
            _context.next = 42;
            break;
          }
          resetCount++;
          if (!(_typeof(reset) === 'object')) {
            _context.next = 41;
            break;
          }
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (!reset.rects) {
            _context.next = 38;
            break;
          }
          if (!(reset.rects === true)) {
            _context.next = 36;
            break;
          }
          _context.next = 33;
          return platform.getElementRects({
            reference: reference,
            floating: floating,
            strategy: strategy
          });
        case 33:
          _context.t0 = _context.sent;
          _context.next = 37;
          break;
        case 36:
          _context.t0 = reset.rects;
        case 37:
          rects = _context.t0;
        case 38:
          _computeCoordsFromPla2 = computeCoordsFromPlacement(rects, statefulPlacement, rtl);
          x = _computeCoordsFromPla2.x;
          y = _computeCoordsFromPla2.y;
        case 41:
          i = -1;
        case 42:
          i++;
          _context.next = 13;
          break;
        case 45:
          return _context.abrupt("return", {
            x: x,
            y: y,
            placement: statefulPlacement,
            strategy: strategy,
            middlewareData: middlewareData
          });
        case 46:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function computePosition(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
function detectOverflow(_x4, _x5) {
  return _detectOverflow.apply(this, arguments);
}
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
function _detectOverflow() {
  _detectOverflow = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(state, options) {
    var _await$platform$isEle, x, y, platform, rects, elements, strategy, _evaluate8, _evaluate8$boundary, boundary, _evaluate8$rootBounda, rootBoundary, _evaluate8$elementCon, elementContext, _evaluate8$altBoundar, altBoundary, _evaluate8$padding, padding, paddingObject, altContext, element, clippingClientRect, rect, offsetParent, offsetScale, elementClientRect;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          if (options === void 0) {
            options = {};
          }
          x = state.x, y = state.y, platform = state.platform, rects = state.rects, elements = state.elements, strategy = state.strategy;
          _evaluate8 = evaluate(options, state), _evaluate8$boundary = _evaluate8.boundary, boundary = _evaluate8$boundary === void 0 ? 'clippingAncestors' : _evaluate8$boundary, _evaluate8$rootBounda = _evaluate8.rootBoundary, rootBoundary = _evaluate8$rootBounda === void 0 ? 'viewport' : _evaluate8$rootBounda, _evaluate8$elementCon = _evaluate8.elementContext, elementContext = _evaluate8$elementCon === void 0 ? 'floating' : _evaluate8$elementCon, _evaluate8$altBoundar = _evaluate8.altBoundary, altBoundary = _evaluate8$altBoundar === void 0 ? false : _evaluate8$altBoundar, _evaluate8$padding = _evaluate8.padding, padding = _evaluate8$padding === void 0 ? 0 : _evaluate8$padding;
          paddingObject = getPaddingObject(padding);
          altContext = elementContext === 'floating' ? 'reference' : 'floating';
          element = elements[altBoundary ? altContext : elementContext];
          _context10.t0 = rectToClientRect;
          _context10.t1 = platform;
          _context10.next = 10;
          return platform.isElement == null ? void 0 : platform.isElement(element);
        case 10:
          _context10.t2 = _await$platform$isEle = _context10.sent;
          if (!(_context10.t2 != null)) {
            _context10.next = 15;
            break;
          }
          _context10.t3 = _await$platform$isEle;
          _context10.next = 16;
          break;
        case 15:
          _context10.t3 = true;
        case 16:
          if (!_context10.t3) {
            _context10.next = 20;
            break;
          }
          _context10.t4 = element;
          _context10.next = 26;
          break;
        case 20:
          _context10.t5 = element.contextElement;
          if (_context10.t5) {
            _context10.next = 25;
            break;
          }
          _context10.next = 24;
          return platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating);
        case 24:
          _context10.t5 = _context10.sent;
        case 25:
          _context10.t4 = _context10.t5;
        case 26:
          _context10.t6 = _context10.t4;
          _context10.t7 = boundary;
          _context10.t8 = rootBoundary;
          _context10.t9 = strategy;
          _context10.t10 = {
            element: _context10.t6,
            boundary: _context10.t7,
            rootBoundary: _context10.t8,
            strategy: _context10.t9
          };
          _context10.next = 33;
          return _context10.t1.getClippingRect.call(_context10.t1, _context10.t10);
        case 33:
          _context10.t11 = _context10.sent;
          clippingClientRect = (0, _context10.t0)(_context10.t11);
          rect = elementContext === 'floating' ? {
            x: x,
            y: y,
            width: rects.floating.width,
            height: rects.floating.height
          } : rects.reference;
          _context10.next = 38;
          return platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating);
        case 38:
          offsetParent = _context10.sent;
          _context10.next = 41;
          return platform.isElement == null ? void 0 : platform.isElement(offsetParent);
        case 41:
          if (!_context10.sent) {
            _context10.next = 50;
            break;
          }
          _context10.next = 44;
          return platform.getScale == null ? void 0 : platform.getScale(offsetParent);
        case 44:
          _context10.t13 = _context10.sent;
          if (_context10.t13) {
            _context10.next = 47;
            break;
          }
          _context10.t13 = {
            x: 1,
            y: 1
          };
        case 47:
          _context10.t12 = _context10.t13;
          _context10.next = 51;
          break;
        case 50:
          _context10.t12 = {
            x: 1,
            y: 1
          };
        case 51:
          offsetScale = _context10.t12;
          _context10.t14 = rectToClientRect;
          if (!platform.convertOffsetParentRelativeRectToViewportRelativeRect) {
            _context10.next = 59;
            break;
          }
          _context10.next = 56;
          return platform.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: elements,
            rect: rect,
            offsetParent: offsetParent,
            strategy: strategy
          });
        case 56:
          _context10.t15 = _context10.sent;
          _context10.next = 60;
          break;
        case 59:
          _context10.t15 = rect;
        case 60:
          _context10.t16 = _context10.t15;
          elementClientRect = (0, _context10.t14)(_context10.t16);
          return _context10.abrupt("return", {
            top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
            bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
            left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
            right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
          });
        case 63:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return _detectOverflow.apply(this, arguments);
}
var arrow$1 = function arrow(options) {
  return {
    name: 'arrow',
    options: options,
    fn: function fn(state) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var x, y, placement, rects, platform, elements, middlewareData, _ref3, element, _ref3$padding, padding, paddingObject, coords, axis, length, arrowDimensions, isYAxis, minProp, maxProp, clientProp, endDiff, startDiff, arrowOffsetParent, clientSize, centerToReference, largestPossiblePadding, minPadding, maxPadding, min$1, max, center, offset, shouldAddOffset, alignmentOffset;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              x = state.x, y = state.y, placement = state.placement, rects = state.rects, platform = state.platform, elements = state.elements, middlewareData = state.middlewareData; // Since `element` is required, we don't Partial<> the type.
              _ref3 = evaluate(options, state) || {}, element = _ref3.element, _ref3$padding = _ref3.padding, padding = _ref3$padding === void 0 ? 0 : _ref3$padding;
              if (!(element == null)) {
                _context2.next = 4;
                break;
              }
              return _context2.abrupt("return", {});
            case 4:
              paddingObject = getPaddingObject(padding);
              coords = {
                x: x,
                y: y
              };
              axis = getAlignmentAxis(placement);
              length = getAxisLength(axis);
              _context2.next = 10;
              return platform.getDimensions(element);
            case 10:
              arrowDimensions = _context2.sent;
              isYAxis = axis === 'y';
              minProp = isYAxis ? 'top' : 'left';
              maxProp = isYAxis ? 'bottom' : 'right';
              clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
              endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
              startDiff = coords[axis] - rects.reference[axis];
              _context2.next = 19;
              return platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element);
            case 19:
              arrowOffsetParent = _context2.sent;
              clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0; // DOM platform can return `window` as the `offsetParent`.
              _context2.t0 = !clientSize;
              if (_context2.t0) {
                _context2.next = 26;
                break;
              }
              _context2.next = 25;
              return platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent);
            case 25:
              _context2.t0 = !_context2.sent;
            case 26:
              if (!_context2.t0) {
                _context2.next = 28;
                break;
              }
              clientSize = elements.floating[clientProp] || rects.floating[length];
            case 28:
              centerToReference = endDiff / 2 - startDiff / 2; // If the padding is large enough that it causes the arrow to no longer be
              // centered, modify the padding so that it is centered.
              largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
              minPadding = min(paddingObject[minProp], largestPossiblePadding);
              maxPadding = min(paddingObject[maxProp], largestPossiblePadding); // Make sure the arrow doesn't overflow the floating element if the center
              // point is outside the floating element's bounds.
              min$1 = minPadding;
              max = clientSize - arrowDimensions[length] - maxPadding;
              center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
              offset = clamp(min$1, center, max); // If the reference is small enough that the arrow's padding causes it to
              // to point to nothing for an aligned placement, adjust the offset of the
              // floating element itself. To ensure `shift()` continues to take action,
              // a single reset is performed when this is true.
              shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
              alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
              return _context2.abrupt("return", _defineProperty(_defineProperty(_defineProperty({}, axis, coords[axis] + alignmentOffset), "data", _objectSpread2(_defineProperty(_defineProperty({}, axis, offset), "centerOffset", center - offset - alignmentOffset), shouldAddOffset && {
                alignmentOffset: alignmentOffset
              })), "reset", shouldAddOffset));
            case 39:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  };
};
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  var allowedPlacementsSortedByAlignment = alignment ? [].concat(_toConsumableArray(allowedPlacements.filter(function (placement) {
    return getAlignment(placement) === alignment;
  })), _toConsumableArray(allowedPlacements.filter(function (placement) {
    return getAlignment(placement) !== alignment;
  }))) : allowedPlacements.filter(function (placement) {
    return getSide(placement) === placement;
  });
  return allowedPlacementsSortedByAlignment.filter(function (placement) {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
var autoPlacement$1 = function autoPlacement(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'autoPlacement',
    options: options,
    fn: function fn(state) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE, rects, middlewareData, placement, platform, elements, _evaluate, _evaluate$crossAxis, crossAxis, alignment, _evaluate$allowedPlac, allowedPlacements, _evaluate$autoAlignme, autoAlignment, detectOverflowOptions, placements$1, overflow, currentIndex, currentPlacement, alignmentSides, currentOverflows, allOverflows, nextPlacement, placementsSortedByMostSpace, placementsThatFitOnEachSide, resetPlacement;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              rects = state.rects, middlewareData = state.middlewareData, placement = state.placement, platform = state.platform, elements = state.elements;
              _evaluate = evaluate(options, state), _evaluate$crossAxis = _evaluate.crossAxis, crossAxis = _evaluate$crossAxis === void 0 ? false : _evaluate$crossAxis, alignment = _evaluate.alignment, _evaluate$allowedPlac = _evaluate.allowedPlacements, allowedPlacements = _evaluate$allowedPlac === void 0 ? placements : _evaluate$allowedPlac, _evaluate$autoAlignme = _evaluate.autoAlignment, autoAlignment = _evaluate$autoAlignme === void 0 ? true : _evaluate$autoAlignme, detectOverflowOptions = _objectWithoutProperties(_evaluate, _excluded);
              placements$1 = alignment !== undefined || allowedPlacements === placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
              _context3.next = 5;
              return detectOverflow(state, detectOverflowOptions);
            case 5:
              overflow = _context3.sent;
              currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
              currentPlacement = placements$1[currentIndex];
              if (!(currentPlacement == null)) {
                _context3.next = 10;
                break;
              }
              return _context3.abrupt("return", {});
            case 10:
              _context3.t0 = getAlignmentSides;
              _context3.t1 = currentPlacement;
              _context3.t2 = rects;
              _context3.next = 15;
              return platform.isRTL == null ? void 0 : platform.isRTL(elements.floating);
            case 15:
              _context3.t3 = _context3.sent;
              alignmentSides = (0, _context3.t0)(_context3.t1, _context3.t2, _context3.t3);
              if (!(placement !== currentPlacement)) {
                _context3.next = 19;
                break;
              }
              return _context3.abrupt("return", {
                reset: {
                  placement: placements$1[0]
                }
              });
            case 19:
              currentOverflows = [overflow[getSide(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
              allOverflows = [].concat(_toConsumableArray(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), [{
                placement: currentPlacement,
                overflows: currentOverflows
              }]);
              nextPlacement = placements$1[currentIndex + 1]; // There are more placements to check.
              if (!nextPlacement) {
                _context3.next = 24;
                break;
              }
              return _context3.abrupt("return", {
                data: {
                  index: currentIndex + 1,
                  overflows: allOverflows
                },
                reset: {
                  placement: nextPlacement
                }
              });
            case 24:
              placementsSortedByMostSpace = allOverflows.map(function (d) {
                var alignment = getAlignment(d.placement);
                return [d.placement, alignment && crossAxis ?
                // Check along the mainAxis and main crossAxis side.
                d.overflows.slice(0, 2).reduce(function (acc, v) {
                  return acc + v;
                }, 0) :
                // Check only the mainAxis.
                d.overflows[0], d.overflows];
              }).sort(function (a, b) {
                return a[1] - b[1];
              });
              placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(function (d) {
                return d[2].slice(0,
                // Aligned placements should not check their opposite crossAxis
                // side.
                getAlignment(d[0]) ? 2 : 3).every(function (v) {
                  return v <= 0;
                });
              });
              resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
              if (!(resetPlacement !== placement)) {
                _context3.next = 29;
                break;
              }
              return _context3.abrupt("return", {
                data: {
                  index: currentIndex + 1,
                  overflows: allOverflows
                },
                reset: {
                  placement: resetPlacement
                }
              });
            case 29:
              return _context3.abrupt("return", {});
            case 30:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    }
  };
};

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.
function convertValueToCoords(_x6, _x7) {
  return _convertValueToCoords.apply(this, arguments);
}
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
function _convertValueToCoords() {
  _convertValueToCoords = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(state, options) {
    var placement, platform, elements, rtl, side, alignment, isVertical, mainAxisMulti, crossAxisMulti, rawValue, _ref6, mainAxis, crossAxis, alignmentAxis;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          placement = state.placement, platform = state.platform, elements = state.elements;
          _context11.next = 3;
          return platform.isRTL == null ? void 0 : platform.isRTL(elements.floating);
        case 3:
          rtl = _context11.sent;
          side = getSide(placement);
          alignment = getAlignment(placement);
          isVertical = getSideAxis(placement) === 'y';
          mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
          crossAxisMulti = rtl && isVertical ? -1 : 1;
          rawValue = evaluate(options, state); // eslint-disable-next-line prefer-const
          _ref6 = typeof rawValue === 'number' ? {
            mainAxis: rawValue,
            crossAxis: 0,
            alignmentAxis: null
          } : _objectSpread2({
            mainAxis: 0,
            crossAxis: 0,
            alignmentAxis: null
          }, rawValue), mainAxis = _ref6.mainAxis, crossAxis = _ref6.crossAxis, alignmentAxis = _ref6.alignmentAxis;
          if (alignment && typeof alignmentAxis === 'number') {
            crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
          }
          return _context11.abrupt("return", isVertical ? {
            x: crossAxis * crossAxisMulti,
            y: mainAxis * mainAxisMulti
          } : {
            x: mainAxis * mainAxisMulti,
            y: crossAxis * crossAxisMulti
          });
        case 13:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return _convertValueToCoords.apply(this, arguments);
}
var offset$1 = function offset(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options: options,
    fn: function fn(state) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _middlewareData$offse, _middlewareData$arrow, x, y, placement, middlewareData, diffCoords;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              x = state.x, y = state.y, placement = state.placement, middlewareData = state.middlewareData;
              _context7.next = 3;
              return convertValueToCoords(state, options);
            case 3:
              diffCoords = _context7.sent;
              if (!(placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset)) {
                _context7.next = 6;
                break;
              }
              return _context7.abrupt("return", {});
            case 6:
              return _context7.abrupt("return", {
                x: x + diffCoords.x,
                y: y + diffCoords.y,
                data: _objectSpread2(_objectSpread2({}, diffCoords), {}, {
                  placement: placement
                })
              });
            case 7:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    }
  };
};

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
var shift$1 = function shift(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options: options,
    fn: function fn(state) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var x, y, placement, _evaluate5, _evaluate5$mainAxis, checkMainAxis, _evaluate5$crossAxis, checkCrossAxis, _evaluate5$limiter, limiter, detectOverflowOptions, coords, overflow, crossAxis, mainAxis, mainAxisCoord, crossAxisCoord, minSide, maxSide, _min, _max, _minSide, _maxSide, _min2, _max2, limitedCoords;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              x = state.x, y = state.y, placement = state.placement;
              _evaluate5 = evaluate(options, state), _evaluate5$mainAxis = _evaluate5.mainAxis, checkMainAxis = _evaluate5$mainAxis === void 0 ? true : _evaluate5$mainAxis, _evaluate5$crossAxis = _evaluate5.crossAxis, checkCrossAxis = _evaluate5$crossAxis === void 0 ? false : _evaluate5$crossAxis, _evaluate5$limiter = _evaluate5.limiter, limiter = _evaluate5$limiter === void 0 ? {
                fn: function fn(_ref) {
                  var x = _ref.x,
                    y = _ref.y;
                  return {
                    x: x,
                    y: y
                  };
                }
              } : _evaluate5$limiter, detectOverflowOptions = _objectWithoutProperties(_evaluate5, _excluded4);
              coords = {
                x: x,
                y: y
              };
              _context8.next = 5;
              return detectOverflow(state, detectOverflowOptions);
            case 5:
              overflow = _context8.sent;
              crossAxis = getSideAxis(getSide(placement));
              mainAxis = getOppositeAxis(crossAxis);
              mainAxisCoord = coords[mainAxis];
              crossAxisCoord = coords[crossAxis];
              if (checkMainAxis) {
                minSide = mainAxis === 'y' ? 'top' : 'left';
                maxSide = mainAxis === 'y' ? 'bottom' : 'right';
                _min = mainAxisCoord + overflow[minSide];
                _max = mainAxisCoord - overflow[maxSide];
                mainAxisCoord = clamp(_min, mainAxisCoord, _max);
              }
              if (checkCrossAxis) {
                _minSide = crossAxis === 'y' ? 'top' : 'left';
                _maxSide = crossAxis === 'y' ? 'bottom' : 'right';
                _min2 = crossAxisCoord + overflow[_minSide];
                _max2 = crossAxisCoord - overflow[_maxSide];
                crossAxisCoord = clamp(_min2, crossAxisCoord, _max2);
              }
              limitedCoords = limiter.fn(_objectSpread2(_objectSpread2({}, state), {}, _defineProperty(_defineProperty({}, mainAxis, mainAxisCoord), crossAxis, crossAxisCoord)));
              return _context8.abrupt("return", _objectSpread2(_objectSpread2({}, limitedCoords), {}, {
                data: {
                  x: limitedCoords.x - x,
                  y: limitedCoords.y - y
                }
              }));
            case 14:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    }
  };
};

function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  // Browsers without `ShadowRoot` support.
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  var _getComputedStyle = getComputedStyle(element),
    overflow = _getComputedStyle.overflow,
    overflowX = _getComputedStyle.overflowX,
    overflowY = _getComputedStyle.overflowY,
    display = _getComputedStyle.display;
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  var webkit = isWebKit();
  var css = getComputedStyle(element);

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return css.transform !== 'none' || css.perspective !== 'none' || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(function (value) {
    return (css.willChange || '').includes(value);
  }) || ['paint', 'layout', 'strict', 'content'].some(function (value) {
    return (css.contain || '').includes(value);
  });
}
function getContainingBlock(element) {
  var currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  var result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  var parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  var scrollableAncestor = getNearestOverflowAncestor(node);
  var isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  var win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}

function getCssDimensions(element) {
  var css = getComputedStyle(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  var width = parseFloat(css.width) || 0;
  var height = parseFloat(css.height) || 0;
  var hasOffset = isHTMLElement(element);
  var offsetWidth = hasOffset ? element.offsetWidth : width;
  var offsetHeight = hasOffset ? element.offsetHeight : height;
  var shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width: width,
    height: height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  var domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  var rect = domElement.getBoundingClientRect();
  var _getCssDimensions = getCssDimensions(domElement),
    width = _getCssDimensions.width,
    height = _getCssDimensions.height,
    $ = _getCssDimensions.$;
  var x = ($ ? round(rect.width) : rect.width) / width;
  var y = ($ ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x: x,
    y: y
  };
}
var noOffsets = /*#__PURE__*/createCoords(0);
function getVisualOffsets(element) {
  var win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var domElement = unwrapElement(element);
  var scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  var visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  var x = (clientRect.left + visualOffsets.x) / scale.x;
  var y = (clientRect.top + visualOffsets.y) / scale.y;
  var width = clientRect.width / scale.x;
  var height = clientRect.height / scale.y;
  if (domElement) {
    var win = getWindow(domElement);
    var offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    var currentWin = win;
    var currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      var iframeScale = getScale(currentIFrame);
      var iframeRect = currentIFrame.getBoundingClientRect();
      var css = getComputedStyle(currentIFrame);
      var left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      var top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return rectToClientRect({
    width: width,
    height: height,
    x: x,
    y: y
  });
}
var topLayerSelectors = [':popover-open', ':modal'];
function isTopLayer(element) {
  return topLayerSelectors.some(function (selector) {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  var elements = _ref.elements,
    rect = _ref.rect,
    offsetParent = _ref.offsetParent,
    strategy = _ref.strategy;
  var isFixed = strategy === 'fixed';
  var documentElement = getDocumentElement(offsetParent);
  var topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var scale = createCoords(1);
  var offsets = createCoords(0);
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      var offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  var html = getDocumentElement(element);
  var scroll = getNodeScroll(element);
  var body = element.ownerDocument.body;
  var width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  var height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  var x = -scroll.scrollLeft + getWindowScrollBarX(element);
  var y = -scroll.scrollTop;
  if (getComputedStyle(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  var clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  var top = clientRect.top + element.clientTop;
  var left = clientRect.left + element.clientLeft;
  var scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  var width = element.clientWidth * scale.x;
  var height = element.clientHeight * scale.y;
  var x = left * scale.x;
  var y = top * scale.y;
  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  var rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    var visualOffsets = getVisualOffsets(element);
    rect = _objectSpread2(_objectSpread2({}, clippingAncestor), {}, {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    });
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  var parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  var cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  var result = getOverflowAncestors(element, [], false).filter(function (el) {
    return isElement(el) && getNodeName(el) !== 'body';
  });
  var currentContainingBlockComputedStyle = null;
  var elementIsFixed = getComputedStyle(element).position === 'fixed';
  var currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    var computedStyle = getComputedStyle(currentNode);
    var currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    var shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(function (ancestor) {
        return ancestor !== currentNode;
      });
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  var element = _ref.element,
    boundary = _ref.boundary,
    rootBoundary = _ref.rootBoundary,
    strategy = _ref.strategy;
  var elementClippingAncestors = boundary === 'clippingAncestors' ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  var clippingAncestors = [].concat(_toConsumableArray(elementClippingAncestors), [rootBoundary]);
  var firstClippingAncestor = clippingAncestors[0];
  var clippingRect = clippingAncestors.reduce(function (accRect, clippingAncestor) {
    var rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  var _getCssDimensions2 = getCssDimensions(element),
    width = _getCssDimensions2.width,
    height = _getCssDimensions2.height;
  return {
    width: width,
    height: height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var isFixed = strategy === 'fixed';
  var rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      var offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  var x = rect.left + scroll.scrollLeft - offsets.x;
  var y = rect.top + scroll.scrollTop - offsets.y;
  return {
    x: x,
    y: y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle(element).position === 'static';
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  var win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    var svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  var offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
    var getOffsetParentFn, getDimensionsFn, floatingDimensions;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          getOffsetParentFn = this.getOffsetParent || getOffsetParent;
          getDimensionsFn = this.getDimensions;
          _context.next = 4;
          return getDimensionsFn(data.floating);
        case 4:
          floatingDimensions = _context.sent;
          _context.t0 = getRectRelativeToOffsetParent;
          _context.t1 = data.reference;
          _context.next = 9;
          return getOffsetParentFn(data.floating);
        case 9:
          _context.t2 = _context.sent;
          _context.t3 = data.strategy;
          _context.t4 = (0, _context.t0)(_context.t1, _context.t2, _context.t3);
          _context.t5 = {
            x: 0,
            y: 0,
            width: floatingDimensions.width,
            height: floatingDimensions.height
          };
          return _context.abrupt("return", {
            reference: _context.t4,
            floating: _context.t5
          });
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, this);
  }));
  return function getElementRects(_x) {
    return _ref2.apply(this, arguments);
  };
}();
function isRTL(element) {
  return getComputedStyle(element).direction === 'rtl';
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect: convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement: getDocumentElement,
  getClippingRect: getClippingRect,
  getOffsetParent: getOffsetParent,
  getElementRects: getElementRects,
  getClientRects: getClientRects,
  getDimensions: getDimensions,
  getScale: getScale,
  isElement: isElement,
  isRTL: isRTL
};

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
var offset = offset$1;

/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
var autoPlacement = autoPlacement$1;

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
var shift = shift$1;

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
var arrow = arrow$1;

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */
var computePosition = function computePosition(reference, floating, options) {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  var cache = new Map();
  var mergedOptions = _objectSpread2({
    platform: platform
  }, options);
  var platformWithCache = _objectSpread2(_objectSpread2({}, mergedOptions.platform), {}, {
    _c: cache
  });
  return computePosition$1(reference, floating, _objectSpread2(_objectSpread2({}, mergedOptions), {}, {
    platform: platformWithCache
  }));
};

var _templateObject;

/**
 * Service Now Ods Tooltip component
 * @input id, label
 * @output <ods-tooltip> in dom
 */
var OdsTooltip = /*#__PURE__*/function (_LitElement) {
  function OdsTooltip() {
    var _this;
    _classCallCheck(this, OdsTooltip);
    _this = _callSuper(this, OdsTooltip);
    _this.id = 'tooltip';
    _this.label = '';
    return _this;
  }
  _inherits(OdsTooltip, _LitElement);
  return _createClass(OdsTooltip, [{
    key: "getTooltipElements",
    value: function getTooltipElements() {
      var _element;
      var current = this.renderRoot;
      var selector = "[aria-describedby='".concat(this.id, "']");
      //Use standalone
      var element = document.querySelector(selector);
      //If used within our components
      element = (_element = element) !== null && _element !== void 0 ? _element : current.getRootNode().host.parentElement.querySelector(selector);
      return {
        current: current,
        element: element,
        selector: selector
      };
    }
  }, {
    key: "updateTooltipPosition",
    value: function updateTooltipPosition() {
      var _this2 = this;
      var _this$getTooltipEleme = this.getTooltipElements(),
        current = _this$getTooltipEleme.current,
        element = _this$getTooltipEleme.element;
      var arrowElement = current.querySelector('#arrow');
      var indicatorElement = current.querySelector('#indicator');
      var arrowLen = arrowElement.offsetWidth;
      // Get half the arrow box's hypotenuse length
      computePosition(element, this, {
        placement: 'top',
        middleware: [autoPlacement({
          crossAxis: true,
          allowedPlacements: ['top', 'bottom']
        }), shift({
          padding: 5
        }), offset(6), arrow({
          element: arrowElement
        })]
      }).then(function (_ref) {
        var x = _ref.x,
          y = _ref.y,
          middlewareData = _ref.middlewareData,
          placement = _ref.placement;
        var tooltipMargin = placement === 'top' ? y - 8 : y + 8;
        Object.assign(_this2.style, {
          left: "".concat(x, "px"),
          top: "".concat(tooltipMargin, "px")
        });
        var side = placement.split("-")[0];
        var staticSide = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[side];
        var indicatorStaticSides = {
          bottom: {
            left: '1px',
            top: '1px'
          },
          top: {
            right: '1px',
            bottom: '1px'
          }
        }[side];
        if (middlewareData.arrow) {
          var _middlewareData$arrow = middlewareData.arrow,
            _x = _middlewareData$arrow.x,
            _y = _middlewareData$arrow.y;
          Object.assign(arrowElement.style, _defineProperty(_defineProperty({
            left: _x != null ? "".concat(_x, "px") : '',
            top: _y != null ? "".concat(_y, "px") : '',
            right: "",
            bottom: ""
          }, staticSide, "".concat(-arrowLen / 2 - 1, "px")), "transform", "rotate(45deg)"));
          Object.assign(indicatorElement.style, _objectSpread2({
            left: '',
            right: '',
            top: '',
            bottom: ''
          }, indicatorStaticSides));
        }
      });
    }
  }, {
    key: "setHoverToAssociatedElement",
    value: function setHoverToAssociatedElement() {
      var _this$getTooltipEleme2 = this.getTooltipElements(),
        element = _this$getTooltipEleme2.element,
        selector = _this$getTooltipEleme2.selector;
      var style = document.createElement('style');
      style.type = 'text/css';
      style.innerText = "\n    ".concat(selector, ":hover ~ ods-tooltip[id='").concat(this.id, "'],\n    ").concat(selector, ":focus ~ ods-tooltip[id='").concat(this.id, "']{\n      visibility: visible;\n    }\n    ");
      element.insertBefore(style, null);
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      this.setHoverToAssociatedElement();
      this.updateTooltipPosition();
    }
  }, {
    key: "updated",
    value: function updated() {
      _get(_getPrototypeOf(OdsTooltip.prototype), "updated", this).call(this);
      this.updateTooltipPosition();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this3 = this;
      _get(_getPrototypeOf(OdsTooltip.prototype), "connectedCallback", this).call(this);
      this.interval = setInterval(function () {
        _this3.requestUpdate();
      }, 1000);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      return x(_templateObject || (_templateObject = _taggedTemplateLiteral([" \n    <style>\n    *, :host{\n      --ods-background-primary:         #FFF;\n      --ods-border-decorative-primary:  #C5C5C5;\n      --ods-sem-text-primary:           #1B1B1B;\n      --ods-sem-space-none:             0;\n      --ods-sem-space-xsmall:           4px;\n      --ods-sem-space-small:            8px;\n      --ods-border-radius-xsmall:       4px;\n      --ods-shadow-small-x:         0px;\n      --ods-shadow-small-y:         2px;\n      --ods-shadow-small-blur:      4px;\n      --ods-shadow-small-spread:    0px;\n      --ods-shadow-small-color:     rgba(59, 59, 59, 0.25);\n\n    }\n    :host {\n      visibility:hidden;\n      width: max-content;\n      position: absolute;\n      z-index: 100;\n      top: var(--ods-sem-space-none);\n      left: var(--ods-sem-space-none);\n      background: var(--ods-background-primary);\n      color: var(--ods-sem-text-primary);\n      border-radius: var(--ods-border-radius-xsmall);\n      max-width: 240px;\n      box-shadow: var(--ods-shadow-small-x) var(--ods-shadow-small-y) var(--Shadow-Small-Blur, 4px) var(--ods-shadow-small-spread) var(--Shadow-Small-Color, var(--ods-shadow-small-color)); \n    }\n    .tooltip{\n      padding: var(--ods-sem-space-xsmall) var(--ods-sem-space-small);\n      border-radius: var(--ods-border-radius-xsmall);\n      box-shadow: 0 0 0 0 white, 0 0 0 1px var(--ods-border-decorative-primary);\n    }\n    #arrow {\n      position: absolute;\n      background: var(--ods-border-decorative-primary);\n      width: var(--ods-sem-space-small);\n      height: var(--ods-sem-space-small);\n    }\n    #indicator {\n      position: absolute;\n      background: var(--ods-background-primary);\n      width: var(--ods-sem-space-small);\n      height: var(--ods-sem-space-small);\n    }\n    </style>\n    <div role=\"tooltip\" class='tooltip'>\n      <ods-text tag='span' size='sm'>", "</ods-text>\n      <div id='arrow'><div id='indicator'></div>\n    </div>                        \n    "])), this.label);
    }
  }]);
}(s);
_defineProperty(OdsTooltip, "properties", {
  id: {
    type: String
  },
  label: {
    type: String
  }
});
customElements.define("ods-tooltip", OdsTooltip);

export { OdsTooltip };
