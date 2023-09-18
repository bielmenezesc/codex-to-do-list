function executarSeEnter(event) {
    if (event.keyCode === 13) {
        document.querySelector(".tarefa").innerHTML += `
            <div class="item">
                <span id="itemName">
                    ${document.querySelector(".addTarefa input").value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_items = document.querySelectorAll(".delete");
        for (var i = 0; i < current_items.length; i++) {
            current_items[i].onclick = function () {
                this.parentNode.remove();
            }
        }

        var items = document.querySelectorAll(".item");
        for (var i = 0; i < items.length; i++) {
            items[i].onclick = function () {
                this.classList.toggle('itemFeito');
            }
        }

        document.querySelector(".addTarefa input").value = "";
    }
}