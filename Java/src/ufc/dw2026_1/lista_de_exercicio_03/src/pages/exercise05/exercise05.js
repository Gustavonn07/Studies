import { createForm, createLabel, createSubmitButton } from "../../index.js";
import { createFieldset } from "../../ui/fieldset.js";
import { createInput } from "../../ui/input.js";

const exercise05Page = () => {
  const button = createSubmitButton();
  const label = createLabel({ text: "Digite seu nome", id: "name" });

  const input = createInput({
    id: "name",
    placeholder: "Digite seu nome",
    type: "text",
    required: true,
  });

  const fieldset = createFieldset();

  fieldset.appendChild(label);
  fieldset.appendChild(input);
  fieldset.appendChild(button);

  const form = createForm({ children: fieldset, handler: () => {} });

  return form;
};

export { exercise05Page };
