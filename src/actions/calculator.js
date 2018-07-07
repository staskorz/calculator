export const CALCULATOR_BUTTON_CLICK = 'CALCULATOR_BUTTON_CLICK';
export const CALCULATOR_LOADED = 'CALCULATOR_LOADED';

export const calculate = buttonName => ({
   type: CALCULATOR_BUTTON_CLICK, buttonName
});
export const calculatorLoaded = () => ({
    type: CALCULATOR_LOADED
 });