const MIN_RENIEC = 9999999;
const MIN_SUNAT = 9999999999;
const MAX_RENIEC = 100000000;
const MAX_SUNAT = 100000000000;

const esNumero = () => {
  return true;
};

export const esReniecSunat = (valor: number) => {
  if (valor > MIN_RENIEC && valor < MAX_RENIEC) {
    return { resultado: true, tipo: "RENIEC" };
  } else if (valor > MIN_SUNAT && valor < MAX_SUNAT) {
    return { resultado: true, tipo: "SUNAT" };
  } else {
    return { resultado: false, tipo: "-" };
  }
};

export const limitar2Decimales = (evento: any, valor: string) => {
  let keyCode = evento.keyCode ? evento.keyCode : evento.which;
  if (
    (keyCode < 48 || keyCode > 57) &&
    (keyCode !== 46 || valor.indexOf(".") != -1)
  ) {
    return evento.preventDefault();
  }
  if (
    valor != null &&
    valor.indexOf(".") > -1 &&
    valor.split(".")[1].length > 1
  ) {
    return evento.preventDefault();
  }
};

export const limitar3Decimales = (evento: any, valor: string) => {
  let keyCode = evento.keyCode ? evento.keyCode : evento.which;
  if (
    (keyCode < 48 || keyCode > 57) &&
    (keyCode !== 46 || valor.indexOf(".") != -1)
  ) {
    return evento.preventDefault();
  }
  if (
    valor != null &&
    valor.indexOf(".") > -1 &&
    valor.split(".")[1].length > 2
  ) {
    return evento.preventDefault();
  }
};

export const limitarNDecimales = (valor: any, n: number) => {
  return valor.toFixed(n);
};

export const validarSoloNumeros = (e: {
  which: any;
  keyCode: any;
  preventDefault: () => void;
}) => {
  const charCode = e.which ? e.which : e.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
    e.preventDefault();
  }
};
