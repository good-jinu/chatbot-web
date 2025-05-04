import { generateUUID } from '@/lib/utils';
import { generateObject, tool } from 'ai';
import { z } from 'zod';
import { myProvider } from '../providers';

export const createArgument = () =>
  tool({
    description:
      'Create key points for a given topic. The output will be a list of key points.',
    parameters: z.object({
      topic: z.string(),
    }),
    execute: async ({ topic }) => {
      const id = generateUUID();
      const genrated = await generateObject({
        model: myProvider.languageModel('chat-model'),
        system:
          'Create key points for a given topic. The output will be a list of key points. Each key point will have a subject and two arguments for each side.' +
          'Alice and Bob are two people who are arguing about the topic. The output will be a list of key points with arguments for each side.' +
          'Generally, Alice will be in favor of the topic and Bob will be against it. The output will be a list of key points with arguments for each side.',
        schema: z.object({
          keyPoints: z.array(
            z.object({
              subject: z.string(),
              Alice: z.string(),
              Bob: z.string(),
            }),
          ),
        }),
        prompt: `topic: ${topic}`,
      });


      return {
        topic,
        ...genrated.object
      };
    },
  });
