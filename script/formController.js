import { category, form, modal } from './elems.js';
import { closeModal } from './modalController.js';
import { getCategory, postGoods } from './serviceAPI.js';
import { renderRow } from './tableView.js';
import { toBase64 } from './utils.js';

const updateCategory = async () => {
	category.textContent = '';
	const categoryList = await getCategory();
	const categoryOption = categoryList.map((category) => {
		const option = document.createElement('option');
		option.value = category;
		return option;
	});
	category.append(...categoryOption);
};

export const formController = () => {
	updateCategory();

	form.addEventListener('submit', async (e) => {
		e.preventDefault();

		const formData = [...new FormData(form)];
		const data = {};

		for (const [key, value] of formData) {
            if (value) {
                data[key] = value;
            }
		}

        if (data.image.size) {
            data.image = await toBase64(data.image);
		} else {
            delete data.image
        }
        
        const goods = await postGoods(data);
        renderRow(goods);
        closeModal(modal, 'd-block');
	});
};