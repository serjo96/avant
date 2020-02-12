module.exports = {
	apps : [
		{
			name: "nuxt-prod",
			instances: 1,
			autorestart: true,
			max_memory_restart: '1G',
			script: "npm",
			args: "run start",
		}
	]
};


