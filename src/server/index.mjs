

import {
  modifyArgs,
  PrismaCmsServer,
} from "@prisma-cms/server";

import CoreModule, {
  Modules,
} from "../";

import UserModule from "@prisma-cms/user-module";

const coreModule = new CoreModule({
  modules: [UserModule].concat(Modules),
});

const resolvers = coreModule.getResolvers();


class PrismaCmsServerCustom extends PrismaCmsServer {

  // getServer() {
  //   const server = super.getServer();
  //   return server;
  // }


  // processRequest(request) {

  //   return super.processRequest({
  //     ...request,
  //   });
  // }

}


const startServer = function (options) {

  return new PrismaCmsServerCustom(options).startServer();

}


startServer({
  typeDefs: 'src/schema/generated/api.graphql',
  resolvers,
  contextOptions: {
    modifyArgs,
    resolvers,
  },
});


