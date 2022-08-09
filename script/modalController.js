import { form } from "./elems.js";
import { hidePreview } from "./previewController.js";

const openModal = (modal, classOpen) => {
    modal.classList.add(classOpen);
};
const closeModal = (modal, classOpen) => {
	modal.classList.remove(classOpen);
    hidePreview();
   [...form.elements].forEach(element => {
    if (
			element.type === 'textarea' ||
			element.type === 'text' ||
			element.type === 'number'
		) {
			element.value =  '';
		}
   });
};

export const modalController = ({ modal, modalBtn, classOpen, classClose } = {}) => {

    modalBtn.addEventListener('click', () => {
        openModal(modal, classOpen);
    });

    modal.addEventListener('click', ({ target }) => {
        if (target === modal || target.classList.contains(classClose)) {
			closeModal(modal, classOpen);
		}
    });

};

