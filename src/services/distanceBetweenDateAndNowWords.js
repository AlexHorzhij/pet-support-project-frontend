import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import { ToWords } from 'to-words';

export default function distanceBetweenDateAndNowWords(birthdate) {
  const toWords = new ToWords();

  if (birthdate) {
    const ageArr = formatDistanceStrict(
      Date.now(),
      Date.parse(birthdate)
    ).split(' ');
    return [toWords.convert(ageArr[0]), ageArr[1]].join(' ');
  }
  return '';
}
