import UXImage from '../assets/illustrations/3647007.png';
import PSImage from '../assets/illustrations/4991639.png';
import DVImage from '../assets/illustrations/9814.png';
import IlImage from '../assets/illustrations/Wavy_Bus-35_Single-03.png';

export const getIllustration = (id) => {
  return id === 0 ? UXImage : id === 1 ? PSImage : id === 2 ? IlImage : DVImage;
};

export const getBackground = (id) => {
  return id === 0
    ? {backgroundColor: '#FDAAB0'}
    : id === 1
    ? {backgroundColor: '#E296DE'}
    : id === 2
    ? {backgroundColor: '#9E7CF4'}
    : {backgroundColor: '#96D8CA'};
};
