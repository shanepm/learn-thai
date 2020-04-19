import ReferenceItem from '@/components/ReferenceItem/ReferenceItem.vue'
import referenceTabs from '@/consts/reference-tabs'

export default {
	name: 'Reference',
	components: {
		ReferenceItem
	},
	computed: {
		activeTab: {
			set (tab) {
				this.$store.commit('setActiveTab', tab)
			},
			get () {
				return this.$store.state.activeTab
			}
		}
	},
	methods: {
		updateRouter (val) {
			this.$router.push(val)
		}
	},
	data: () => ({
		tabs: referenceTabs
	})
}
