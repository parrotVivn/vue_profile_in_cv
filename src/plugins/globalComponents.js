import global from "@/components/global/_index";
export const components = { ...global };
export default {
  install(Vue) {
    Object.keys(components).forEach((componentName) => {
      Vue.component(componentName, components[componentName]);
    });
  },
};
