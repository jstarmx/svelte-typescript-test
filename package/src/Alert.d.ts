import { SvelteComponentTyped } from 'svelte';

export interface AlertProps {
  text: number;
}

export default class Alert extends SvelteComponentTyped<AlertProps> {}
