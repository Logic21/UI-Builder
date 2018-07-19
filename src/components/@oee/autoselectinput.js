import { TextInput } from '../../inputs/inputs';
import { autoselectinputid } from './ids';
import { dataComponentId, dataUrl, dataAutoSelectId, dataValueMapping, dataTextMapping } from '../common';

const autoselectinput = {
    nodes: ["select"],
    name: "Auto Select Input",
    image: "icons/select_input.svg",
    html: `<div class="everyOutbox-right draggable">
            <div class="btn-group">
                <div class="dailyBox">
                    <select ${dataAutoSelectId} ${dataComponentId}="${autoselectinputid}" class="form-control fundodooSelect" lustyle="height: 2.8rem;width:13rem">
                    </select>
                </div>
            </div>
           </div>
    `,
    properties: [{
        name: 'Value Mapping',
        key: 'valueMapping',
        htmlAttr: dataValueMapping,
        inputtype: TextInput
    }, {
        name: 'Text Mapping',
        key: 'textMaping',
        htmlAttr: dataTextMapping,
        inputtype: TextInput
    }, {
        name: "Data Url",
        key: "dataUrl",
        htmlAttr: dataUrl,
        inputtype: TextInput
    }, {
        name: 'Onchange',
        key: 'onchange',
        htmlAttr: 'onchange',
        inputtype: TextInput
    }]
};

export default autoselectinput;