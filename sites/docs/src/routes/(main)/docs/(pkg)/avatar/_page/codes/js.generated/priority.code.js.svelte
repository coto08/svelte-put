<script>
  import Avatar from '@svelte-put/avatar/Avatar.svelte';
  export let id;
  export let email = '';
  export let firstName = '';
  export let lastName = '';
</script>

<Avatar
  src="https://your.api/avatar/{id}"
  gravatar={email}
  uiAvatar="{firstName}+{lastName}"
  fallback="https://your.api/avatar/default"
/>
