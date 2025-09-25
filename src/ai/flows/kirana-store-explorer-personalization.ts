'use server';
/**
 * @fileOverview A Kirana Store Explorer Personalization AI agent.
 *
 * - personalizeKiranaStoreExplorer - A function that handles the kirana store explorer personalization process.
 * - PersonalizeKiranaStoreExplorerInput - The input type for the personalizeKiranaStoreExplorer function.
 * - PersonalizeKiranaStoreExplorerOutput - The return type for the personalizeKiranaStoreExplorer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeKiranaStoreExplorerInputSchema = z.object({
  userLocation: z
    .string()
    .describe('The user location, including latitude and longitude.'),
  preferredStoreTraits: z
    .string()
    .describe(
      'A description of the preferred traits of kirana stores for the user, such as cleanliness, variety of products, and friendliness of staff.'
    ),
});
export type PersonalizeKiranaStoreExplorerInput = z.infer<
  typeof PersonalizeKiranaStoreExplorerInputSchema
>;

const PersonalizeKiranaStoreExplorerOutputSchema = z.object({
  personalizedStoreList: z
    .string()
    .describe(
      'A list of kirana stores personalized for the user based on their location and preferences.'
    ),
});
export type PersonalizeKiranaStoreExplorerOutput = z.infer<
  typeof PersonalizeKiranaStoreExplorerOutputSchema
>;

export async function personalizeKiranaStoreExplorer(
  input: PersonalizeKiranaStoreExplorerInput
): Promise<PersonalizeKiranaStoreExplorerOutput> {
  return personalizeKiranaStoreExplorerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeKiranaStoreExplorerPrompt',
  input: {schema: PersonalizeKiranaStoreExplorerInputSchema},
  output: {schema: PersonalizeKiranaStoreExplorerOutputSchema},
  prompt: `You are an expert in personalizing the Kirana Store Explorer experience for users.

You will use the user's location and preferred store traits to generate a list of Kirana stores that are most relevant and appealing to them.

User Location: {{{userLocation}}}
Preferred Store Traits: {{{preferredStoreTraits}}}

Based on this information, generate a personalized list of Kirana stores for the user. Consider factors such as proximity, store characteristics, and user preferences to create a compelling and relevant list.

{{#if preferredStoreTraits}}
  Prioritize stores that match the following preferred traits: {{{preferredStoreTraits}}}
{{/if}}

Ensure that the list is well-formatted and easy to understand, providing a seamless and enjoyable browsing experience for the user.
`,
});

const personalizeKiranaStoreExplorerFlow = ai.defineFlow(
  {
    name: 'personalizeKiranaStoreExplorerFlow',
    inputSchema: PersonalizeKiranaStoreExplorerInputSchema,
    outputSchema: PersonalizeKiranaStoreExplorerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
