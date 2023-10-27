export const handleModal = () => {
    const btnModal = document.querySelector("#showModal");
    const modal = document.querySelector("#modalContainer")
    btnModal.addEventListener("click", (e) => {
        modal.showModal();
        closeModal();
    })
}

const closeModal = () => {
    const inputModal = document.querySelector("inputModalValue");
    const btnCloseModal = document.querySelector(".closeModal");
    const modal = document.querySelector("#modalContainer");
    btnCloseModal.addEventListener("click", (e) => {
        modal.close();
    })

}