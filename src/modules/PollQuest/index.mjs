
import PrismaModule from "@prisma-cms/prisma-module";
import PrismaProcessor from "@prisma-cms/prisma-processor";


export class PollQuestProcessor extends PrismaProcessor {

  constructor(props) {

    super(props);

    this.objectType = "PollQuest";
  }


  async create(method, args, info) {

    if(args.data) {

      let {
        ...data
      } = args.data;

      args.data = data;

    }

    return super.create(method, args, info);
  }


  async update(method, args, info) {

    if(args.data) {

      let {
        ...data
      } = args.data;

      args.data = data;

    }

    return super.update(method, args, info);
  }


  async mutate(method, args, info) {

    if(args.data) {

      let {
        ...data
      } = args.data;

      args.data = data;

    }

    return super.mutate(method, args);
  }



  async delete(method, args, info) {

    return super.delete(method, args);
  }
}


export default class PollQuestModule extends PrismaModule {

  constructor(props = {}) {

    super(props);

    this.mergeModules([
    ]);

  }


  getProcessor(ctx) {
    return new (this.getProcessorClass())(ctx);
  }


  getProcessorClass() {
    return PollQuestProcessor;
  }


  getResolvers() {

    const {
      Query: {
        ...Query
      },
      Subscription: {
        ...Subscription
      },
      Mutation: {
        ...Mutation
      },
      ...other
    } = super.getResolvers();

    return {
      ...other,
      Query: {
        ...Query,
        pollQuest: (source, args, ctx, info) => {
          return ctx.db.query.pollQuest(args, info);
        },
        pollQuests: (source, args, ctx, info) => {
          return ctx.db.query.pollQuests(args, info);
        },
        pollQuestsConnection: (source, args, ctx, info) => {
          return ctx.db.query.pollQuestsConnection(args, info);
        },
      },
      Mutation: {
        ...Mutation,
        createPollQuestProcessor: (source, args, ctx, info) => {
          return this.getProcessor(ctx).createWithResponse("PollQuest", args, info);
        },
        updatePollQuestProcessor: (source, args, ctx, info) => {
          return this.getProcessor(ctx).updateWithResponse("PollQuest", args, info);
        },
        deletePollQuest: (source, args, ctx, info) => {
          return this.getProcessor(ctx).delete("PollQuest", args, info);
        },
      },
      Subscription: {
        ...Subscription,
        pollQuest: {
          subscribe: async (parent, args, ctx, info) => {

            return ctx.db.subscription.pollQuest({}, info);
          },
        },
      },
      PollQuestResponse: {
        data: (source, args, ctx, info) => {

          const {
            id,
          } = source.data || {};

          return id ? ctx.db.query.pollQuest({
            where: {
              id,
            },
          }, info) : null;
        },
      },
    }

  }

}