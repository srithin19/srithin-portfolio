import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export { gsap, ScrollTrigger, useGSAP };

/** Strong ease-out used for every enter animation on the page. */
export const EASE = 'expo.out';

export const MOTION_OK = '(prefers-reduced-motion: no-preference)';
export const FINE_POINTER = '(pointer: fine) and (prefers-reduced-motion: no-preference)';
