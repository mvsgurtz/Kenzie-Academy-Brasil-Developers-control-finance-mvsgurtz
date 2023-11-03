const valuesCategory = ["Entrada", "Saída"];



const localValues = localStorage.getItem("@ControlFinance:card");

const convertedValues = JSON.parse(localValues);

export const insertedValues = convertedValues || [];

export const renderCards = (arrValues) => {
  const ulValue = document.querySelector(".transactions__card");
  ulValue.innerHTML = " ";
  for (let i = 0; i < arrValues.length; i++) {
    const currentvalue = arrValues[i];
    createCard(currentvalue);
    sumValue(totalSum(insertedValues))
  }
}

const createCard = (arrInfo) => {

  // CREATE CARDS: 
  const ulValue = document.querySelector(".transactions__card");
  const valueLi = document.createElement("li");
  const pValue = document.createElement("p");
  const divValue = document.createElement("div");
  const typeValue = document.createElement("span");
  const btnCloseValue = document.createElement("button");
  const imgBtnClose = document.createElement("img");

  ulValue.classList.add("transactions__card");
  valueLi.classList.add("valueList");
  pValue.classList.add("valueCard");
  divValue.classList.add("transactions__info");
  typeValue.classList.add("typeTransition");
  btnCloseValue.classList.add("excValue");
  imgBtnClose.src = "./src/assets/trash-icon.svg";

  btnCloseValue.append(imgBtnClose);
  divValue.append(typeValue, btnCloseValue);
  valueLi.append(pValue, divValue);
  ulValue.append(valueLi);

  pValue.innerText = `R$ ${arrInfo.value}`
  if (arrInfo.categoryID === 0) {
    typeValue.innerText = valuesCategory[0]
  } else if (arrInfo.categoryID === 1) {
    typeValue.innerText = valuesCategory[1];
  }

  // REMOVE CARDS: 

  btnCloseValue.addEventListener("click", (e) => {
    const btnEntranceNav = document.querySelector(".button__entrance");
    const btnExitNav = document.querySelector(".button__exit");
    const btnAll = document.querySelector(".button__all");
    const indexValue = insertedValues.indexOf(arrInfo)
    insertedValues.splice(indexValue, 1);
    renderCards(insertedValues);
    sumValue(totalSum(insertedValues));
    if (e.target !== btnEntranceNav) {
      btnEntranceNav.focus();
      renderCards(positiveFilter(insertedValues));
    }
    if (e.target !== btnExitNav) {
      btnExitNav.focus();
      renderCards(negativeFilter(insertedValues));
    }
    if (e.target !== btnAll) {
      btnAll.focus();
      renderCards(insertedValues);
    }
    const localRemove = JSON.stringify(insertedValues);
    localStorage.setItem("@ControlFinance:card", localRemove);
  })
}

export const createNewValue = () => {

  const formModal = document.querySelector(".modal");
  const inputModal = document.querySelector(".inputModalValue");
  const btnModalExit = document.querySelector(".btnExit");
  const btnModalEntrance = document.querySelector(".btnEntrance");
  const btnSubmit = document.querySelector("#inputValue");

  let typeValue = 0;
  let newValue = {
    value: "",
    categoryID: 0,
  }

  btnModalExit.addEventListener("click", (e) => {
    btnModalExit.classList.add("clicked");
    typeValue = 1;
    newValue.value = - parseFloat(inputModal.value);
    newValue.categoryID = typeValue;
    btnSubmit.removeAttribute("disabled");
  })

  btnModalEntrance.addEventListener("click", (e) => {
    btnModalEntrance.classList.add("clicked");
    typeValue = 0;
    newValue.value = parseFloat(inputModal.value);
    newValue.categoryID = typeValue;
    btnSubmit.removeAttribute("disabled");
  })

  formModal.addEventListener("submit", (e) => {
    event.preventDefault();
    insertedValues.push(newValue);
    renderCards(insertedValues);
    newValue = {};
    sumValue(totalSum(insertedValues));
    inputModal.value = "";
    btnSubmit.disabled = true;

    const localCard = JSON.stringify(insertedValues);
    localStorage.setItem("@ControlFinance:card", localCard);
  })
}


const totalSum = (arr) => {
  const newArrValue = arr.map((element) => {
    const arrValue = {
      value: element.value,
    }
    return arrValue;
  })

  const totalValueSum = newArrValue.reduce((acc, initialValue) => {
    return acc + initialValue.value;
  }, 0)
  return totalValueSum;
}

const sumValue = (totalSum) => {
  const sumHolder = document.querySelector(".sum__value");
  sumHolder.innerText = `R$ ${totalSum},00`;
}

const positiveFilter = (arr) => {
  const positiveValue = arr.filter((element) => {
    return element.value > 0;
  })
  return positiveValue;
}

const negativeFilter = (arr) => {
  const negativeValue = arr.filter((element) => {
    return element.value < 0;
  })
  return negativeValue;

}

const showEntrance = () => {
  const btnEntranceNav = document.querySelector(".button__entrance");
  btnEntranceNav.addEventListener("click", (e) => {
    renderCards(positiveFilter(insertedValues));
  })
}

const showExit = () => {
  const btnExitNav = document.querySelector(".button__exit");
  btnExitNav.addEventListener("click", () => {
    renderCards(negativeFilter(insertedValues));
  })
}

const showAll = (arr) => {
  const btnAll = document.querySelector(".button__all");
  btnAll.addEventListener("click", () => {
    renderCards(insertedValues);
  })
}

const verifyLocal = () => {
  const localInfo = localStorage.getItem("@ControlFinance:card");
  if(JSON.parse(localInfo)){
    renderCards(JSON.parse(localInfo));
  }
}

showEntrance();
showExit();
showAll(insertedValues);
verifyLocal();


