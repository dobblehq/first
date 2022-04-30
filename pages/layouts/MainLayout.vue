<template>
	<div class="antialiased text-dobble-blue">
		<div>
			<div class="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 pt-4 sm:pt-0 flex items-center justify-between h-16 sm:h-28 xl:h-32">
				<img src="~/assets/images/logo.png" class="w-24 sm:w-28"/>
				<nav class="hidden sm:block">
					<ul class="space-x-20 flex items-center">
						<li class="font-semibold">About</li>
						<li class="font-semibold">Services</li>
						<li class="font-semibold">Contact</li>
					</ul>
				</nav>
			</div>
			<slot/>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>

</style>