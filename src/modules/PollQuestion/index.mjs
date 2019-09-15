
import PrismaModule from "@prisma-cms/prisma-module";
import PrismaProcessor from "@prisma-cms/prisma-processor";


export class PollQuestionProcessor extends PrismaProcessor {

  constructor(props) {

    super(props);

    this.objectType = "PollQuestion";

    this.private = true;
    this.ownable = true;
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


export default class PollQuestionModule extends PrismaModule {

  constructor(props = {}) {

    super(props);

    this.mergeModules([
    ]);

  }


  getProcessor(ctx) {
    return new (this.getProcessorClass())(ctx);
  }


  getProcessorClass() {
    return PollQuestionProcessor;
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
        pollQuestion: (source, args, ctx, info) => {
          return ctx.db.query.pollQuestion(args, info);
        },
        pollQuestions: (source, args, ctx, info) => {
          return ctx.db.query.pollQuestions(args, info);
        },
        pollQuestionsConnection: (source, args, ctx, info) => {
          return ctx.db.query.pollQuestionsConnection(args, info);
        },
      },
      Mutation: {
        ...Mutation,
        createPollQuestionProcessor: (source, args, ctx, info) => {
          return this.getProcessor(ctx).createWithResponse("PollQuestion", args, info);
        },
        updatePollQuestionProcessor: (source, args, ctx, info) => {
          return this.getProcessor(ctx).updateWithResponse("PollQuestion", args, info);
        },
        deletePollQuestion: (source, args, ctx, info) => {
          return this.getProcessor(ctx).delete("PollQuestion", args, info);
        },
      },
      Subscription: {
        ...Subscription,
        pollQuestion: {
          subscribe: async (parent, args, ctx, info) => {

            return ctx.db.subscription.pollQuestion({}, info);
          },
        },
      },
      PollQuestionResponse: {
        data: (source, args, ctx, info) => {

          const {
            id,
          } = source.data || {};

          return id ? ctx.db.query.pollQuestion({
            where: {
              id,
            },
          }, info) : null;
        },
      },
    }

  }

}