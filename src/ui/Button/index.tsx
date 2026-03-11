import { Component } from "react";
import Styles from "./Button.module.css";
type Props = {
  label: string;
  onClick: () => void;
};

class Button extends Component<Props> {
  render() {
    const { label, onClick } = this.props;
    return (
      <button className={Styles.button} onClick={onClick}>
        {label}
      </button>
    );
  }
}

export default Button;
