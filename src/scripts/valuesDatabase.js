const valuesCategory = ["Entrada", "Saída"];


export let insertedValues = [
  {
    id: 1,
    value: "90.0",
    categoryID: 0,
  },
  {
    id: 2,
    value: "40.0",
    categoryID: 1,
  },
  {
    id: 3,
    value: "15.5",
    categoryID: 0,
  },
];

export const renderCards = (arrValues) => {
  const ulValue = document.querySelector("ul");
  ulValue.innerHTML = " ";
  for (let i = 0; i < arrValues.length; i++) {
    const currentvalue = arrValues[i];
    createCard(currentvalue);
  }
}


 export const createCard = (arrInfo) => {
  const ulValue = document.createElement("ul");
  const valueLi = document.createElement("li")
  const pValue = document.createElement("p");
  const divValue = document.createElement("div");
  const typeValue = document.createElement("span");
  const btnCloseValue =  document.createElement("button");

  valueLi.classList.add(".valueList");
  pValue.classList.add(".valueCard");
  divValue.classList.add(".transactions__info");
  typeValue.classList.add(".typeTransition");
  btnCloseValue.classList.add(".excValue");



  divValue.append(typeValue, btnCloseValue);
  valueLi.append(pValue, divValue );
  ulValue.append(valueLi);

  console.log(ulValue);

  pValue.innerText = arrInfo.value;
  if(arrInfo.categoryID = 0){
    typeValue.innerText = valuesCategory[0]
  } else if (arrInfo.categoryID = 1){
    typeValue.innerText = valuesCategory[1];
  }

  // const modalSubmit = document.querySelector("inputValue");
  // // const modalCancel = document.querySelector("");
  // const inputModal =  document.querySelector(".inputModalValue")
  // const btnModalExit = document.querySelector(".btnEntrance");
  // const btnModalEntrnce =  document.querySelector(".btnExit");

  // modalSubmit.addEventListener("click", (e)=>{
  //   pValue.value = inputModal.textContent;
  // })
}




