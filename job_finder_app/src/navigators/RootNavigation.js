import {createRef} from 'react';

export const isReadyRef = createRef();
export const navigationRef = createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

// export function navigate(name, params) {
//   if (isReadyRef.current && navigationRef.current) {
//     // Perform navigation if the app has mounted
//     navigationRef.current.navigate(name, params);
//   } else {
//     // You can decide what to do if the app hasn't mounted
//     // You can ignore this, or add these actions to a queue you can call later
//   }
// }

export function goBack() {
  navigationRef.current?.goBack();
}
