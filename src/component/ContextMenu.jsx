import React from "react";
import ReactDOM from "react-dom";

class ContextMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside);
    document.addEventListener("contextmenu", this.handleRightClickOutside);
    
  }
  handleRightClick = (e) => {
    e.preventDefault();
    this.setState({
      open: true,
      top: window.scrollY + e.nativeEvent.clientY,
      left: e.nativeEvent.clientX,
    });
  };
  handleClickOutside = (e) => {
    if (!this.state.open) {
      return;
    }

    const root = ReactDOM.findDOMNode(this.li);
    const context = ReactDOM.findDOMNode(this.context);
    const isInLi = !root.contains(e.target) || root.contains(e.target);
    const isInContext = !context.contains(e.target);

    if (isInLi && isInContext) {
      this.setState({
        open: false,
      });
    }
  };

  handleRightClickOutside = (e) => {
    if (!this.state.open) {
      return;
    }

    const root = ReactDOM.findDOMNode(this.li);
    const isInRow = !root.contains(e.target);

    if (isInRow) {
      this.setState({
        open: false,
      });
    }
  };

  render() {
    return (
      <div
        onContextMenu={this.handleRightClick}
        ref={(node) => (this.li = node)}
      >
        {this.props.children}

        {!this.state.open ? null : (
          <li
            className="context"
            ref={(li) => (this.context = li)}
            style={{ top: this.state.top, left: this.state.left }}
          >
            <ul>
              {this.props.buttons.length > 0 &&
                this.props.buttons.map((button) => {
                  return (
                    <li key={button.label}>
                      <button onClick={button.onClick}>{button.label}</button>
                    </li>
                  );
                })}
            </ul>
          </li>
        )}
      </div>
    );
  }
}

export default ContextMenu;
