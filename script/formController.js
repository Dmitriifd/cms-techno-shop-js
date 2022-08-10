import { category } from "./elems.js"
import { getCategory } from "./serviceAPI.js";

const updateCategory = async () => {
    category.textContent = '';
    const categoryList = await getCategory();
    const categoryOption = categoryList.map((category) => {
        const option = document.createElement('option');
        option.value = category;
        return option;
    });
    category.append(...categoryOption);
}

export const formController = () => {
    updateCategory();
}