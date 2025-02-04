import { writable } from 'svelte/store';

// Ширина экранов для адаптива
export const tabletWidth = 991.98;
export const mobileWidth = 767.98;
export const mobileSmallWidth = 479.98;

export const isAuthModalOpen = writable(false);
export const authModalStore = {
	subscribe: isAuthModalOpen.subscribe,
	open: () => isAuthModalOpen.set(true),
	close: () => isAuthModalOpen.set(false),
	toggle: () => isAuthModalOpen.update((value) => value)
};
