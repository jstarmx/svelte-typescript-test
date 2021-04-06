<script>
  export let text;

  const onClick = () => window.alert(text);
</script>

<button on:click={onClick}>Click me!</button>
