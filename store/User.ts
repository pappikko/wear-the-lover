import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators';

@Module({
  name: 'User',
  stateFactory: true,
  namespaced: true,
})
export default class UserModule extends VuexModule {
};
