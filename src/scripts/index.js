import { handleModal } from "./modal.js";
handleModal();

import { renderCards, insertedValues, createNewValue } from "./valuesDatabase.js";
renderCards(insertedValues);
createNewValue();