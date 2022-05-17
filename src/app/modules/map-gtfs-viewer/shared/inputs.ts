import { faExpand, faTags, faMapMarkerAlt, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';


export const backwardIcon = faStepBackward;
export const forwardIcon = faStepForward;
export const locationIcon = faMapMarkerAlt;
export const centerIcon = faExpand;
export const tagsIcon = faTags;

export const currentDate = now();

function now(): Date {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date
}
