import { modalController } from "./modalController.js";
import { getGoods, deleteGoods } from './serviceAPI.js';
import { tableRender } from "./tableView.js"
import { tableGoods } from './elems.js';

export const tableController = async () => {
    const goods = await getGoods();
    tableRender(goods);
    modalController({
        delegation: {
            parent: tableGoods,
            target: '.table-goods-item',
            targetExclude: '.btn-delete'
        }
    });

    tableGoods.addEventListener('click', async ({ target }) => {
        const delBtn = target.closest('.btn-delete');
        if (delBtn) {
            const row = delBtn.closest('.table-goods-item');
            const isDel = await deleteGoods(row.dataset.id);

            if (isDel) {
                row.remove();
            }
        }
    })
}