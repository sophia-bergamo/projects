export const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

  // (?=.*\d) deve conter ao menos um dígito
  // [0-9a-zA]{8,} deve conter ao menos 7 dos caracteres mencionados