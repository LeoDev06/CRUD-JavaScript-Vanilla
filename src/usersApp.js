import { renderModal } from "./presentation/RenderModal/renderModal";
import { renderAddButton } from "./presentation/renderAddButton/renderAddButton";
import { renderButton } from "./presentation/renderButtons/renderButton";
import { renderTable } from "./presentation/renderTable/renderTable";
import usersStore from "./store/usersStore";
import { saveUser } from "./useCases/saveUser";

export const usersApp = async(elementHTML) => {
  elementHTML.innerHTML = `🥱 Loading...`;
  await usersStore.loadNextPage();
  renderTable(elementHTML);
  renderButton(elementHTML);
  renderAddButton(elementHTML);
  renderModal(elementHTML, async(userLike) => {
    const user = await saveUser(userLike);
    usersStore.onUserChanged(user);
    renderTable();
  });
}
