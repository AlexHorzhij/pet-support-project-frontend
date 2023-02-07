import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import { ToWords } from 'to-words';
import isDate from 'date-fns/isDate';

export default function distanceBetweenDateAndNowWords(birthdate) {
  const toWords = new ToWords();

  if (isDate(birthdate)) {
    const ageArr = formatDistanceStrict(
      Date.now(),
      Date.parse(birthdate)
    ).split(' ');
    return [toWords.convert(ageArr[0]), ageArr[1]].join(' ');
  }
  return '';
}
