        
<script lang="ts" setup>
import TestCounter from './TestCounter.vue';
const components = { TestCounter };
</script>
<template>
    <h1>Hello from Vercel</h1>
    This page is: {{ $t('hello') }}
    <ul>
        <li>Rendered to HTML.</li>
        <li>Interactive. <TestCounter /></li>
    </ul>
</template>