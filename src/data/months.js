export const months = {
  2021: {
    Dezembro: {
      storage: 'Dezembro_tracker_xxi',
      days: [' ',' ',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,
      17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,' ',' '],
    },
  },

  2022: {
    Janeiro: {
      storage: 'Janeiro_tracker_xxii',
      days: [' ',' ',' ',' ',' ',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,
      17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,' ',' ',' ',' ',' ',' '],
    },
    Fevereiro: {
      storage: 'Fevereiro_tracker_xxii',
      days: [' ',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,
      17,18,19,20,21,22,23,24,25,26,27,28,' ',' ',' ',' ',' ',' '],
    },
    Março: {
      storage: 'Março_tracker_xxii',
      days: [' ',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,
      17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,' ',' ',' '],
    },
    Abriu: {
      storage: 'Abriu_tracker_xxii',
      days: [' ',' ',' ','x',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,
      17,18,19,20,21,22,23,24,25,26,27,28,29,30,' '], 
    },
  }
}

export default function handleMonth(ano, mes) {
  if( typeof(mes) === 'number' ) {
    switch (mes) {
      case 0:
        mes = 'Janeiro'
        break;
      case 1:
        mes = 'Fevereiro'
        break
      case 11:
        mes = 'Dezembro'
        break
      default:
        break;
    }
    return { year: ano, month: mes, result: months[ano][mes] }
 }
return { year: ano, month: mes, result: months[ano][mes] }
}