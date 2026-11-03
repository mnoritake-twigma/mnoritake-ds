import figma from "figma";
const component=figma.batch.component;
const size=figma.batch.size;
export default {id:component,imports:[`import { ${component} } from "icons";`],example:figma.code`<${component} size="${size}" />`,metadata:{nestable:true}};
