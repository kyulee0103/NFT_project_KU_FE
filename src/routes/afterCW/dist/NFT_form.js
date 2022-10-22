"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var TextField_1 = require("@mui/material/TextField");
var useInput_1 = require("../../hooks/useInput");
var react_switch_selector_1 = require("react-switch-selector");
var Total = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 102px;\n  margin-left: 42px;\n  margin-right: 42px;\n  margin-bottom: 60px;\n  p {\n    font-style: normal;\n    font-weight: 600;\n    font-size: 28px;\n    color: #fafafa;\n  }\n"], ["\n  margin-top: 102px;\n  margin-left: 42px;\n  margin-right: 42px;\n  margin-bottom: 60px;\n  p {\n    font-style: normal;\n    font-weight: 600;\n    font-size: 28px;\n    color: #fafafa;\n  }\n"])));
var Title = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var FormBox = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: #c3c3fb;\n  width: 100%;\n  height: 50vh;\n"], ["\n  background-color: #c3c3fb;\n  width: 100%;\n  height: 50vh;\n"])));
var TextFieldBox = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
var Top = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
function NFT_form() {
    var _a = useInput_1["default"](''), name = _a[0], onChangeName = _a[1];
    var _b = useInput_1["default"](''), studentNum = _b[0], onChangeStudentNum = _b[1];
    var _c = useInput_1["default"](''), phone = _c[0], onChangePhone = _c[1];
    var options = [
        {
            label: '고려대학교',
            value: '고려대학교',
            selectedBackgroundColor: '#FFFFFF',
            selectedFontColor: 'black'
        },
        {
            label: '연세대학교',
            value: '연세대학교',
            selectedBackgroundColor: '#FFFFFF',
            selectedFontColor: 'black'
        },
    ];
    var onChange = function (_a) {
        var newValue = _a.newValue;
        console.log(newValue);
    };
    var initialSelectedIndex = options.findIndex(function (_a) {
        var value = _a.value;
        return value === 'bar';
    });
    return (React.createElement(Total, null,
        React.createElement(Title, null,
            React.createElement("p", null, "\uC2DC\uC791\uD558\uAE30")),
        React.createElement(FormBox, null,
            React.createElement("form", null,
                React.createElement(Top, null,
                    React.createElement("div", { className: "your-required-wrapper", style: { width: 100, height: 30 } },
                        React.createElement(react_switch_selector_1["default"], { onChange: onChange, options: options, initialSelectedIndex: initialSelectedIndex, backgroundColor: '#535353', fontColor: '#FFFFFF' }))),
                React.createElement(TextFieldBox, null,
                    React.createElement(TextField_1["default"], { id: "standard-basic", label: "\uC774\uB984", variant: "standard", required: true, size: "small", margin: "none", value: name, onChange: onChangeName }),
                    React.createElement(TextField_1["default"], { type: "number", id: "standard-basic", label: "\uD559\uBC88", variant: "standard", required: true, size: "small", margin: "none", value: studentNum, onChange: onChangeStudentNum }),
                    React.createElement(TextField_1["default"], { type: "number", id: "standard-basic", label: "\uC5F0\uB77D\uCC98", variant: "standard", required: true, size: "small", margin: "none", value: phone, onChange: onChangePhone }))))));
}
exports["default"] = NFT_form;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
