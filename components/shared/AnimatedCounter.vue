<template>
  <span ref="counter" class="text-accent text-4xl sm:text-5xl font-bold">
    {{ displayValue }}
  </span>
</template>

<script>
import { CountUp } from "countup.js";

export default {
  props: {
    end: Number,
    duration: {
      type: Number,
      default: 2,
    },
    suffix: {
      type: String,
      default: "+",
    },
  },
  data() {
    return {
      displayValue: "0",
    };
  },
  mounted() {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const counter = new CountUp(this.$refs.counter, this.end, {
          duration: this.duration,
          suffix: this.suffix,
        });
        if (!counter.error) {
          counter.start();
          observer.unobserve(this.$refs.counter);
        }
      }
    });
    observer.observe(this.$refs.counter);
  },
};
</script>
