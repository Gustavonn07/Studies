export function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
    const random = (Math.random() * 16) | 0;
    const value = char === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
}

export class Toast {
  constructor(toastDiv) {
    if (!toastDiv || !(toastDiv instanceof HTMLElement)) {
      throw new Error("Elemento inválido ou não encontrado!");
    }
    this.toastDiv = toastDiv;
  }

  StatusType = {
    SUCCESS: 1,
    ERROR: 2,
  };

  getStatusType(value) {
    return (
      Object.keys(this.StatusType).find(
        (key) => this.StatusType[key] == value
      ) ?? null
    );
  }

  createToast(text, status) {
    const toastId = generateUUID();

    const isSuccess = status === this.StatusType.SUCCESS;
    const style = isSuccess
      ? "bg-green-200 text-gray-700 border-l-4 border-green-500"
      : "bg-red-200 text-gray-700 border-l-4 border-red-500";

    const toast = document.createElement("div");
    toast.textContent = text ?? "Erro ao fazer ação!";
    toast.id = toastId;
    toast.className = `fixed bottom-5 right-5 p-3 rounded shadow-md w-[300px] ${style}`;

    this.toastDiv.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 2000);
  }
}

export class EditModal {
  #toast

  constructor(toastDiv, taskId) {
    this.modal = null;
    this.taskId = taskId;
    this.#toast = new Toast(toastDiv);
  }

  generateModal(handleFunction) {
    if (this.modal) {
      this.modal.style.display = "flex";
      return;
    }

    this.modal = document.createElement("div");
    this.modal.classList.add(
      "fixed",
      "inset-0",
      "bg-gray-900",
      "bg-opacity-50",
      "flex",
      "items-center",
      "justify-center",
      "z-50"
    );

    const modalContent = document.createElement("div");
    modalContent.classList.add(
      "bg-white",
      "p-6",
      "rounded-lg",
      "shadow-md",
      "w-full",
      "max-w-md"
    );
    modalContent.innerHTML = `
      <h2 class="text-xl font-bold mb-4">Editar Tarefa</h2>
      <form id="editForm" class="flex flex-col gap-2">
        <input type="text" id="editInput" class="border p-2 rounded" placeholder="Nome da tarefa" />
        <div class="flex justify-end gap-2">
          <button type="button" id="cancelButton" class="bg-gray-400 text-white px-4 py-2 rounded">Cancelar</button>
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Salvar</button>
        </div>
      </form>
    `;

    this.modal.appendChild(modalContent);
    document.body.appendChild(this.modal);

    document.getElementById("cancelButton").addEventListener("click", () => {
      this.closeModal();
    });

    document.getElementById("editForm").addEventListener("submit", (event) => {
      event.preventDefault();
      const newValue = document.getElementById("editInput").value.trim();
      if (newValue) {
        handleFunction(this.taskId, newValue);
        this.closeModal();

        this.#toast.createToast(
          "Tarefa editada com sucesso!",
          this.#toast.StatusType.SUCCESS
        );
      }
    });
  }

  openModal(taskName, handleFunction) {
    this.generateModal(handleFunction);
    document.getElementById("editInput").value = taskName;
  }

  closeModal() {
    if (this.modal) {
      this.modal.style.display = "none";
    }
  }
}
