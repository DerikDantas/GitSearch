import Swal from "sweetalert2";
import { colors } from "../assets/colors/colors";

export function alertaMensagem(mensagem: string, icone: any): void {
  Swal.fire({
    icon: icone,
    html: `<div style="margin: 0 0 20px">${mensagem}</div>`,
    showConfirmButton: true,
    confirmButtonText: "Ok",
    confirmButtonColor: colors.secondary,
  });
}

export function carregando(mensagem: string) {
  Swal.fire({
    html: mensagem,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
}
export function finalizarCarregamento() {
  Swal.close();
}
