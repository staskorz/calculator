import Button from './Button';
import abTestingExperimentName from '../ab-testing/experiment-name';
import React from 'react';
import PropTypes from 'prop-types';

import './ButtonPanel.css';

class ButtonPanel extends React.Component {
  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName);
  }

  render() {
    let equalsSignColorProp = {};
    let plusMinusAndPercentButtons;

    const plusMinusButton = <Button name="+/-" clickHandler={this.handleClick} />;
    const percentButton = <Button name="%" clickHandler={this.handleClick} />;

    if (abTestingExperimentName === "ALTERNATIVE_COLOR_FOR_EQUALS_SIGN") {
      equalsSignColorProp.green = true;
    } else {
      equalsSignColorProp.orange = true;
    }

    if (abTestingExperimentName === "SWITCH_BETWEEN_PLUS_MINUS_AND_PERCENTAGE_SIGNS") {
      plusMinusAndPercentButtons = [percentButton, plusMinusButton];
    } else {
      plusMinusAndPercentButtons = [plusMinusButton, percentButton];
    }

    return (
      <div className="component-button-panel">
        <div>
          <Button name="AC" clickHandler={this.handleClick} />
          {plusMinusAndPercentButtons[0]}
          {plusMinusAndPercentButtons[1]}
          <Button name="÷" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
          <Button name="x" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="1" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="0" clickHandler={this.handleClick} wide />
          <Button name="." clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} {...equalsSignColorProp} />
        </div>
      </div>
    );
  }
}
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};
export default ButtonPanel;
