import { ThreeCircles } from 'react-loader-spinner';
import css from './Loader.module.css';

// лоудер як приклад (щоб правильно працювала логіка, красивий буде пізніше)
export const Loader = () => {
  return (
    <div className={css.loader}>
      <ThreeCircles
        height="30"
        width="30"
        color="skyblue"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};
