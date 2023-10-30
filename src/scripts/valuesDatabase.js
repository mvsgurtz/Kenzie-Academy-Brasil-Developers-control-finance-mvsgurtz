const valuesCategory = ["Entrada", "Saída"];


export let insertedValues = [
  {
    id: 1,
    value: 90.0,
    categoryID: 0,
  },
  {
    id: 2,
    value: - 40.0,
    categoryID: 1,
  },
  {
    id: 3,
    value: 15,
    categoryID: 0,
  },
];

export const renderCards = (arrValues) => {
  const ulValue = document.querySelector(".transactions__card");
  ulValue.innerHTML = " ";
  for (let i = 0; i < arrValues.length; i++) {
    const currentvalue = arrValues[i];
    createCard(currentvalue);
  }
}

const createCard = (arrInfo) => {

  // CREATE CARDS: 
  const ulValue = document.querySelector(".transactions__card");
  const valueLi = document.createElement("li")
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
    const indexValue = insertedValues.indexOf(arrInfo)
    insertedValues.splice(indexValue, 1);
    renderCards(insertedValues);
    sumValue(totalSum(insertedValues));
  })
}

export const createNewValue = () => {

  const formModal = document.querySelector(".modal");
  const inputModal = document.querySelector(".inputModalValue");
  const btnType = document.querySelectorAll(".type");
  const btnModalExit = document.querySelector(".btnExit");
  const btnModalEntrance = document.querySelector(".btnEntrance");


  let typeValue = 0;
  let newValue = {
    value: " ",
    categoryID: 0,
  }

  btnModalExit.addEventListener("click", (e) => {
    typeValue = 1;
    newValue.value = - parseFloat(inputModal.value);
    newValue.categoryID = typeValue;
  })

  btnModalEntrance.addEventListener("click", (e) => {
    typeValue = 0;
    newValue.value = parseFloat(inputModal.value);
    newValue.categoryID = typeValue;
  })

  formModal.addEventListener("submit", (e) => {
    event.preventDefault();
    insertedValues.push(newValue);
    renderCards(insertedValues);
    newValue = {};
    sumValue(totalSum(insertedValues));
    showEntrance(insertedValues);
    showExit(insertedValues);
    showAll(insertedValues);
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

document.addEventListener("DOMContentLoaded", (e) => {
  sumValue(totalSum(insertedValues))
});

const showEntrance = (arr) => {
  const btnEntranceNav = document.querySelector(".button__entrance");
  const positiveValue = arr.filter((element) => {
    return element.value > 0;
  })

  btnEntranceNav.addEventListener("click", () => {
    renderCards(positiveValue);
  })
}

const showExit = (arr) => {
  const btnExitNav = document.querySelector(".button__exit");
  const negativeValue = arr.filter((element) => {
    return element.value < 0;
  })

  btnExitNav.addEventListener("click", () => {
    renderCards(negativeValue);
  })
}

const showAll = (arr) => {
  const btnAll = document.querySelector(".button__all");

  btnAll.addEventListener("click", () => {
    renderCards(insertedValues);
  })
}

showEntrance(insertedValues);
showExit(insertedValues);
showAll(insertedValues);


