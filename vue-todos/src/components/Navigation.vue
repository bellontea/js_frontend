<template>
  <div id="nav">
	<div class="link-wrapper">
		<div id="nav-links">
			<router-link class="nav-link" to="/">Список дел</router-link>
			<router-link class="nav-link" to="/info">Инфо</router-link>
		</div>
	  <a @click="onLogoutClicked" class="logout nav-link">
		Выйти
	  </a>
	</div>
  </div>
</template>

<script>
import { doLogout } from '@/netClient/authService';

export default {
	name: 'Nav',
	methods : {
		async onLogoutClicked() {
	  		try {
				await doLogout();
				this.$router.push('/login');
			} catch (error) {
				console.error({ error });
			}
		}
  	}
}
</script>

<style scoped>

</style>