import components from '@bloc/bloc-components';

const UiLibPlugin = {
  install(app: any) {
    for (const [name, component] of Object.entries(components)) {
      app.component(name, component);
    }
  },
};

export default UiLibPlugin;
