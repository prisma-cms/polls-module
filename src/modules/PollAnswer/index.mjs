
import PrismaModule from "@prisma-cms/prisma-module";
import PrismaProcessor from "@prisma-cms/prisma-processor";


export class PollAnswerProcessor extends PrismaProcessor {

  constructor(props) {

    super(props);

    this.objectType = "PollAnswer";
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


export default class PollAnswerModule extends PrismaModule {

  constructor(props = {}) {

    super(props);

    this.mergeModules([
    ]);

  }


  getProcessor(ctx) {
    return new (this.getProcessorClass())(ctx);
  }


  getProcessorClass() {
    return PollAnswerProcessor;
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
        pollAnswer: (source, args, ctx, info) => {
          return ctx.db.query.pollAnswer(args, info);
        },
        pollAnswers: (source, args, ctx, info) => {
          return ctx.db.query.pollAnswers(args, info);
        },
        pollAnswersConnection: (source, args, ctx, info) => {
          return ctx.db.query.pollAnswersConnection(args, info);
        },
      },
      Mutation: {
        ...Mutation,
        createPollAnswerProcessor: (source, args, ctx, info) => {
          return this.getProcessor(ctx).createWithResponse("PollAnswer", args, info);
        },
        updatePollAnswerProcessor: (source, args, ctx, info) => {
          return this.getProcessor(ctx).updateWithResponse("PollAnswer", args, info);
        },
        deletePollAnswer: (source, args, ctx, info) => {
          return this.getProcessor(ctx).delete("PollAnswer", args, info);
        },
      },
      Subscription: {
        ...Subscription,
        pollAnswer: {
          subscribe: async (parent, args, ctx, info) => {

            return ctx.db.subscription.pollAnswer({}, info);
          },
        },
      },
      PollAnswerResponse: {
        data: (source, args, ctx, info) => {

          const {
            id,
          } = source.data || {};

          return id ? ctx.db.query.pollAnswer({
            where: {
              id,
            },
          }, info) : null;
        },
      },
    }

  }

}