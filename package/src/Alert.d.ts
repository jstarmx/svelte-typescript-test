import { SvelteComponentTyped } from 'svelte';

export interface AlertProps {
  text: string;
}

export default class Alert extends SvelteComponentTyped<AlertProps> {}
