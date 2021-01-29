export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const status = Object.freeze({
  idle: 'idle', //estado inicial al montar
  reset: 'reset', //estado cuando se resetea el estado
  pending: 'pending', //estado cuando se despacha accion asincrona
  loading: 'loading', //estado cuando la accion async esta tardando mas de lo esperado
  success: 'success', //estado cuando se resuelve la promesa correctamente
  error: 'error', //estado cuando NO se resuelve la promesa
  warning: 'warning', //estado cuando la resolucion es parcial o rejectamos con valor
});
