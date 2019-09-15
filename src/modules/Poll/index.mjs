
import PrismaModule from "@prisma-cms/prisma-module";
import PrismaProcessor from "@prisma-cms/prisma-processor";


export class PollProcessor extends PrismaProcessor {

  constructor(props) {

    super(props);

    this.objectType = "Poll";

    this.private = true;
    this.ownable = true;
  }


  async create(method, args, info) {

    if (args.data) {

      let {
        ...data
      } = args.data;

      args.data = data;

    }

    return super.create(method, args, info);
  }


  async update(method, args, info) {

    if (args.data) {

      let {
        ...data
      } = args.data;

      args.data = data;

    }

    return super.update(method, args, info);
  }


  async mutate(method, args, info) {

    if (args.data) {

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


export default class PollModule extends PrismaModule {

  constructor(props = {}) {

    super(props);

    this.mergeModules([
    ]);

  }


  getProcessor(ctx) {
    return new (this.getProcessorClass())(ctx);
  }


  getProcessorClass() {
    return PollProcessor;
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
        poll: (source, args, ctx, info) => {
          return ctx.db.query.poll(args, info);
        },
        polls: (source, args, ctx, info) => {
          return ctx.db.query.polls(args, info);
        },
        pollsConnection: (source, args, ctx, info) => {
          return ctx.db.query.pollsConnection(args, info);
        },
      },
      Mutation: {
        ...Mutation,
        createPollProcessor: (source, args, ctx, info) => {
          return this.getProcessor(ctx).createWithResponse("Poll", args, info);
        },
        updatePollProcessor: (source, args, ctx, info) => {
          return this.getProcessor(ctx).updateWithResponse("Poll", args, info);
        },
        deletePoll: (source, args, ctx, info) => {
          return this.getProcessor(ctx).delete("Poll", args, info);
        },
      },
      Subscription: {
        ...Subscription,
        poll: {
          subscribe: async (parent, args, ctx, info) => {

            return ctx.db.subscription.poll({}, info);
          },
        },
      },
      PollResponse: {
        data: (source, args, ctx, info) => {

          const {
            id,
          } = source.data || {};

          return id ? ctx.db.query.poll({
            where: {
              id,
            },
          }, info) : null;
        },
      },
    }

  }

}