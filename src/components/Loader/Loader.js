import { ThreeCircles } from 'react-loader-spinner';
import { LoaderWrapper, LoaderPageWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeCircles
        height="30"
        width="30"
        color="#f59256"
        visible={true}
        ariaLabel="three-circles-rotating"
      />
    </LoaderWrapper>
  );
};

export const LoaderWhite = () => {
  return (
    <LoaderWrapper>
      <ThreeCircles
        height="30"
        width="30"
        color="#fff"
        visible={true}
        ariaLabel="three-circles-rotating"
      />
    </LoaderWrapper>
  );
};

export const LoaderPage = () => {
  return (
    <LoaderPageWrapper>
      <ThreeCircles
        height="80"
        width="80"
        color="#f59256"
        visible={true}
        ariaLabel="three-circles-rotating"
      />
    </LoaderPageWrapper>
  );
};
export const Loader70 = () => {
  return (
    <LoaderWrapper>
      <ThreeCircles
        height="70"
        width="70"
        color="#f59256"
        visible={true}
        ariaLabel="three-circles-rotating"
      />
    </LoaderWrapper>
  );
};
export const Loader25 = () => {
  return (
    <LoaderWrapper>
      <ThreeCircles
        height="25"
        width="25"
        color="#f59256"
        visible={true}
        ariaLabel="three-circles-rotating"
      />
    </LoaderWrapper>
  );
};
