export const handleModal = () => {
    const btnModal = document.querySelector("#showModal");
    const modal = document.querySelector("#modalContainer")
    const btnSubmit = document.querySelector("#inputValue");
    btnModal.addEventListener("click", (e) => {
        modal.showModal();
        closeModal();
        btnSubmit.disabled = true;
    })
}

const closeModal = () => {
    const btnCancel = document.querySelector(".cancel");
    const inputModal = document.querySelector(".inputModalValue");
    const btnCloseModal = document.querySelector(".closeModal");
    const modal = document.querySelector("#modalContainer");
    btnCloseModal.addEventListener("click", (e) => {
        modal.close();
        inputModal.value = "";
    })
    btnCancel.addEventListener("click", (e) => {
        modal.close();
        inputModal.value = "";
    })


}