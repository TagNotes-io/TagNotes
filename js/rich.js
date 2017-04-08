'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* 
 * Simple editor component that takes placeholder text as a prop 
 */

var Editor = function (_React$Component) {
  _inherits(Editor, _React$Component);

  function Editor(props) {
    _classCallCheck(this, Editor);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = { editorHtml: '' };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  Editor.prototype.handleChange = function handleChange(html) {
    this.setState({ editorHtml: html });
  };

  Editor.prototype.render = function render() {
    return React.createElement(ReactQuill, {
      theme: 'snow',
      onChange: this.handleChange,
      value: this.state.editorHtml,
      modules: Editor.modules,
      formats: Editor.formats,
      placeholder: this.props.placeholder
    });
  };

  return Editor;
}(React.Component);

/* 
 * Quill modules to attach to editor
 * See http://quilljs.com/docs/modules/ for complete options
 */

Editor.modules = {
  toolbar: [[{ 'header': [1, 2, false] }, { 'font': [] }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }], ['link', 'image', 'video'], ['clean']]
};
/* 
 * Quill editor formats
 * See http://quilljs.com/docs/formats/
 */
Editor.formats = ['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'video'];

/* 
 * PropType validation
 */
Editor.propTypes = {
  placeholder: React.PropTypes.string
};

/* 
 * Render component on page
 */
ReactDOM.render(React.createElement(Editor, { placeholder: 'Write something...' }), document.querySelector('.app'));