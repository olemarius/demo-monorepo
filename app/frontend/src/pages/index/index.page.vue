        
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
 import { useHelloWorld } from 'pinia-store';
 const { message } = storeToRefs(useHelloWorld());
import TestCounter from './TestCounter.vue';
const components = { TestCounter };
message.value = 'Pinia Store Message has been overridden!';
</script>
<template>
    <h1>Hello from Vercel</h1>
    <div>

        This page is: {{ $t('hello') }}
    </div>
    <div>
        `message` from pinia-store: {{ message }}
    </div>
    <ul>
        <li>Rendered to HTML.</li>
        <li>Interactive. <TestCounter /></li>
    </ul>
</template>