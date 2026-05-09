import { createErrorText, createForm, createLabel, createSubmitButton, routeConstants } from "../../index.js";
import { createFieldset } from "../../ui/fieldset.js";
import { createInput } from "../../ui/input.js";
import { verifyAnswerNumber } from "./lib/exercise03.utils.js";

const exercise03Page = () => {
  const button = createSubmitButton();
  const label = createLabel({ text: "Digite sua idade", id: "age" });

  const input = createInput({
    id: "age",
    placeholder: "Digite sua idade",
    type: "text",
    required: true,
  });

  const fieldset = createFieldset();
  
  const errorText = createErrorText('A resposta deve ser um número positivo.')

  fieldset.appendChild(label);
  fieldset.appendChild(input);
  fieldset.appendChild(errorText);
  fieldset.appendChild(button);

  const form = createForm({ 
    children: fieldset, 
    handler: () => verifyAnswerNumber({
      answer: input.value, errorMessage: errorText
    }),
    nextPage: routeConstants.EXERCISE_04 
  });

  return form;
};

export { exercise03Page };
