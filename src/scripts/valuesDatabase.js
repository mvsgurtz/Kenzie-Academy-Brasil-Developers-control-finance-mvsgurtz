const valuesCategory = ["Entrada", "Saída"];


export let insertedValues = [
  {
    id: 1,
    value: 90.0,
    categoryID: 0,
  },
  {
    id: 2,
    value: 40.0,
    categoryID: 1,
  },
  {
    id: 3,
    value: 15.5,
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
  
  btnCloseValue.addEventListener("click", (e)=>{
      const indexValue = insertedValues.indexOf(arrInfo)
      insertedValues.splice(indexValue, 1);
      renderCards(insertedValues);
    })

  // const modalSubmit = document.querySelector(".inputValue");
  // // const modalCancel = document.querySelector("");
  // const inputModal =  document.querySelector(".inputModalValue")
  // const btnModalExit = document.querySelector(".btnEntrance");
  // const btnModalEntrnce =  document.querySelector(".btnExit");

  // modalSubmit.addEventListener("click", (e)=>{
  //   pValue.innerText = inputModal.value;
  //   console.log(pValue);
  // })
}



