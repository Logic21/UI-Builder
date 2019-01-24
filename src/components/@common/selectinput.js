import Components from '../../gui/components';
import { TextValueInput, ButtonInput } from '../../inputs/inputs';

const selectinput = {
    nodes: ["select"],
    name: "Select Input",
    image: "icons/select_input.svg",
    html: `<div class="everyOutbox-right draggable">
            <div class="btn-group">
                <div class="dailyBox">
                    <select class="form-control" lustyle="height: 2.8rem;width:13rem">
                        <option value="value1">Text 1</option>
                        <option value="value2">Text 2</option>
                        <option value="value3">Text 3</option>
                    </select>
                </div>
            </div>
           </div>
    `,
    beforeInit: function (node) {
        properties = [];
        var i = 0;

        $(node).find('option').each(function () {

            data = { "value": this.value, "text": this.text };

            i++;
            properties.push({
                name: "Option " + i,
                key: "option" + i,
                //index: i - 1,
                optionNode: this,
                inputtype: new TextValueInput(),
                data: data,
                onChange: function (node, value, input) {
                    option = $(this.optionNode);
                    //if remove button is clicked remove option and render row properties
                    if (input.nodeName == 'BUTTON') {
                        option.remove();
                        Components.render("html/selectinput");
                        return node;
                    }
                    if (input.name == "value") option.attr("value", value);
                    else if (input.name == "text") option.text(value);
                    return node;
                },
            });
        });
        //remove all option properties
        this.properties = this.properties.filter(function (item) {
            return item.key.indexOf("option") === -1;
        });
        //add remaining properties to generated column properties
        properties.push(this.properties[0]);

        this.properties = properties;
        return node;
    },

    properties: [{
        name: "Option",
        key: "option1",
        inputtype: new TextValueInput()
    }, {
        name: "Option",
        key: "option2",
        inputtype: new TextValueInput()
    }, {
        name: "",
        key: "addChild",
        inputtype: new ButtonInput(),
        data: { text: "Add option" },
        onChange: function (node) {
            $(node).append('<option value="value">Text</option>');
            //render component properties again to include the new column inputs
            Components.render("html/selectinput");
            return node;
        }
    }]
};

export default selectinput;