---
title: VScode 配置 vue3 代码片段
date: 2024/05/05
tags:
  - vscode/code-snippets
---

```json
{
	"Vue Single File Template": {
		"prefix": "vbase",
		"body": [
			"<script setup lang=\"ts\">",
			"",
			"</script>",
			"",
			"<template>",
			"",
			"</template>",
			"",
			"<style lang=\"scss\" scoped>",
			"",
			"</style>"
		],
		"description": "Vue Single File Template"
	},
	"Vue Script Element": {
		"prefix": "vscript",
		"body": [
			"<script setup lang=\"ts\">",
			"",
			"</script>",
		],
		"description": "Vue Script Element"
	},
	"Vue Template Element": {
		"prefix": "vtemplate",
		"body": [
			"<template>",
			"",
			"</template>",
		],
		"description": "Vue Template Element"
	},
	"Vue Style Element": {
		"prefix": "vstyle",
		"body": [
			"<style lang=\"scss\" scoped>",
			"",
			"</style>"
		],
		"description": "Vue Style Element"
	},
	"Vue Transition": {
		"prefix": "vtrans",
		"body": [
			"<Transition name=\"${1:transitionName}\">",
			"\t${0}",
			"</Transition>"
		],
		"description": "vue transition component"
	},
	"Vue Transition Group": {
		"prefix": "vtrans-group",
		"body": [
			"<TransitionGroup name=\"${1:transitionName}\">",
			"\t${0}",
			"</TransitionGroup>"
		],
		"description": "vue transition group component"
	},
	"Vue Ref": {
		"prefix": "vref",
		"body": [
			"const ${1:name} = ref(${2:initialValue})"
		],
		"description": "Vue Ref"
	},
	"Vue Ref typed": {
		"prefix": "vref-typed",
		"body": [
			"const ${1:name} = ref<${2:type}>(${3:initialValue})"
		],
		"description": "Vue Ref with generic type argument"
	},
	"Vue Reactive": {
		"prefix": "vreactive",
		"body": [
			"const ${1:name} = reactive({",
			"\t${2:count}: ${3:0}",
			"})"
		],
		"description": "Vue reactive"
	},
	"Vue Computed": {
		"prefix": "vcomputed",
		"body": [
			"const ${1:name} = computed(() => {",
			"\treturn ${2}",
			"})"
		],
		"description": "Vue computed"
	},
	"Vue Watch": {
		"prefix": "vwatch",
		"body": [
			"watch(",
			"\t() => ${1:name},",
			"\t() => {",
			"\t\t${2}",
			"\t}",
			")"
		],
		"description": "Vue watcher"
	},
	"Vue Watch Effect": {
		"prefix": "vwatcheffect",
		"body": [
			"watchEffect(() => {",
			"\t${1}",
			"})"
		],
		"description": "Vue Watch Effect"
	},
	"Vue Lifecycle Hooks - onMounted": {
		"prefix": "vonmounted",
		"body": [
			"onMounted(() => {",
			"\t${1}",
			"})"
		],
		"description": "Vue onMounted Lifecycle hook"
	},
	"Vue Lifecycle Hooks - onBeforeMount": {
		"prefix": "vonbeforemount",
		"body": [
			"onBeforeMount(() => {",
			"\t${1}",
			"})"
		],
		"description": "Vue onBeforeMount Lifecycle hook"
	},
	"Vue Lifecycle Hooks - onBeforeUpdate": {
		"prefix": "vonbeforeupdate",
		"body": [
			"onBeforeUpdate(() => {",
			"\t${1}",
			"})"
		],
		"description": "Vue onBeforeUpdate Lifecycle hook"
	},
	"Vue Lifecycle Hooks - onUpdated": {
		"prefix": "vonupdated",
		"body": [
			"onUpdated(() => {",
			"\t${1}",
			"})"
		],
		"description": "Vue onUpdated Lifecycle hook"
	},
	"Vue Lifecycle Hooks - onErrorCaptured": {
		"prefix": "vonerrorcaptured",
		"body": [
			"onErrorCaptured(() => {",
			"\t${1}",
			"})"
		],
		"description": "Vue onErrorCaptured Lifecycle hook"
	},
	"Vue Lifecycle Hooks - onUnmounted": {
		"prefix": "vonunmounted",
		"body": [
			"onUnmounted(() => {",
			"\t${1}",
			"})"
		],
		"description": "Vue onUnmounted Lifecycle hook"
	},
	"Vue Lifecycle Hooks - onBeforeUnmount": {
		"prefix": "vonbeforeunmount",
		"body": [
			"onBeforeUnmount(() => {",
			"\t${1}",
			"})"
		],
		"description": "Vue onBeforeUnmount Lifecycle hook"
	},
	"Vue Define Props": {
		"prefix": "vdefineprops",
		"body": [
			"defineProps<{",
			"\t${1:name}: ${2:type}",
			"}>()"
		],
		"description": "Vue defineProps"
	},
	"Vue Define Props with defaults": {
		"prefix": "vdefineprops-withdefaults",
		"body": [
			"withDefaults(defineProps<{",
			"\t${1:name}: ${2:type}",
			"}>(), {",
			"\t${1:name}: ${3:default}",
			"})"
		],
		"description": "Vue withDefaults(defineProps)"
	},
	"Vue Define Emits": {
		"prefix": "vdefineemits",
		"body": [
			"const emit = defineEmits<{",
			"\t${1:eventName}: [${0}]",
			"}>()"
		],
		"description": "Vue defineEmits"
	},
	"Vue Single Emit": {
		"prefix": "vsingleemit",
		"body": [
			"${1:eventName}: [${0}]",
		],
		"description": "Vue single emit for defineEmits"
	},
	"Vue Define Slots": {
		"prefix": "vdefineslots",
		"body": [
			"defineSlots<{",
			"\tdefault: (props: { ${0} }) => any",
			"}>()"
		],
		"description": "Vue defineSlots"
	},
	"Vue Single Slot": {
		"prefix": "vsingleslot",
		"body": [
			"\t${1:slotName}: (props: { ${0} }) => any",
		],
		"description": "Vue single slot for defineSlots"
	},
	"Vue Define Options": {
		"prefix": "vdefineoptions",
		"body": [
			"defineOptions({",
			"\t${0}",
			"})"
		],
		"description": "Vue defineOptions"
	},
	"Vue Define Model": {
		"prefix": "vdefinemodel",
		"body": [
			"const modelValue = defineModel()",
		],
		"description": "Vue defineModel"
	},
	"Vue Style Binding Object": {
		"prefix": "vstyle-obj",
		"body": [
			":style=\"[${2:styleObjectA}, ${3:styleObjectB]}\""
		],
		"description": "vue inline style binding, objects"
	},
	"Vue Class Binding": {
		"prefix": "vclass",
		"body": [
			":class=\"{ '${2:classList}': ${1:condition} }\""
		],
		"description": "vue class binding"
	},
	"Vue Class Binding Ternary": {
		"prefix": "vclass-ter",
		"body": [
			":class=\"[${1:condition} ? '${2:classListOnTrue}' : '${3:classListOnFalse}']\""
		],
		"description": "vue ternary class binding"
	},
}
```
