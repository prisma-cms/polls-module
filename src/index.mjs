
import Module from "./modules";


import PollModule, {
  PollProcessor,
} from "./modules/Poll";

export {
  PollModule,
  PollProcessor,
}


import PollQuestionModule, {
  PollQuestionProcessor,
} from "./modules/PollQuestion";

export {
  PollQuestionModule,
  PollQuestionProcessor,
}


import PollAnswerModule, {
  PollAnswerProcessor,
} from "./modules/PollAnswer";

export {
  PollAnswerModule,
  PollAnswerProcessor,
}


import PollQuestModule, {
  PollQuestProcessor,
} from "./modules/PollQuest";

export {
  PollQuestModule,
  PollQuestProcessor,
}


export const Modules = [
  PollModule,
  PollQuestionModule,
  PollAnswerModule,
  PollQuestModule,
]

export default Module
