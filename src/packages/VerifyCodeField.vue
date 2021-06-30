<template>
  <label class="input-container">
    <input
      :value="nonNullValue(captcha[index])"
      class="input-cell"
      v-for="(value, index) in size"
      :key="value"
      @keydown="
        (event) =>
          !internalReadOnly && !internalDisabled && onAnyKeyDown(index, event)
      "
      maxlength="1"
      ref="input"
      :disabled="internalDisabled"
      :readonly="internalReadOnly"
      v-bind="$attrs"
      :placeholder="placeholder && placeholder[index]"
      autocapitalize="characters"
    />
  </label>
  <transition>
    <div class="error-text" v-if="error">{{ error }}</div>
  </transition>
</template>

<script>
import {
  computed,
  getCurrentInstance,
  inject,
  onDeactivated,
  ref,
  toRefs,
  watch,
} from "vue";

export default {
  name: "VerifyCodeField",
  props: {
    size: {
      type: Number,
      default: 6,
    },
    placeholder: {
      type: String,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Array,
      default: function () {
        return [];
      },
    },
    value: {
      type: String,
    },
    isValidate: {
      type: Boolean,
    },
  },
  emits: ["update:value", "update:is-validate"],
  setup(props, context) {
    let { value, rules, readonly, disabled, size } = toRefs(props);

    //region 输入相关
    let captcha = ref(Array.from({ length: size.value }));
    let internalValue = ref(value.value);
    watch(internalValue, (newValue, oldValue) => {
      if (newValue && newValue !== oldValue) {
        context.emit("update:value", String(newValue));
      }
    });
    watch(
      value,
      (newValue, oldValue) => {
        if (newValue && newValue !== oldValue) {
          captcha.value = String(newValue).split("");
        }
      },
      { immediate: true }
    );

    const nonNullValue = function (value) {
      if (value && value.trim()) {
        return value;
      } else {
        return null;
      }
    };

    let onAnyKeyDown = function (index, event) {
      let input = event.target;
      if (
        captcha.value[index] !== event.key &&
        event.key.length === 1 &&
        !event.metaKey &&
        !event.ctrlKey
      ) {
        captcha.value[index] = event.key;
        event.preventDefault();
      }

      if (event.key === "Backspace") {
        captcha.value[index] = null;
        if (input.previousSibling && input.previousSibling.focus) {
          input.previousSibling.focus();
        }
        event.preventDefault();
      }

      if (event.metaKey || event.ctrlKey) {
        event.preventDefault();
        return;
      }

      if (
        event.target.nextSibling &&
        event.target.nextSibling.focus &&
        event.key.length === 1
      ) {
        event.target.nextSibling.focus();
      }
      internalValue.value = captcha.value
        .map((it) => (it !== undefined && it !== null ? it : " "))
        .join("");
    };
    //endregion

    //region 验证相关
    let error = ref("");
    const form = inject("form", {
      disabled: false,
      readonly: false,
      lazyValidation: false,
      register() {},
      unregister() {},
    });
    let componentInternalInstance = getCurrentInstance();
    form.register(componentInternalInstance);
    onDeactivated(() => {
      form.unregister(componentInternalInstance);
    });
    let hasError = computed(() => Boolean(error.value));
    let internalReadOnly = computed(
      () => Boolean(readonly.value) || Boolean(form.readonly)
    );
    let internalDisabled = computed(
      () => Boolean(disabled.value) || Boolean(form.disabled)
    );

    let validate = function () {
      const errorBucket = [];
      if (!rules.value || !rules.value.length) {
        return true;
      }
      for (let index = 0; index < rules.value.length; index++) {
        const rule = rules.value[index];
        const valid =
          typeof rule === "function"
            ? rule(internalValue.value.replaceAll(/\s+/g, ""))
            : rule;

        if (valid === false || typeof valid === "string") {
          errorBucket.push(valid || "");
        } else if (typeof valid !== "boolean") {
          console.warn(
            `Rules should return a string or boolean, received '${typeof valid}' instead`,
            componentInternalInstance
          );
        }
      }
      error.value = errorBucket.join(",");
      return errorBucket.length === 0;
    };

    watch(value, () => {
      if (!form.lazyValidation) {
        let isValidate = validate();
        context.emit("update:is-validate", ref(isValidate));
      }
    });

    let resetValidation = function () {
      error.value = null;
    };
    let reset = function () {
      error.value = null;
      captcha.value = [];
      context.emit("update:value", ref(null));
    };
    //endregion
    return {
      captcha,
      onAnyKeyDown,
      nonNullValue,

      validate,
      resetValidation,
      reset,
      error,
      hasError,
      internalDisabled,
      internalReadOnly,
    };
  },
};
</script>
<style scoped>
.input-container{
  display: flex;
  flex-wrap: nowrap;
  justify-items: center;
  justify-content: center;
}
.error-text{
  color: darkred;
  font-size: small;
}
.input-cell {
  --tw-ring-inset: 8px;
  height: 3rem;
  width: 3rem;
  border-radius: 0.5rem;
  margin: 0.5rem;
  box-shadow: var(--tw-ring-inset) 0 0 0 8px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  font-weight: lighter;
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
  border: #2c3e50 1px solid;
  outline: none;
}

.input-cell:focus{
  --tw-ring-inset: 8px;
  outline: none;
  box-shadow: var(--tw-ring-inset) 0 0 0 8px rgba(0, 0, 0, 0.1);
  border-width: 3px;
  border-color: blueviolet;
}
.input-cell:disabled{
  box-shadow: none;
  border-color: #2c3e50;
  background-color: #f5f0f0;
}

.input-cell::placeholder {
  color: darkgrey;
  font-size: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
