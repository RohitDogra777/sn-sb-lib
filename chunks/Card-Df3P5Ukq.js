import { e as _defineProperty, i, d as _taggedTemplateLiteral, _ as _inherits, a as _createClass, b as _classCallCheck, c as _callSuper, x, s } from './lit-element-DUGu5L1q.js';
import './Text-BaUczxyq.js';
import './Link-BDZkGN0R.js';
import './Heading-DXahxNoY.js';

var _templateObject$1, _templateObject2$1;
/**
 * Service Now Image Component
 * @input label, type
 * @output <sn-wc-image> in dom
 */
var ODSImage = /*#__PURE__*/function (_LitElement) {
  _inherits(ODSImage, _LitElement);
  function ODSImage() {
    _classCallCheck(this, ODSImage);
    return _callSuper(this, ODSImage);
  }
  _createClass(ODSImage, [{
    key: "render",
    value: function render() {
      return x(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n      <style>\n        * {\n          margin:0;\n          padding:0;\n          box-sizing:border-box;\n        }\n        .sn-wc-image{ \n          object-fit: var(--sn-wc-object-fit,cover);\n          max-width:100%;\n          height: var(--sn-wc-height,100%);\n          width: var(--sn-wc-width,100%);\n        }\n      </style>\n      <picture>\n         <source media=\"(min-width:768px)\" srcset=\"", "\">\n         <source media=\"(min-width:568px)\" srcset=\"", "\">\n         <source media=\"(min-width:320px)\" srcset=\"", "\">\n         <img class=\"sn-wc-image\" src=\"", "\" alt=\"", "\" loading=\"", "\">\n      </picture>\n    "])), this['src'], this['src-medium'], this['src-small'], this['src'], this.alt, this.loading);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        "src": {
          type: String
        },
        'src-medium': {
          type: String
        },
        'src-small': {
          type: String
        },
        "loading": {
          type: String
        },
        "alt": {
          type: String
        }
      };
    }
  }]);
  return ODSImage;
}(s);
_defineProperty(ODSImage, "styles", i(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  "]))));
customElements.define("ods-image", ODSImage);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

/**
 * Service Now Text Component
 * @input label, type
 * @output <sn-wc-text> in dom
 */
var ODSCard = /*#__PURE__*/function (_LitElement) {
  _inherits(ODSCard, _LitElement);
  function ODSCard() {
    _classCallCheck(this, ODSCard);
    return _callSuper(this, ODSCard);
  }
  _createClass(ODSCard, [{
    key: "triggerClick",
    value: function triggerClick(e) {
      window.open(this.viewMoreLink, "_blank");
    }
  }, {
    key: "getImageComponent",
    value: function getImageComponent() {
      if (this.imageSrc && this.imageSrc != "") {
        return x(_templateObject || (_templateObject = _taggedTemplateLiteral(["<ods-image\n        class=\"card-img\"\n        src=\"", "\"\n        src-medium=\"", "\"\n        src-small=\"", "\"\n        loading=\"lazy\"\n      >\n      </ods-image>"])), this.imageSrc, this.imageSrc, this.imageSrc);
      }
      return x(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
    }
  }, {
    key: "getHeadingComponent",
    value: function getHeadingComponent() {
      if (this.heading && this.heading != "") {
        return x(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([" <ods-heading class=\"card-heading\" heading-level=\"4\"\n        >", "</ods-heading\n      >"])), this.heading);
      }
      return x(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([""])));
    }
  }, {
    key: "getTextComponent",
    value: function getTextComponent() {
      if (this.body && this.body != "") {
        return x(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["<ods-text class=\"card-body\">", "</ods-text>"])), this.body);
      }
      return x(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([""])));
    }
  }, {
    key: "getLinkComponent",
    value: function getLinkComponent() {
      if (this.linkLabel && this.linkLabel != "") {
        return x(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([" <ods-link\n        class=\"card-link\"\n        type=\"", "\"\n        label=\"", "\"\n        target=\"", "\"\n        href=\"", "\"\n        @btn-click-event=\"", "\"\n      ></ods-link>"])), this.linkType, this.linkLabel, this.target, this.viewMoreLink, this.triggerClick);
      }
      return x(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([""])));
    }
  }, {
    key: "render",
    value: function render() {
      var surface = "#fff";
      if (this.surface == "Dark") {
        surface = "#1f1f1f";
      }
      return x(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      <style>\n        * {\n          margin: 0;\n          padding: 0;\n          box-sizing: border-box;\n        }\n        .card {\n          --sn-card-spacer-y: 8px;\n          --sn-card-spacer-x: 16px;\n          --sn-card-border-width: 1px;\n          --sn-card-border-color: rgba(0, 0, 0, 0.175);\n          --sn-card-border-radius: 1rem;\n          --sn-card-bg: ", ";\n          --sn-card-img-overlay-padding: 1rem;\n          font-size: var(--sn-wc-font-size);\n          min-width: 0;\n          min-height: 0;\n          word-wrap: break-word;\n          overflow: hidden;\n          transition: box-shaddow 0.3s;\n          width: var(--sn-wc-width, 100%);\n          display: flex;\n          flex-direction: column;\n          background-color: var(--sn-card-bg);\n          background-clip: border-box;\n          border: var(--sn-card-border-width) solid var(--sn-card-border-color);\n          border-radius: var(--sn-card-border-radius);\n        }\n        ods-heading.card-heading {\n          --sn-wc-padding-start: 16px;\n          --sn-wc-padding-end: 16px;\n          --sn-wc-padding-top: 4px;\n          --sn-wc-font-size: 20px;\n          --sn-wc-font-weight: 28px;\n        }\n        ods-text.card-body {\n          --sn-wc-padding-start: 16px;\n          --sn-wc-padding-end: 16px;\n          --sn-wc-padding-top: 4px;\n          // display: -webkit-box;\n          // -webkit-box-orient: vertical;\n          // overflow: hidden;\n          // text-overflow: ellipses;\n          //-webkit-line-clamp: 3;\n        }\n        ods-link.card-link {\n          margin-top: auto;\n          padding: 20px 16px 10px 16px;\n        }\n       ods-image.card-img {\n          --sn-wc-height: 152px;\n          --sn-wc-width: 100%;\n        }\n      </style>\n      <div class=\"card\">\n        ", " \n        ", "\n        ", " \n        ", "\n\n      </div>\n    "])), surface, this.getImageComponent(), this.getHeadingComponent(), this.getTextComponent(), this.getLinkComponent());
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        linkType: {
          type: String
        },
        imageSrc: {
          type: String
        },
        heading: {
          type: String
        },
        body: {
          type: String
        },
        linkLabel: {
          type: String
        },
        viewMoreLink: {
          type: String
        },
        target: {
          type: String
        },
        surface: {
          type: String
        }
      };
    }
  }]);
  return ODSCard;
}(s);
customElements.define("ods-card", ODSCard);

export { ODSCard };
